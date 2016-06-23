//
//var viewModel = {
//    newItemName: ko.observable(),
//    newItemPrice: ko.observable(0),
//    newItemQuantity: ko.observable(1),
//
//    setupCurrency: function(value){
//        return "$" + value.toFixed(2);
//    },
//
//    //this function creates an object for a new item
//    addNewItem: function () {
//        var newItem = {
//            //this and viewModel are the same thing apparently
//            name: viewModel.newItemName(),
//            price: this.newItemPrice(),
//            quantity: this.newItemQuantity()
//        };
//
//        this.itemsInCart.push(newItem);
//        this.newItemName("");
//        this.newItemPrice(0);
//        this.newItemQuantity(0);
//        // when submit button is clicked this console logs the object created
//        console.log("are you it", newItem);
//    },
//    //something is changing viewModel to this
//    removeItem: function(item) {
//        viewModel.itemsInCart.remove(item)
//    },
//
////    //Adding Total
//    totalPrice: function() {
//        ko.computed(function(){
//            var total = 0;
//            for (var i = 0; i <= viewModel.itemsInCart().length - 1; i++) {
//                total += parseFloat(viewModel.itemsInCart()[i].price);
//            }
//            console.log("test", total);
//            return total;
//        });
//    }
//
//    //This is the "cart" where the objects are stored in an Array
//    itemsInCart: ko.observableArray([
//
//    ])
//};
//
//
//viewModel.addNewItemEnabled = ko.pureComputed(function() {
//    var name = this.newItemName(),
//        price = this.newItemPrice(),
//        quantity = this.newItemQuantity();
//
//
//    return name && name.length;
//}, viewModel);
//
//ko.applyBindings(viewModel);
//
