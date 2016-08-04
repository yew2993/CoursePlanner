import { Session } from 'meteor/session'
import './offering.html';

var noConflicts = (events, newSlots) => {
  return newSlots.every( (slot) => {
    let newDow = slot.dow, newStart = parseInt(slot.start.replace(":", ""), 10), 
        newEnd = parseInt(slot.end.replace(":", ""), 10);
    return events.every( (event) => {
      let dow = event.dow, start = parseInt(event.start.replace(":", ""), 10), 
        end = parseInt(event.end.replace(":", ""), 10);
      let isOnTheSameDay = newDow.some( (day) => dow.indexOf(day) >= 0),
          startsInTheMiddle = newStart >= start && newStart <= end,
          endsInTheMiddle = newEnd <= end && newEnd >= start,
          envelops = newStart <= start && newEnd >= end;
      // false return value indicates that there was a conflict
      return !(isOnTheSameDay && (startsInTheMiddle || endsInTheMiddle || envelops));
    });
  });
};

Template.offering.events({
  'click .toggle-offering-button'(e) {
    e.preventDefault();
    var events = Session.get('events');
    var newEvents = events.filter(function(event) {
      return event.id !== this.crn;
    }, {crn: this.crn});
    
    if (newEvents.length !== events.length) { // remove the offering
      e.target.innerHTML = "Add";
      Materialize.toast("Removed " + this.crn + " - " + this.title, 2500, 'rounded blue lighten-2');
    }
    else {  // add the offering
      if (Session.get("allowConflicts") || noConflicts(events, this.slots)) {
        newEvents = $.merge(events, this.slots);
        Materialize.toast("Added " + this.crn + " - " + this.title, 2500, 'rounded blue lighten-2');
        e.target.innerHTML = "Remove";
      }
      else {
        e.target.innerHTML = "Time Conflict";
        Materialize.toast(this.crn + " was not added due to time conflict", 2500, 'red darken-2 rounded');
        Meteor.setTimeout( () => {
          e.target.innerHTML = "Add"
        }, 2500)
      }
    }
    Session.set('events', newEvents);
  }
});