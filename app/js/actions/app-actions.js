var AppConstants = require("../constants/app-constants.js");
var AppDispatcher = require("../dispatchers/app-dispatcher.js");

var AppActions = {
    view : function (item) {
        AppDispatcher.handleViewAction({
            actionType : AppConstants.VIEW_ITEM,
            item : item
        })
    }
};

module.exports = AppActions;