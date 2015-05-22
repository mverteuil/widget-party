/* global Dashing */

Dashing.widgets.SizedNumber = function(dashboard) {
    var self = this, widget;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'sizednumber');
    self.row = 2;
    self.col = 2;
    self.color = '#96bf48';
    self.scope = { fontSize: '24px' };
    self.getWidget = function () { return widget; };
    self.getData = function () {};
    self.interval = 1000;
};

rivets.binders['style-*'] = function(el, value) {
    el.style.setProperty(this.arg1, value);
};
