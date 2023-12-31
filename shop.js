
class Store{
    //current order is a cart
    constructor(productList){
        this.productList = productList;
        this.cart = new Order();
    }
    show(){
        this.productList.forEach((p, i)=> {
            console.log(i, p.show())
        });
    }
    add(i, quantity=1){
        this.cart.itemList.push(new LineItem(this.productList[i], quantity))
    }
}

class Product{
    constructor(name, price = 0, attributes = {}){
        this.name = name;
        this.price = price;
        this.atrributes = attributes;
    }
    show(){
        return `NAME: ${this.name} PRICE: ${this.price}`
    }
}

class Customer{
    //...
}

class LineItem{
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }
}

class Order{ //CART IS AN INCOMPLETE ORDER
    constructor(){
        this.customer = new Customer();
        this.itemList = [];
    }
    show(){
        let total = 0;
        this.itemList.forEach(item=>{
            let ext = item.quantity * item.product.price;
            total += ext;
            console.log(item.quantity, item.product.show(), ext)
        });
        console.log(`TOTAL: ${total}`)
    }
}

//TEST
const s = new Store([
    new Product("paper", 5.00),
    new Product("pencil", 1.00),
]);

s.show()

s.add(0,2)
s.add(1, 12)

s.cart.show();