/* global Dashing */
Dashing.widgets.BuilderList = function(dashboard) {
    var self = this, widget;
    self.__init__ = Dashing.utils.widgetInit(dashboard, 'builderlist');
    self.row = 2;
    self.col = 4;

    self.scope = {};
    self.getWidget = function () { return widget; };
    self.getData = function () {};
    self.interval = 45000;
};


rivets.binders.color = function(el, value) {
    // Update the builder color based on state.
    var state_colors = {
        failed: '#EB4720',
        progress: '#2A99FF',
        success: '#68DE3A',
        unstable: 'yellow'
    };

    el.style.setProperty('color', state_colors[value]);
};


rivets.binders.fontsize = function(builderWidgetDiv, buildersList) {
    var maxListItems = 13; // more than 13 items, start to shrink font
    if (buildersList.length > maxListItems) {
        var defaultFontSize = 25; //pixels
        var decrementBy = 3; //px
        var minFontSize = 7; //px. Completely illegible below this.
        var decrementMultiplier = buildersList.length - maxListItems;
        var newFontSize = Math.max(minFontSize, defaultFontSize - decrementMultiplier * decrementBy);
        $(builderWidgetDiv).find('ul li').css({'font-size': newFontSize});
    }
};
