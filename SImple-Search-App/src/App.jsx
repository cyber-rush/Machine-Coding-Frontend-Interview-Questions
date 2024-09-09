import { useState } from "react"
const FRUIT_ARRAY = ['apple', 'banana', 'kiwi']

const App = () => {
  const [list, setList] = useState(FRUIT_ARRAY)

  const handleChange = (e) => {
    setList(FRUIT_ARRAY.filter(item => item.includes(e.target.value)))
  }
  return (
    <>
      <div className="mx-16 my-16">
        <input type="text" placeholder="Search" onChange={(e) => handleChange(e)} />
        <ul>
          {
            list.map(item => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      </div>

    </>
  )
}

export default App
