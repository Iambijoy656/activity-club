import React from 'react';

const Question = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12 mx-auto'>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How Does react work?</h2>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>

                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Difference between Props and State ?</h2>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>

                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is the work of UseEffect?</h2>
                    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments</p>

                </div>
            </div>



        </div>
    );
};

export default Question;