var dispatcher = require("../dispatcher");

function ItemStore() {
    var listeners = [];
    var items = [{ name: "Lovedale", tagline:"A wonderful school" }, 
                    { name: "Bishop",tagline:"An awesome school" }, 
                    { name: "Daffodils", tagline:"An excellent school" }];

    function getItems() {
        return items;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addItem(item) {
        items.push(item)
        triggerListeners();
    }

    function deleteItem(item) {
        var _index;
        items.map(function (s, index) {
            if (s.name === item.name) {
                _index = index;
            }
        });
        items.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(items);
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "item") {
            switch (split[1]) {
                case "addItem":
                    addSchool(payload.item);
                    break;
                case "deleteItem":
                    deleteSchool(payload.item);
                    break;
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    }
}

module.exports = ItemStore();