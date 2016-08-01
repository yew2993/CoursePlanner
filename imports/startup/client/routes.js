import { Router } from 'meteor/iron:router';
import { Templating } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Courses, YeshivaCourses, SternCourses } from '../../api/courses.js';
import { Calendars } from '../../api/calendars.js';

import '../../ui/calendar.js';
import '../../ui/course.js';
import '../../ui/dashboard.js';
import '../../ui/department.js';
import '../../ui/home.js';
import '../../ui/listing.js';
import '../../ui/loading.js';
import '../../ui/nav.js';
import '../../ui/offering.js';
import '../../ui/scheduler.js';

Router.route('/', function() {
  this.render('Home');
});

Router.route('/dashboard', function() {
  var universities;

  this.render('Dashboard');
  
});


Router.route('/scheduler/:school/:level/:semester', function() {
  var school = this.params.school;
  var level = this.params.level;
  var semester  = this.params.semester;
  
  if (school === 'null' || level === 'null' || semester === 'null') {
    this.redirect('Home');
  } 
  else {
    // Determine desired collection from params
    // if logged in:
    //   create calendar
    //   render scheduler
    var calId, reference, collection = '';
    var schedulerSettings = {};
    if (school === 'wilf' && level === 'undergrad' && semester === 'fall16') {
      collection = 'YeshivaCourses';
    }
    else if (school === 'beren' && level === 'undergrad' && semester === 'fall16') {
      collection = 'SternCourses';
    }
    schedulerSettings.method = collection + '.byDept';
    if (Meteor.userId()) {
      var newCalConfig = {school, level, semester, users_id: Meteor.userId()}
      reference = collection + "_id";
      newCalConfig[reference] = [];
      
      schedulerSettings.reference = reference;
      schedulerSettings[reference] = [];
      Meteor.call('calendar.create', newCalConfig, (err, res) => {
        if (err) {
          console.log(err)
        }
        else {
          schedulerSettings.calId = res;
          Session.set('schedulerSettings', schedulerSettings);
          this.layout('Scheduler');
          this.render('Calendar', { to: 'calendar', data: schedulerSettings});
          this.render('Listing', {to: 'listing', data: schedulerSettings });
        }
      });
      this.subscribe( 'myCalendar', schedulerSettings.calId );
    }
    else {

      Session.set('schedulerSettings', schedulerSettings);
      this.layout('Scheduler');
      this.render('Calendar', { to: 'calendar', data: schedulerSettings});
      this.render('Listing', {to: 'listing', data: schedulerSettings });
    }
  }
});