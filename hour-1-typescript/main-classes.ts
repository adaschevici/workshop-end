class ShoppingList2 {
  groceries: string[];
  constructor() {
    this.groceries = [];
  }

  addItem(item) {
    this.groceries = [...this.groceries, item];
  }

  removeItem(item) {
    this.groceries = this.groceries.filter( grocery => item !== grocery);
  }
}

const mylist2 = new ShoppingList2();


mylist2.addItem('Batman');
mylist2.addItem('Joker');

console.log(mylist2.groceries);

mylist2.removeItem('Joker');

console.log(mylist2.groceries);
