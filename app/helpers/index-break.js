import Ember from 'ember';

export function indexBreak(params, namedArgs) {
    var index = namedArgs.index,
        nth = namedArgs.nth;

    if (index % nth === 0)
       return '<ul></ul>'
    else
        return

}

export default Ember.Helper.helper(indexBreak);
