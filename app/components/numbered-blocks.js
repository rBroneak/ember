import Ember from 'ember';

export default Ember.Component.extend({
    willRender() {
        $.getJSON('models/expertise').then(data => {
            this.set('expertise', data);
        });
    }
});
