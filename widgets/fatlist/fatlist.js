/* global Dashing */

Dashing.widgets.FatList = function (dashboard) {
    var self = this, widget;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'fatlist');
    self.row = 2;
    self.col = 2;
    self.scope = { fatLabel: true, fatValue: false };
    self.getWidget = function () { return widget; };
    self.getData = function () {};
    self.interval = 10000;
};
