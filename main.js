class Item {
    constructor(id, title, qty, unit) {
        this.id = id;
        this.title = title;
        this.qty = qty;
        this.unit = unit;
    }
}

class List {
    list = []

    constructor(listName, listOwner, maxQtyOfItems) {
        this.listName = listName;
        this.listOwner = listOwner;
        this.maxQtyOfItems = maxQtyOfItems;
    }

    addItem(id, title, qty, unit) {
        if (this.list.length >= this.maxQtyOfItems) {
            let err = new Error(`This item has not been added. Reason: You can not add more than ${this.maxQtyOfItems} items..`);
            throw console.error(`${title}: ${qty} ${unit} - ${err}`);
        } if (!title) {
            let err = new Error('This item has not been added. Reason: You did not enter a title..');
            throw console.error(`${title}: ${qty} ${unit} - ${err}`);
        } if (!qty) {
            let err = new Error('This item has not been added. Reason: You did not enter a quantity..');
            throw console.error(`${title}: ${qty} ${unit} - ${err}`);
        } if (!unit) {
            let err = new Error('This item has not been added. Reason: You did not specify a unit..');
            throw console.error(`${title}: ${qty} ${unit} - ${err}`);
        } else this.list.push(new Item(id, title, qty, unit));
       return (`${title}: ${qty} ${unit} - added. Object id: ${newList.list.findIndex((elem) => elem.id === id) + 1}`);
    }

    removeItem(id) {
        let removedElementIndex = this.list.findIndex((elem) => elem.id === id);
        let removedElement = this.list.find((elem) => elem.id === id);
        if (removedElementIndex) {
            let err = new Error(`This item has not been removed. Reason: The item with id = ${id} not found in the list..`);
            throw console.error(`${err}`);
        } else this.list.splice(removedElementIndex, 1);
        console.log(`${removedElement.title}: ${removedElement.qty} ${removedElement.unit}. This item has been successfully removed.`);
    }

    [Symbol.iterator]() {
        let values = Object.values(this);
        let length = values.length;
        let index = 0;
        return {
            next() {
                if (index < length) {
                    return {value: values[index++], done: false};
                }
                return {done: true};
            }
        }
    }
}

let newList = new List('Produkty-24', 'Chelovechik', 5);

function listCreator() {
    try {
        newList.addItem(1, 'Sugar', 5, 'kilogram(s)');
    } catch(err) {
    }

    try {
        newList.addItem(2, 'Chocolate', 2, 'bar(s)');
    } catch(err) {
    }

    try {
        newList.addItem(3, 'Salt', 3, 'kilogram(s)');
    } catch(err) {
    }

    try {
        newList.addItem(4, 'Juice', 1, 'liter(s)');
    } catch(err) {
    }

    try {
        newList.addItem(5, 'Noodles', 2, 'pack(s)');
    } catch(err) {
    }
};

listCreator();

for (let item of newList) {
    console.log(item);
};