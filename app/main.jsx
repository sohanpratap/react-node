var React = require("react");
var ReactDOM = require("react-dom");
var ItemsList = require("./components/ItemsList.jsx");
var itemsStore = require("./stores/itemsStore");

var _items = itemsStore.getItems();

itemsStore.onChange(function(items){
    _items = items;
    render();
});

                
function render(){
    ReactDOM.render(<ItemsList items={_items} />, document.getElementById("container"));    
}
render();