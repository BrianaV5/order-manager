//step one 
let inventory =
[
    {
        sku: "SKU-1",
        name: "Planner",
        price: 17.99,
        stock: 100
    },
    {
        sku: "SKU-2",
        name: "USB-C cable",
        price: 12.99,
        stock: 130
    },
    {
        sku: "SKU-3",
        name: "Mouse",
        price: 25.99,
        stock: 90
    },
    {
        sku: "SKU-4",
        name: "Phone case",
        price: 15.99,
        stock: 110
    }
];
inventory.forEach(function(product) {
    console.log(`${product.sku}|${product.name}|$${product.price}|Stock:${product.stock}`);
});

//step 3
inventory.push(
    {
        sku: "SKU-5",
        name: "Candle",
        price: 10.99,
        stock: 50
    }
);

let removedProduct = inventory.pop();//removing last product

console.log(`removed product: $(removedProduct.name)`);

//check 
console.log(inventory);

inventory[1].price = 9.99;//update price of one product

inventory[2].stock = 200 ;//update stock



//step 4
let orders = [
    {
        orderId:"ORD-1",
        items: [
            {
                sku:"SKU-1", qty: 3
            },
        ]     
    },
    {
        orderId: "ORD-2",
        items: [
            {
                sku: "SKU-2", qty: 1
            }
        ]
    }
];
 
orders.forEach(function(order) {
let enoughStock = true;
let shortSku = "";

});
