import React, { Component } from 'react';

class Pizza extends Component {

    state = {
        orderStatus: 'Order Now'
    }

    render() {

        const temp_pizza = this.props.ind;

        return (
            <div className="card text-left m-1 w-100">
                <div className="card-body">
                    <span className="card-title h3 text-info">🍕 {temp_pizza.name}</span>
                    <span className="card-subtitle mb-2 text-muted float-right">Price : ₹ {temp_pizza.price}</span>
                    <p className="card-text font-weight-bold m-0 font-weight-lighter mt-1">Ingredients</p>
                    {
                        temp_pizza.ingredients.map((ingredient, index) => <span className="p-1" key={index} >{ingredient},</span>)
                    }
                    <a className={this.state.orderStatus == "Order Confirmed" ? "btn bg-success text-white float-right" : "btn bg-info text-white float-right"} 
                    onClick={() => 
                    {
                        this.setState({ orderStatus: 'Order Confirmed' });
                        return this.state.orderStatus !== 'Order Confirmed' ?  this.props.poh(this.props.index) :   null
                    }} >{this.state.orderStatus}</a>
                </div>
            </div>
        );
    }

}

export default Pizza;
