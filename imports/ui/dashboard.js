import './dashboard.html'; 
import { Calendars } from '../api/calendars.js';
Template.dashboard.onCreated( () => {
  Template.instance().subscribe('Calendars');
});

Template.dashboard.rendered = function() {
  $('select').material_select();
};
Template.dashboard.helpers({
  'calendars'() {
    return Calendars.find({}).fetch()
  },
  'username'() {
    return Meteor.user().username;
  }
});
Template.dashboard.events({
  'click #new-schedule'(e) {
    e.preventDefault();
    var school = $('#selSchool').val();
    var level = $('#selLevel').val();
    var semester = $('#selSemester').val();
    if (school && level && semester) {
      Router.go('/scheduler/' + school + '/' + level + '/' + semester);
    }
    else {
      // add a notification to complete the form
    }
  }
});