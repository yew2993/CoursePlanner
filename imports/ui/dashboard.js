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
      Session.set('universities', res);
      Meteor.setTimeout(function() {
        $('select').material_select();
      }, 20);
    }
  });
};
let getColleges = () => {
  let university = $("#select-university").find(":selected").text();
  if (university) {
    Meteor.call('Courses.getColleges', {university}, (err,res) => {
      if (err) {
        console.log(err)
      }
      else {
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
  if (university) {
    Meteor.call('Courses.getSemesters', {university}, (err,res) => {
      if (err) {
        console.log(err)
      }
      else {
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
    return Calendars.find({}).fetch();
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
  'click #new-schedule-button'(e) {
    e.preventDefault();
    const university = $('#select-university').val().replace(/ /g, "+"),
          semester = $('#select-semester').val().replace(/ /g, "+"),
          colleges = $('#select-college').val().join("&colleges[]=").replace(/ /g, "+")
    if (university && semester  && colleges ) {
      // NOTE: consider adding a server-side check to ensure all 3 are compatible
      var query = `university=${university}&semester=${semester}&colleges[]=${colleges}`;
      Router.go('/scheduler?' + query);
    }
    else {
      // add a notification to complete the form
    }
  },
  'change #select-university'(e) {
    Session.set('semesters', '');
    Session.set('colleges', '');
    getSemesters();
    getColleges();
    $('#select-semester-wrapper').show();
  },
  'change #select-semester'(e) {
    $('#select-college-wrapper').show();
  },
  'change #select-college'(e) {
    $('#new-schedule-button-wrapper').show();
  }
});