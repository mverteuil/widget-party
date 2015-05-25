/* global Dashing */

Dashing.widgets.SkinnyList = function (dashboard) {
    var self = this, widget;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'skinnylist');
    self.row = 1;
    self.col = 1;
    self.scope = {};
    self.getWidget = function () { return widget; };
    self.getData = function () {};
    self.interval = 10000;
};
