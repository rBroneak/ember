import Ember from 'ember';
import data from '../models/contact'

export default Ember.Route.extend({
    model() {
        return data;
    }
});