import Ember from 'ember';
import data from '../models/clients'

export default Ember.Route.extend({
    model() {
       return data
    }
});
