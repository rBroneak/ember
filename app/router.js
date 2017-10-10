import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bio', { path: '/' });
  this.route('bio');
  this.route('expertise');
  this.route('clients');
  this.route('contact');
});

export default Router;
