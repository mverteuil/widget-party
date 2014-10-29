/*global Dashboard, $*/
Dashboard.widgets.LinkList = function (dashboard) {
    var self = this,
        widget;
    this.__init__ = function () {
        var html = $('#templates').find('.widget-linklist').clone();
        widget = dashboard.grid.add_widget(
            html,
            self.col,
            self.row);
    };
    this.row = 2;
    this.col = 1;
    this.render = function () {
        var linklist = self.getWidget(),
            content = '';
        
        if (self.data.data) {
            for (var i=0; i < self.data.data.length; i++) {
                for (var link in self.data.data[i]) {
                    content += '<li><a href="' + link + '"><span class="value">' +
                                self.data.data[i][link] + '</span></a></li>';
                }
            }
        }

        linklist.find('ul').html(content);
        linklist.find('.title').text(self.data.title);
        linklist.find('.more-info').text(self.data.more_info);
        linklist.find('.updated-at').text(self.data.updated_at);
    };
    this.data = {};
    this.getWidget = function () {
        return widget;
    };
    this.getData = function () {};
    this.interval = 10000;
};
