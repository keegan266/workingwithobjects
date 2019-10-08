function order(item, qty, price) {
    this.orderItem = item;
    this.orderQty = qty;
    this.orderPrice = price;
    this.displayOrder = function() {
        var total = this.orderQty * this.orderPrice;
        return `You have ordered ${this.orderQty} of ${this.orderItem} and your total is $${total}`;
    }
}

const order1 = new order("Basketball", 18, 10);
const order2 = new order("Coffee", 500, 5.99);

// console.log(order1.displayOrder());
// console.log(order2.displayOrder());

var aryOrders = [order1, order2];

for (var i = 0; i < aryOrders.length; i++) {
    // console.log(aryOrders[i].displayOrder());
}

document.querySelector('h4').addEventListener('click', function() {
    var myList = "";

    for (var i = 0; i < aryOrders.length; i++) {
        myList += `<li id=${i}> ${aryOrders[i].orderItem}</li>`
    }

    document.getElementById('orders').innerHTML = myList;
});

document.getElementById('orders').addEventListener('click', function(e){
    // alert(e.target.id)
    document.querySelector('h3').innerHTML = aryOrders[e.target.id].displayOrder();
});