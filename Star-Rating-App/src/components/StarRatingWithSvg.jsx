import React, { useState } from 'react'

const StarRatingWithSvg = ({ limit, starRating }) => {
    const [rating, setRating] = useState(starRating);
    const [hover, setHover] = useState(0);

    return (
        <div >
            {[...Array(limit)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            style={{ display: 'none' }} // Hide the default radio input
                        />
                        <svg
                            className="star"
                            width="25"
                            height="25"
                            fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(0)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="#000"
                        >
                            <path d="M12 .587l3.668 7.435L24 9.432l-6 5.847L19.335 24 12 20.091 4.665 24 6 15.279l-6-5.847 8.332-1.41z" />
                        </svg>
                    </label>
                );
            })}
            <p>The current rating is {rating}</p>
        </div>
    )
}

export default StarRatingWithSvg
