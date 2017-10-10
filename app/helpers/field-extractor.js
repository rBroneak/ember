import Ember from 'ember';

export function fieldExtractor(params/*, hash*/) {
    let object = params[0];
    let result = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            result.push(key);
        }
    }

    return result;
}

export default Ember.Helper.helper(fieldExtractor);