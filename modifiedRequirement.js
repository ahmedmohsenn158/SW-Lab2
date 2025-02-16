class item{
    constructor(name, category, quantity, price, unit, addedDate, customerFields){
        this.name=name;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
        this.unit = unit;
        this.addedDate = addedDate;
        this.customerFields = customerFields;
    }
}

class supermarket{
    constructor(items,transactions,categories, customer_fields_registery){
        this.items=items;
        this.transactions=transactions;
        this.categories=categories;
        this.customer_fields_registery=customer_fields_registery;
    }

    addItem(name, category, quantity, price, unit, addedDate, customerFields){
        let itemToAdd = new item(name, category, quantity, price, unit, addedDate, customerFields);

        if (!categories.includes(itemToAdd[1])) {
            categories.push(itemToAdd[1]);
        }
    
        transactions.push({ type: "add", itemToAdd });
    }

    sell_item(name , quantity){
        for (let itemToSell of items) {
            if (itemToSell.name === name) {
                if(itemToSell.quantity > quantity)
                {
                    itemToSell.quantity -= quantity;
                    transactions.push({ type: "sale", itm: itemToSell, soldQuantity: quantity, Date: new Date() });
                    console.log(`Sold ${quantity} ${itemToSell.unit} of ${itemToSell.name}`);
                }
            }
        }
    }

    viewInventory(){
        console.log("=== Items Available in the supermarket ===\n",items);
    }

    exportAll(){
        console.log("CSV:\n" + ["Name,Category,Quantity,Price,Unit,AddedAt"].concat(i.map(x => Object.values(x).join(','))).join('\n'));
    }

    viewTransactions(){
        console.log("Transactions:\n", transactions);
    }

    search(product) {
        console.log(items.filter(product => [product.name, product.category, product.price].some(searchedProduct => searchedProduct.toString().toLowerCase().includes(product.name.toLowerCase()))));
    }

    import(product){
        b[0].forEach(x => doStuff("add", [x.n, x.cat, x.quantity, x.price, x.unit]));
    }


}

var items = [];
var transactions = []; 
var categories = [];
var customer_fields_registery = {}; 
var macBook;

macBook.addItem("laptop" , "electronics" , 8 , 10 , "unt", 8-9-2022, "l");
viewInventory();
macBook.sell_item("laptop", 7);
viewInventory();