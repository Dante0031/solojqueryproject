//viewModel holds addNewItem a javascript object and itemsInCart an array holding the saved row lines of data inputted
var viewModel = {
    newItemName: ko.observable(),
    newItemPrice: ko.observable(0.25),
    newItemQuantity: ko.observable(1),

    addNewItem: function () {
        //this creates the new item
        var newItem = {
            name: ko.observable(this.newItemName()),
            price: ko.observable(this.newItemPrice()),
            quantity: ko.observable(this.newItemQuantity())
        };
        //these boom-a-rang to the DOM
        this.itemsInCart.push(newItem);
        this.newItemName("");
        this.newItemPrice(0);
        this.newItemQuantity(0);
    },
    //Remove from array
    removeItem: function(item) {
        viewModel.itemsInCart.remove(item)
    },

    itemsInCart: ko.observableArray([]),

    sortList: function(){
        this.itemsInCart.sort(function(a,b){
            return a.newItemName == b.newItemName ? 0: (a.newItemName < b.newItemName ? -1 : 1)
        })
    }

};

viewModel.addNewItemEnabled = ko.pureComputed(function() {
    var name = this.newItemName(),
        price = this.newItemPrice(),
        quantity = this.newItemQuantity();
    return name && name.length;
}, viewModel);

viewModel.combinedCost = ko.computed(function() {
        var total = 0;
        for (var i = 0; i <= viewModel.itemsInCart().length - 1; i++)
            total += parseFloat(viewModel.itemsInCart()[i].price() * viewModel.itemsInCart()[i].quantity());
            console.log("test", total);
        return total;
    }, viewModel);

//viewModel.sortList = function(){
//    this.sortItemsAscending = function() {
//        this.itemsInCart(this.itemsInCart().sort(function (a, b) {
//            return a.newItemName > b.newItemName;
//        }))
//    }
//}, viewModel);

ko.applyBindings(viewModel);