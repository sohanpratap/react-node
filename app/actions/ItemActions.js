var dispatcher = require("../dispatcher");

module.exports = {
    addItem:function(school){
        dispatcher.dispatch({
           item:item,
           type:"item:addItem" 
        });
    },
    deleteItem:function(school){
        dispatcher.dispatch({
           item:item,
           type:"item:deleteItem" 
        });
    }
}