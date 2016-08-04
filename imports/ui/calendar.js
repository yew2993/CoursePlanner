import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';
import { Calendars } from '../api/calendars.js';
import './calendar.html';

Template.calendar.created = function calendarOnCreated() {
  Session.set({
    minTime: "08:00",
    maxTime: "22:00",
    fullWeek: "2016-09-11",
    ranges: [ { start: '2016-08-29', end: '2016-12-26' } ],
    events: []
  });
  
};

Template.calendar.onRendered( () => {
  $( '#events-calendar' ).fullCalendar({
    aspectRatio:  1.5,
    // buttonText: {
    //   agendaWeek: "Agenda",
    //   basicWeek:  "Overview",
    //   month:      "Month"
    // },
    columnFormat: 'ddd',
    defaultView: 'agendaWeek',
    defaultDate: Session.get('fullWeek'),
    editable:    false,
    minTime:     Session.get('minTime'),
    maxTime:     Session.get('maxTime'),
    header: {
        left:   '',//'prev,next today',
        center: '',//'title',
        right:  '',//'agendaWeek basicWeek month',
    },
    events( start, end, timezone, callback ) {
      let data = Session.get('events');
      
      if ( data ) {
        callback( data );
      }
    },
    eventRender(event, element) {
      element.append(event.subject + " " + event.code);
      element.bind('dblclick', function() {    
        var newEvents = Session.get('events').filter(function(event) {
          return event.id !== this.crn;
        }, {crn: event.id});
        Session.set('events', newEvents);
        $('.toggle-offering-button.' + event.id).text('Add');
      });
      return (Session.get('ranges').filter(function(range){
          return (event.start.isBefore(range.end) &&
                  event.end.isAfter(range.start));
      })).length > 0;
    }
  });

  Tracker.autorun( () => {
    Session.get('events');
    $( '#events-calendar' ).fullCalendar('viewRender');
    $( '#events-calendar' ).fullCalendar('refetchEvents');
  });
});

Template.calendar.helpers({
  minTime() {
    return Session.get('minTime');
  },
  maxTime() {
    return Session.get('maxTime');
  },
})
Template.calendar.events({
});