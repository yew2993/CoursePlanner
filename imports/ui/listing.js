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
        return response;
      }
    });
  };

  Template.listing.onCreated( () => {
    Session.set('list', '');
  });

  Template.listing.onRendered( () => {
    fetchData( 'Courses.byDept', Session.get('query') ); //, Template.instance().courses );
  });

  Template.listing.helpers({
    getList() {
      return Session.get('list');
    },
    selected() { 
      if (Meteor.userId()) {
        return getEvents(Session.get('schedulerSettings'));
      }
      else {
        return Session.get('events');
      }
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
    }, 2000),
  });
}

