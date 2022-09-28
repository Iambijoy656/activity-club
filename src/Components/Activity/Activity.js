import React from 'react';

const Activity = (props) => {
    // console.log(props.activity)
    const { name, picture, time, age } = props.activity;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={picture} alt="pics" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Finding motivation to work out can be challenging. There are so many distractions and less physically demanding alternatives to spending an hour at the gym or working out at home</p>
                    <p><span className='font-bold'>For age:</span> {age} </p>
                    <p><span className='font-bold'>Time Required :</span> {time}s </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;