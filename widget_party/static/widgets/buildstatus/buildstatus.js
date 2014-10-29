/*global Dashboard, $*/
Dashboard.widgets.BuildStatus = function (dashboard) {
    var self = this,
        widget;
    this.__init__ = function () {
        var html = $('#templates').find('.widget-buildstatus').clone();
        html.css('background-color', self.success_color);
        widget = dashboard.grid.add_widget(
            html,
            self.col,
            self.row);
    };
    this.row = 1;
    this.col = 1;
    this.progress_color = '#460027';
    this.success_color = '#25560F';
    this.unstable_color = '#585201';
    this.failure_color = '#C1042C';
    this.render = function () {
        widget.find('.buildnumber').html(self.data.buildnumber);
        widget.find('.title').text(self.data.title);
        widget.find('.updated-at').text(self.data.updated_at);
        if (self.data.status < 0) {
            widget.css('background-color', self.progress_color);
        } else if (self.data.status == 0) {
            widget.css('background-color', self.failure_color);
        } else if (self.data.status == 1) {
            widget.css('background-color', self.success_color);
        } else if (self.data.status > 1) {
            widget.css('background-color', self.unstable_color);
        }
    };
    this.data = {};
    this.getWidget = function () {
        return widget;
    };
    this.getData = function () {};
    this.interval = 1000;
};
