import './dashboard.html';
import { Session } from 'meteor/session'
import { Calendars } from '../api/calendars.js';
import { Courses } from '../api/courses.js';
Template.dashboard.onCreated( () => {
  var self = Template.instance()
  self.subscribe('Calendars');
  self.subscribe('Courses');
  
});

let getUniversities = () => {
  Meteor.call('Courses.getUniversities', function (err, res) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(res)
      Session.set('universities', res);
      Meteor.setTimeout(function() {
        $('select').material_select();
      }, 20);
    }
  });
};
let getColleges = () => {
  var university = $("#select-university").find(":selected").text();
  var semester = $("#select-semester").find(":selected").text();
  console.log(university);
  console.log(semester);
  if (university && semester) {
    Meteor.call('Courses.getColleges', {university, semester}, (err,res) => {
      if (err) {
        console.log(err)
      }
      else {
        console.log(res)
        Session.set('colleges', res);
        Meteor.setTimeout(function() {
          $('select').material_select();
        }, 50);      
      }
    });
  }
};
let getSemesters = () => {
  var university = $("#select-university").find(":selected").text();
  console.log(university);
  if (university) {
    Meteor.call('Courses.getSemesters', {university}, (err,res) => {
      if (err) {
        console.log(err)
      }
      else {
        console.log(res)
        Session.set('semesters', res);
        Meteor.setTimeout(function() {
          $('select').material_select();
        }, 20);      
      }
    });
  }
};

Template.dashboard.rendered = function() {
  getUniversities();
  $('select').material_select();
};
Template.dashboard.helpers({
  'calendars'() {
    return Calendars.find({}).fetch()
  },
  'username'() {
    return Meteor.user().username;
  },
  'getUniversities'() {
    return Session.get('universities');
  },
  'getSemesters'() {
    return Session.get('semesters');
  },
  'getColleges'() {
    return Session.get('colleges');
  },
});
Template.dashboard.events({
  'click #new-schedule'(e) {
    e.preventDefault();
    var university = $('#select-university').val();
    var semester = $('#select-semester').val();
    var colleges = $('#select-college').val().join("&colleges[]=");
    if (university && semester  && colleges ) {
      // NOTE: consider adding a server-side check to ensure all 3 are compatible
      var query = 'university=' + university + '&semester=' + semester + '&colleges[]=' + colleges;
      Router.go('/scheduler', {query: query});
    }
    else {
      // add a notification to complete the form
    }
  },
  'change #select-university'(e) {
    Session.set('semesters', '')
    Session.set('colleges', '')
    getSemesters();
  },
  'change #select-semester'(e) {
    Session.set('colleges', '')
    getColleges();
  }
});