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

    //returns an array of all events that do not have a crn of the selected offering.
    //if the offering is being removed, the output array will be smaller than the input array. 
    var newEvents = events.filter(function(event) {
      return event.id !== this.crn;
    }, {crn: this.crn});
    
    if (newEvents.length !== events.length) { // remove the offering
      e.target.innerHTML = "Add";
      $(e.target).removeClass('red lighten-2');
      Materialize.toast("Removed " + this.crn + " - " + this.slots[0].title, 2500, 'rounded blue lighten-2');
    }
    else {  // add the offering
      if (Session.get("allowConflicts") || noConflicts(events, this.slots)) {
        if (Session.get("allowCredits") || Session.get("credits") + this.slots[0].credits <= 17) {
          newEvents = $.merge(events, this.slots);
          Materialize.toast("Added " + this.crn + " - " + this.slots[0].title, 2500, 'rounded blue lighten-2');
          e.target.innerHTML = "Remove";
          $(e.target).addClass('red lighten-2');
        }
        else {
          e.target.innerHTML = "Credit Limit";
          $(e.target).addClass('red darken-1');
          Materialize.toast("You have reached the credit limit", 2500, 'red darken-2 rounded');
          Meteor.setTimeout( () => {
            e.target.innerHTML = "Add";
            $(e.target).removeClass('red darken-1')
          }, 2500)
        }
      }
      else {
        e.target.innerHTML = "Time Conflict";
        $(e.target).addClass('red darken-1');
        Materialize.toast(this.crn + " was not added due to time conflict", 2500, 'red darken-2 rounded');
        Meteor.setTimeout( () => {
          e.target.innerHTML = "Add"
          $(e.target).removeClass('red darken-1')

        }, 2500)
      }
    }
    Session.set('events', newEvents);
  }
});