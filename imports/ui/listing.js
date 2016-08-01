import './listing.html';
import { Session } from 'meteor/session';
// import { Calendars } from '../api/calendars.js';
// import { YeshivaCourses, SternCourses } from '../api/courses.js';

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
  });

  Template.listing.onRendered( () => {
    fetchData( Session.get('schedulerSettings').method ); //, Template.instance().courses );
    $('#listingAux').hide();
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
    'keyup #omniSearch' : function (e) {
      // var searchTerms = {basic: $('input.search').val()};
      // fetchData( YeshivaCourses );//, Template.instance().courses, searchTerms );

      $("#omniSearch").keyup(function(){ 
        var searchTerms = $('input.search').val();
        
        if (searchTerms) {
          var matchingOfferings = $('.offering:icontains(' + searchTerms + ')');
          var matchingCourses = $('.course:icontains(' + searchTerms + ')');
          var matchingCourseHeaders = $('.courseHeader:icontains(' + searchTerms + ')');
          var matchingDepartments = $('.department:icontains(' + searchTerms + ')');
          var matchingDepartmentHeaders = $('.departmentHeader:icontains(' + searchTerms + ')');
          var notMatchingOfferings = $('.offering:not(:icontains(' + searchTerms + '))');
          var notMatchingCourses = $('.course:not(:icontains(' + searchTerms + '))');
          var notMatchingDepartments = $('.department:not(:icontains(' + searchTerms + '))');
          
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
          $('.department .course .offering').show();
        }
      }); 
       

    },
    // 'click #toggleCurrent': function (e) {
    //   // var currentCourses = Session.get('events').map(function(elt) {
    //   //   return elt.title;
    //   // });
    //   var box = $('#listingAux');
    //   var bool = box.is(':visible');
    //   if (!bool) {
    //     // box.append(currentCourses.join(', '));
    //     box.show();
    //   }
    //   else {
    //     // box.empty();
    //     box.hide();
    //   }
    // },
    // 'click #newFilter' : function (e) {
    //   e.preventDefault();
    //   var select = "<div class='row'>" +
    //                 "<input class='col m6 search filterCriteria' placeholder='search'>" +
    //                 "<select class='col m4 filterType'>" +
    //                   "<option value='' disabled selected>Select</option>" +
    //                   "<option value='title'>Title</title>" +
    //                 "</select>" +
    //                 "<i class='material-icons addFilter col m2'>done</i></div>";
    //   $(e.target).after(select);
    //   $('select').material_select();
    // },
    // 'click .addFilter': function (e) {
    //   e.preventDefault();
    //   var current = e.currentTarget.parentNode;
    //   var chip = "<div class='chip'>" + current.childNodes[1].value() + ": " + current.childNodes[0].value +
    //               "<i class='material-icons'>close</i>" +
    //              "</div>";
    //   $("#newFilter").before(chip);
    // },
    // 'click .toggleCourse': function (e) {
    //   e.preventDefault();

    // }
  });
}

