/*global Dashboard, $*/
Dashboard.widgets.CommitList = function (dashboard) {
    var self = this,
        widget,
        itemTemplate;
    this.__init__ = function () {
        var html = $('#templates').find('.widget-commitlist').clone();
        widget = dashboard.grid.add_widget(
            html,
            self.col,
            self.row);
        itemTemplate = widget.find('.commitlist').find('.commit').clone();
        
    };
    this.row = 2;
    this.col = 1;
    this.render = function () {
        var commitList = self.getWidget();
        var commitListItems = commitList.find('.commitlist');
        
        commitList.find('.title').text(self.data.title);
        commitListItems.empty()

        var commitListData = self.data.data
        if (commitListData) {
            // Loop through list items
            for (var commitIndex = 0; commitIndex < commitListData.length; commitIndex++) {
                var commitItem = itemTemplate.clone();
                var commitData = commitListData[commitIndex];
                // Set the link URL
                commitItem.find('.url').attr('href', commitData['url']);
                // Loop through the rest of the properties and set the text
                for (var fieldName in commitData) {
                    if (fieldName != 'url')  
                        commitItem.find('.' + fieldName).text(commitData[fieldName])               
                }
                commitListItems.append(commitItem);
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
