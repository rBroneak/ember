import Ember from 'ember';

var vm = {
    bgImg : Ember.$(".backgroundImage"),
    window :Ember.$(window),
    body: Ember.$('body')
};
vm.utils = {
    gettime : function () {
       return new Date().getHours();
    },
    isitNite : function () {
        var hour = vm.utils.gettime();
        if (hour >= 16 || hour < 8) {
            vm.body.addClass('night');
        } else {
            vm.body.addClass('day');
        }
    }
};
vm.updateBgImage = function () {
    var i = 0;

    setInterval(function() {
        i++;
        Ember.$('<div class="backgroundImage '+i+'" style="background-image: url(https://www.glerl.noaa.gov/metdata/mkg/mkg01.jpg#'+i+')"></div>').hide().prependTo('.site').fadeIn(600)
        Ember.$('.site > .backgroundImage:gt(1)').delay(5000).remove()
    }, 30000 );
};
vm.loaded = function () {
    //vm.updateBgImage();
    vm.body.addClass('loaded');
    vm.utils.isitNite();
};

export default Ember.Component.extend({
   loaded: vm.loaded()
});
