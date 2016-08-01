import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Calendars = new Mongo.Collection('Calendars');

if (Meteor.isServer) {
  Meteor.publish('myCalendar', function MyCalendarPublication(calId) {
    var currentUserId = this.userId;
    return Calendars.findOne({createdBy: currentUserId, _id: calId});
  })
  Meteor.publish('Calendars', function CalendarsPublication() {
    var currentUserId = this.userId,
    currentUserCalendars = Calendars.find({ createdBy: currentUserId });

    if (currentUserCalendars) {
      return currentUserCalendars;
    }
    return this.ready();
  });

  Meteor.methods({
    'calendar.create'(settings) {
      return Calendars.insert(settings);
    },
    'events.update'(updateInfo) {
      check(updateInfo, Object);

      return Calendars.findOne({_id: updateInfo.calId}).update(updateInfo.newEvents);
    },

  });
}

Meteor.users.deny({
  update: function() {
    return true;
  }
});