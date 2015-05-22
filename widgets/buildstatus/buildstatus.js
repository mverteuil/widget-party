/* global Dashing */

Dashing.widgets.BuildStatus = function(dashboard) {
    var self = this, widget;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'buildstatus');
    self.row = 1;
    self.col = 1;

    self.scope = {};
    self.getWidget = function () { return widget; };
    self.getData = function () {};
    self.interval = 1000;
};

rivets.binders.buildstatus = function(el, value) {
    var state_colors = {
        failure: '#C1042C',
        progress: '#460027',
        success: '#25560F',
        unstable: '#585201'
    }

    el.style.setProperty('background-color', state_colors[value]);
};
