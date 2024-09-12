import React, { useRef, useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'

const App = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleSubmit = () => {
    console.log('name and price', name, price)
    setProducts(prevProducts => [...prevProducts, {
      id: Math.random(),
      name: name,
      price: Number(price)
    }])

    setName('')
    setPrice('')

  }

  console.log('products', products)

  const findTotal = products.reduce((acc, curr) => acc + curr.price, 0)

  return (
    <div>
      <Header />
      <Input
        value={name}
        onChange={setName}
        label={"Product Name"}
        placeholder={"Enter the name of your product"}
        inputType={"text"}
      />
      <Input
        value={price}
        onChange={setPrice}
        label={"Product Price"}
        placeholder={"Enter the price of your product"}
        inputType={"text"}
      />
      <button onClick={handleSubmit}>Submit</button>
      <h2>Output Result:</h2>
      <h3>Sale Price: </h3>
      <ul>
        {
          products.map((product) => {
            return (
              <li key={product.id}>{product.name} - {product.price}</li>
            )
          })
        }
      </ul>
      <h3>Total Price: </h3>
      {products.length > 0 && <h4>{findTotal}</h4>}
    </div>
  )
}

export default App
