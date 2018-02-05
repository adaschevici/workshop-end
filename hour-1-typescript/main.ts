function ShoppingList() {
  this.groceries = [];
}

ShoppingList.prototype.addItem = function(item) {
  this.groceries = this.groceries.concat([item]);
};


var mylist = new ShoppingList();


mylist.addItem('Banana');

console.log(mylist.groceries);
