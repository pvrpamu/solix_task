import React, { Component } from 'react';

const PizzaOrder = (props) => {

    const temp_pz = props.orderDetails;
    const temp_pizza = props.pizza;
    const temp_index = props.pizzaIndex;

    return (
        <div className="row">
            <div className="col-sm">
                <div className="card mb-1">
                    <p className="bg-success w-100 m-0 p-1"></p>
                    <div className="card-body">
                        <h5 className="card-title">Pizza Order Confirmed  <br /> <span className="text-info">{temp_pizza.name} 🍕</span></h5>
                        <p className="card-text m-0">Order status <span className="text-info">{''+temp_pz.success }</span></p>
                        <p className="card-text">Your order will be delivered in <span className="text-info" >{temp_pz.deliveryTime}</span> minutes</p>
                        {/* <a className="btn btn-danger float-right text-white" onClick={() => props.cancelOrder(temp_index)}>Cancel Order</a> */}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default PizzaOrder;
