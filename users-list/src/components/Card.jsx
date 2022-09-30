import React from 'react';

const Card = ({ firstName, lastName, maidenName, image, company }) => {
    return (
        <div className='user'>
            <div className='user-photo'>
                <img
                    src={image}
                    alt='profile'
                />
            </div>
            <div className='user-description'>
                <h4>{`${firstName} ${lastName}`}</h4>
                <p>{maidenName}</p>
                <div className='tags-wrapper'>
                    <span className='tag'>{company.department}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
