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
    // add the builder state onto the element as a class. The injected element
    // is the span.value and its inner-text contains the state of the builder.
    el.className = 'value ' + value;
};


rivets.binders.fontsize = function(builderWidgetDiv, buildersList) {
    // Recalculates the `font-size` CSS attrib if the number of items
    // in the BuilderListWidget gets too large.
    var maxListItems = 13;
    if (buildersList.length > maxListItems) {
        var defaultFontSize = 25; //pixels
        var decrementBy = 3; //px
        var minFontSize = 7; //px. Completely illegible below this.
        var decrementMultiplier = buildersList.length - maxListItems;
        var newFontSize = Math.max(minFontSize, defaultFontSize - decrementMultiplier * decrementBy);
        $(builderWidgetDiv).find('ul li').css({'font-size': newFontSize});
    }
};
