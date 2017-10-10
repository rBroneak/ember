import Ember from 'ember';
import data from '../models/expertise';

export default Ember.Route.extend({
    model() {
       return data
    }
});