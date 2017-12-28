import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    intro: DS.attr(),
    content: DS.attr(),
    emailUrl: DS.attr(),
    email: DS.attr(),
    lindedUrl: DS.attr(),
    linked: DS.attr()
});