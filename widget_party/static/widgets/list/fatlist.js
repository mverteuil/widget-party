/*global Dashboard, $*/
Dashboard.widgets.FatList = function (dashboard) {
    var self = this,
        widget,
        itemTemplate;
    this.__init__ = function () {
        var html = $('#templates').find('.widget-fatlist').clone();
        widget = dashboard.grid.add_widget(
            html,
            self.col,
            self.row);
        itemTemplate = widget.find('.row').clone();
    };
    this.row = 1;
    this.col = 2;
    this.render = function () {
        var fatList = self.getWidget();
        var listItems = fatList.find('.fatlist-body');
        
        fatList.find('.title').text(self.data.title);
        listItems.empty()

        var listData = self.data.data;
        if (listData) {
            // Loop through list items
            for (var listIndex = 0; listIndex < listData.length; listIndex++) {
                var item = itemTemplate.clone();
                var data = listData[listIndex];
                // Loop through the rest of the properties and set the text
                for (var fieldName in data) {
                        item.find('.label').text(fieldName);
                        item.find('.value').text(data[fieldName]);
                }
                listItems.append(item);
            }
        }
    };
    this.data = {};
    this.getWidget = function () {
        return widget;
    };
    this.getData = function () {};
    this.interval = 10000;
};
