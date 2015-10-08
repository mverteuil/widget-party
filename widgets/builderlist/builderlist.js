/* global Dashing */
// foobar
Dashing.widgets.BuilderList = function(dashboard) {
    var self = this, widget;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'builderlist');
    self.row = 2;
    self.col = 4;

    self.scope = {};
    self.getWidget = function () { return widget; };
    self.getData = function () {};
    self.interval = 45000;
};

rivets.binders.color = function(el, value) {
    var state_colors = {
        failed: '#EB4720',
        progress: '#2A99FF',
        success: '#68DE3A',
        unstable: 'yellow'
    };

    el.style.setProperty('color', state_colors[value]);
};
