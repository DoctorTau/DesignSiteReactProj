import React from 'react';

interface ReviewCardProps {
    id: string;
    name: string;
    text: string;
    image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ id, name, text, image }) => {
    return (
        <div id={`block${id}`} className="review-block">
            <div className="review-block-image">
                <img src={image} alt={name} />
            </div>
            <div className="review-block-title">
                <h3>{name}</h3>
            </div>
            <div className="review-block-text">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ReviewCard;