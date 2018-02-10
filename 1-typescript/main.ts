function ShoppingList() {
  this.groceries = [];
}

ShoppingList.prototype.addItem = function(item) {
  this.groceries = this.groceries.concat([item]);
};


ShoppingList.prototype.removeItem = function(item) {
  this.groceries = this.groceries.filter(function (grocery) {
    return item !== grocery;
  })
}

var mylist = new ShoppingList();


mylist.addItem('Banana');
mylist.addItem('Apples');

console.log(mylist.groceries);

mylist.removeItem('Banana');

console.log(mylist.groceries);
