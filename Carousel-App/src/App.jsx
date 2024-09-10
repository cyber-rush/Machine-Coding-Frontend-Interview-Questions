import React, { useEffect, useState } from 'react'
import { items } from './data'

const App = () => {
  const [currentItem, setCurrentItem] = useState(0)

  const handlePrev = () => {
    setCurrentItem(prevItem => {
      if (prevItem === 0) {
        return items.length - 1
      }
      else {
        return prevItem - 1
      }
    })
  }

  const handleNext = () => {
    setCurrentItem(prevItem => {
      if (prevItem === items.length - 1) {
        return 0;
      }
      else {
        return prevItem + 1
      }
    })
  }

  // automatic transition

  useEffect(() => {
    const interval = setInterval(handleNext, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='main-content'>
      <button onClick={handlePrev} >Prev</button>
      <div>
        <img width={200} height={200} src={items[currentItem].imageUrl} alt={items[currentItem].title} />
        <h2>{items[currentItem].title}</h2>
        <p>{items[currentItem].description}</p>
      </div>
      <button onClick={handleNext} >Next</button>
    </div>
  )
}

export default App
