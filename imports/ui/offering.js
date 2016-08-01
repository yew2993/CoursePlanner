import { Session } from 'meteor/session'
// import { Calendars } from '../api/calenders.js';
import './offering.html';

function getEvents(settings) {
  return Calendars.findOne({_id: settings.calId})[settings.reference];
}

Template.offering.helpers({

});

Template.offering.events({
  'click .toggle-offering-button'(e) {
    e.preventDefault();
    var settings = Session.get('schedulerSettings');
    var events = (Meteor.userId() ? getEvents(settings) : Session.get('events'));
    
    var origLength = events.length;
    var newEvents = events.filter(function(event) {
      return event.id !== this.crn;
    }, {crn: this.crn});
    
    if (newEvents.length === origLength) { // add the offering
      newEvents = $.merge(events, this.slots);
      e.target.innerHTML = "Remove";
    }
    else {  // remove the offering
      e.target.innerHTML = "Add";
    }
    if (Meteor.userId()) {
      var newEventsIds = {}
      newEventsObj[settings.reference] = newEvents.map( (event) => event._id );
      Meteor.call('events.update', {newEventsObj, calId: settings.calId }, (err, res) => {
            if (err) {
              console.log(err);
            }
          });
    }
    else {
      Session.set('events', newEvents);
    }
  }
});