/* global Dashing */

Dashing.widgets.Reviewer = function(dashboard) {
    var self = this, widget;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'reviewer');
    self.row = 2;
    self.col = 2;
    self.color = '#96bf48';
    self.scope = {};
    self.getWidget = function () { return widget; };
    self.getData = function () {};
    self.interval = 1000;
};
