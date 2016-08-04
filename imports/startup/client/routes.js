import { Router } from 'meteor/iron:router';
import { Templating } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Courses } from '../../api/courses.js';
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
  this.render('Dashboard');
});

Router.route('/scheduler', function() {
  const query = this.params.query;
  Session.set('query', query);
  this.layout('Scheduler');
  this.render('Calendar', { to: 'calendar' });
  this.render('Listing', {to: 'listing' });
})