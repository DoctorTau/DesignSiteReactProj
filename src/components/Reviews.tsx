import React from 'react';
import ReviewCard from './ReviewCard';
import './styles/reviews-style.css';

interface ReviewsProps {
    title: string;
    reviews: { name: string; text: string; image: string }[];
}

const Reviews: React.FC<ReviewsProps> = ({ title, reviews }) => {
    return (
        <div className="reviews">
            <div className="reviews-title">
                <h2>{title}</h2>
            </div>

            <div className="reviews-row">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} id={(index + 1).toString()} name={review.name} text={review.text} image={review.image} />
                ))}
            </div>
        </div>
    );
}

export default Reviews;