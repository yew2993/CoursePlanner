import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';
import { Calendars } from '../api/calendars.js';
import './calendar.html';

function getEvents(settings) {
  return Calendars.findOne({_id: settings.calId})[settings.reference];
}

Template.calendar.created = function calendarOnCreated() {
  Template.instance().state = new ReactiveDict();
  Template.instance().state.set({'minTime': '08:00:00', 'maxTime': '22:00:00'});
  
  Session.set('fullWeek', '2016-09-11');
  Session.set('ranges', [{start: '2016-08-29', end: '2016-12-26'}]);
  
  if (!Meteor.userId()) {
    Session.set("events", []);
  }
};

Template.calendar.onRendered( () => {
  $( '#events-calendar' ).fullCalendar({
    aspectRatio:  1.5,
    buttonText: {
      agendaWeek: "Agenda",
      basicWeek:  "Overview",
      month:      "Month"
    },
    defaultView: 'agendaWeek',
    defaultDate: Session.get('fullWeek'),
    editable:    false,
    minTime:      Template.instance().state.get('minTime'),
    maxTime:      Template.instance().state.get('maxTime'),
    header: {
        left:   'prev,next today',
        center: 'title',
        right:  'agendaWeek basicWeek month', //'printCalendar printScheduleDoc',//'month,agendaWeek,agendaDay'
    },
    events( start, end, timezone, callback ) {
      let data = '';
      if (Meteor.userId()) {
        data = getEvents(Session.get('schedulerSettings'));
      }
      else {
         data = Session.get('events');
      }
      if ( data ) {
        callback( data );
      }
    },
    eventRender(event, element) {
      element.append(event.subject + " " + event.code);
      element.bind('dblclick', function() {    
        if (Meteor.userId()) {
          var settings = Session.get('schedulerSettings');
          
          var newEvents = {};
          newEvents[settings.reference] = getEvents(settings).filter(function(event) {
            return event.id !== this.crn;
          }, {crn: event.id});

          Meteor.call('events.update', {newEvents, calId: settings.calId }, (err, res) => {
            if (err) {
              console.log(err);
            }
          });
        }
        else {
          var newEvents = Session.get('events').filter(function(event) {
            return event.id !== this.crn;
          }, {crn: event.id});
          Session.set('events', newEvents);
        }
        $('.toggleCourse.' + event.id).text('Add');
      });
      return (Session.get('ranges').filter(function(range){
          return (event.start.isBefore(range.end) &&
                  event.end.isAfter(range.start));
      })).length > 0;
    },
    // eventAfterRender:function( event, element, view ) { 
    //   element.qtip({ // Grab some elements to apply the tooltip to
    //     content: {
    //       text: function(e, api, thisEvent) {
    //         return JSON.stringify(event, null, 3) + '<br><button class="removeEvent">Remove</button>';
    //       }(event),
    //     },
    //     hide: {
    //       fixed: true
    //     },
    //     position: {
    //       at: 'bottom center',
    //       my: 'top center'
    //     }
    //   })
    // },
  });

  Tracker.autorun( () => {
    if (Meteor.userId()) {
      getEvents(Session.get('schedulerSettings'));
    }
    else {
      Session.get('events');
    }
    // Session.get('minTime');
    // Session.get('maxTime');
    $( '#events-calendar' ).fullCalendar('viewRender');
    $( '#events-calendar' ).fullCalendar('refetchEvents');
  });
});

Template.calendar.helpers({
  minTime() {
    return Session.get('minTime') || "08:00";
  },
  maxTime() {
    return Session.get('maxTime') || "22:00";
  },
})
Template.calendar.events({
});

``  // slider for resizing cal dimensions
  // $(function() {
  //   $( "#slider" ).slider({
  //     value:100,
  //     min: 20,
  //     max: 80,
  //     step: 20,
  //     value: 20,
  //     slide: function( event, ui ) {
  //       heightmod(ui.value);

  //     }
  //   });
  //   heightmod( $( "#slider" ).slider( "value" ) );

  // });

  // function heightmod(value)
  // {
  //     $(window).trigger('resize');
  //     $('.fc-time-grid .fc-slats td').css('height', value+'px');
  // }