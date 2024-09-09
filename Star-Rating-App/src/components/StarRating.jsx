import { useState } from "react"

const StarRating = ({ rating, limit }) => {
    let starLimit = limit || 5
    const [starRating, setStarRating] = useState(rating) // starRating --> starts like 1, 2, 3, 4, 5

    const handleClick = (e) => {
        console.log('e.target.getAttribute', typeof e.target.getAttribute('data'))
        setStarRating(+e.target.getAttribute('data'))
    }
    return (
        <div>
            {
                [...Array(starLimit)].map((star, index) => { // index is like --> 0, 1, 2, 3, 4
                    return <span
                        key={index}
                        data={index + 1}
                        onClick={handleClick}
                        className={index < starRating ? 'star-rated' : 'star'}
                    >

                    </span>
                }
                )
            }
            <p>The current rating is {starRating}</p>
        </div>
    )
}

export default StarRating
