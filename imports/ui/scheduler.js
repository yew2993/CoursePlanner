import { Session } from 'meteor/session';
import './scheduler.html';


Template.scheduler.onCreated( () => {
	Session.set('credits', 0)
});