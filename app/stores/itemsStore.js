var dispatcher = require("../dispatcher");

function ItemStore() {
    var listeners = [];
    var items = [{ name: "Lovedale", tagline:"A wonderful school" }, 
                { name: "Bishop",tagline:"An awesome school" }, 
                { name: "Daffodils", tagline:"An excellent school" },
                { name: "Bishop1",tagline:"An awesome school" },
                { name: "Bishop2",tagline:"An awesome school" },
                { name: "Bishop3",tagline:"An awesome school" },
                { name: "Bishop4",tagline:"An awesome school" },
                { name: "Bishop5",tagline:"An awesome school" },
                { name: "Bishop6",tagline:"An awesome school" }];

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