import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
        {this.props.products.map(product => (
          <li key={product._id}>
          <div className="product">
          <a href={"#" + product._id}>
          <img scr={product.image} alt={product.title}></img>
          <p>{product.title} </p>
          </a>
          <div className="product-price">
          <div>{product.price} </div>
          <div>
          <button className="button primary"> Add to Cart</button>
          </div>
          </div>
          </div>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}
