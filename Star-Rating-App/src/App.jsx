import StarRating from "./components/StarRating"
import StarRatingWithSvg from "./components/StarRatingWithSvg"

const App = () => {
  return (
    <div >
      <div className="main-content">
        <h2>Star Rating Component without using svg</h2>
        <StarRating limit={5} rating={2} />
      </div>
      <div className="main-content">
        <h2>Star Rating Component using svg</h2>
        <StarRatingWithSvg limit={5} starRating={2} />
      </div>
    </div>
  )
}

export default App
