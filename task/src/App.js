import React, { Component } from 'react';
import axios from 'axios'
import Pizza from './components/pizzaitem'
import PizzaOrder from './components/pizzaorder'

class App extends Component {

  state = {
    pizzas: [],
    orderPlaced: '',
    orderQueue: []
  }

  componentDidMount() {
    axios.get('http://localhost:4000/server/pizzas')
      .then((response) => {
        // handle success
        console.log(response.data);
        this.setState({ pizzas: response.data })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })



  }

  placeOrder = () => {
    axios.get('http://localhost:4000/server/order')
      .then((response) => {
        // handle success
        console.log(response.data);
        this.setState({ orderPlaced: response.data })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }

  pizzaOrderHandler = (pizzaIndex) => {
    console.log(pizzaIndex);
    const pizza = this.state.pizzas[pizzaIndex]
    const newQueue = this.state.orderQueue
    newQueue.push(pizza);

    this.setState({ orderQueue: newQueue });

    this.placeOrder();
  }

  cancelOderHandler = (dex) => {
    console.log(dex);
    let i = this.state.orderQueue.indexOf(this.state.orderQueue[dex]);
    this.setState({ orderQueue: this.state.orderQueue.splice(i, 1) });
  }


  render() {
    return (
      <div >
        <nav className="navbar navbar-light bg-light mb-2 sticky-top">
          <span className="h1 text-dark">🍕 Corner</span>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-sm col-lg-6">
              <p className=" font-weight-bold h2">Available 🍕's</p>
              <ul className="list-group list-group-flush">
                {this.state.pizzas.length !== 0 ? this.state.pizzas.map((pizza, index) => <Pizza key={index} poh={this.pizzaOrderHandler} index={index} ind={pizza} />) : <h3>Pizzas out of stock</h3>
                }
              </ul>
            </div>
            <div className="col-sm col-lg-6">
              <p className=" font-weight-bold h2">Confirmed Order's</p>
                  {this.state.orderQueue.length !== 0 ?
                this.state.orderQueue.map((piza, indx) => <PizzaOrder key={indx} pizzaIndex={indx} pizza={piza} orderDetails={this.state.orderPlaced} cancelOrder={this.cancelOderHandler} />) : <h1 className="text-center m-5">Order Something <br /> 🤤</h1>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
