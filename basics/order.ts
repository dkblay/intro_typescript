interface OrderItem {
    name: string;
    category: string;
}


class Order {
    
    public orderId: string;
    private _orderItems: Array<OrderItem>;
    
    constructor(id:string) {
        this.orderId = id;
    }
    
   getOrderItems () {
       return this._orderItems;
   }
   
   addOrderItems(item:OrderItem) {
        this._orderItems.push(item);       
   }
}


let davidsOrder  = new Order('111123');

let pizza1 =  {
    name: 'pizza1',
    category: 'pizza'
};

let pizza2 = {
    name: 'pizza2',
    category: 'pizza'
};

davidsOrder.addOrderItems(pizza1);