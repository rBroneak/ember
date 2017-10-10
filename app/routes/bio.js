import Ember from 'ember';
import data from '../models/bobby_service';

export default Ember.Route.extend({
    model() {
        return data.bio;
    }
});