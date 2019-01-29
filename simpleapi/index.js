const express = require('express')
const app = express()
const port = 4000

const pizzas = [
  {
    "name": "Margherita",
    "price": 5,
    "ingredients": [
      "tomato",
      "mozzarella"
    ]
  },
  {
    "name": "Bufala",
    "price": 6,
    "ingredients": [
      "tomato",
      "mozarella di bufala"
    ]
  },
  {
    "name": "Romana",
    "price": 5,
    "ingredients": [
      "tomato",
      "mozzarella",
      "anchovies",
      "oregano",
      "oil"
    ]
  },
  {
    "name": "Diavola",
    "price": 7.5,
    "ingredients": [
      "tomato",
      "mozzarella",
      "spicy salami"
    ]
  },
  {
    "name": "Pizza Bianca",
    "price": 5,
    "ingredients": [
      "mozzarella",
      "oregano"
    ]
  }
]

const order =  {
  "success": true,
  "deliveryTime": 2100000
}


app.get('/server/pizzas', (req, res) => {  res.header("Access-Control-Allow-Origin","*");  res.json(pizzas);})
app.get('/server/order', (req, res) => {  res.header("Access-Control-Allow-Origin","*");  res.json(order);})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


