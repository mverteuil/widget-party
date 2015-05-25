/* global Dashing */

Dashing.widgets.InformedNumber = function(dashboard) {
    var self = this, widget;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'informednumber');
    self.row = 1;
    self.col = 2;
    self.color = '#ADAB00';
    self.scope = {};
    self.getWidget = function () { return widget; };
    self.getData = function () {};
    self.interval = 1000;
};
