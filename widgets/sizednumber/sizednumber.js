/* global Dashing */

Dashing.widgets.SizedNumber = function(dashboard) {
    var self = this, widget;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'sizednumber');
    self.row = 1;
    self.col = 1;
    self.color = '#551A8B';
    self.scope = { fontSize: '24px' };
    self.getWidget = function () { return widget; };
    self.getData = function () {};
    self.interval = 1000;
};

rivets.binders['style-*'] = function(el, value) {
    el.style.setProperty(this.args[0], value);
};
