import Ember from 'ember';
import data from '../models/bio';

export default Ember.Route.extend({
    model() {
        return data;
    }
});