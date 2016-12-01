import './listing.html';
import { Session } from 'meteor/session';

if (Meteor.isClient) {
  function getEvents(settings) {
    return Calendars.findOne({_id: settings.calId})[settings.reference];
  }
  jQuery.expr[":"].icontains = jQuery.expr.createPseudo(function (arg) {
      return function (elem) {                                                            
          return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;        
      };                                                                                  
  });
  let fetchData = ( method, searchTerms ) => {
    Meteor.call( method, searchTerms, ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason );
      } else {
        Session.set( 'list', response );
        // properly renders modal calendar 
        $('#modal-calendar').closeModal();
        
        return response;
      }
    });
  };

  Template.listing.onCreated( () => {
    Session.set('list', '');
  });

  Template.listing.onRendered( () => {
    $('#modal-calendar').openModal({
      ready: function() {
        $('.events-calendar').fullCalendar('render');
      },
    });
    Meteor.setTimeout( () => fetchData( 'Courses.byDept', Session.get('query'), 100) ); //, Template.instance().courses );
    
  });

  Template.listing.helpers({
    getList() {
      return Session.get('list');
    },
    selected() { 
      return Session.get('events');
    },
    getCredits() {
      /* From georg @ http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array*/
      var seen = {};
      var uniqueEvents = Session.get('events').filter(function(item) {
          var id = item.id;
          return seen.hasOwnProperty(id) ? false : (seen[id] = true);
      })
      var credits = uniqueEvents.reduce(function(sum, currentEvent) {
        return sum + currentEvent.credits;
      }, 0)
      Session.set('credits', credits);
      return credits;
    }
  });

  Template.listing.events({
    'keyup #omniSearch' : _.throttle(function (e) {
      var searchTerms = $('input.search').val();
      // if an offering contains a matching term, show it, its course/course header, and its department/department header
      // if a course header contains a matching term, show all of the course's children and its department/department header
      // if a department header contains a matching term, show all of the department's children
      if (searchTerms) {
        var matchingOfferings         = $(`.offering:icontains(${searchTerms})`);
        var matchingCourses           = $(`.course:icontains(${searchTerms})`);
        var matchingCourseHeaders     = $(`.course-header:icontains(${searchTerms})`);
        var matchingDepartments       = $(`.department:icontains(${searchTerms})`);
        var matchingDepartmentHeaders = $(`.department-header:icontains(${searchTerms})`);
        
        var notMatchingOfferings      = $(`.offering:not(:icontains(${searchTerms}))`);
        var notMatchingCourses        = $(`.course:not(:icontains(${searchTerms}))`);
        var notMatchingDepartments    = $(`.department:not(:icontains(${searchTerms}))`);
        
        matchingOfferings.show();
        notMatchingOfferings.hide();
        matchingCourses.show();
        matchingCourseHeaders.parent().find('*').show();
        notMatchingCourses.hide();
        matchingDepartments.show();
        matchingDepartmentHeaders.parent().find('*').show();
        notMatchingDepartments.hide();
      }
      else {
        $('.department, .course, .offering').show();
      }
      $("html, body").animate({ scrollTop: "0px" });
    }, 2000),
    'change #allow-conflicts'(e) {
      Session.set('allowConflicts', e.target.checked);
    },
    'change #allow-credits'(e) {
      Session.set('allowCredits', e.target.checked);
    },
  });
}

