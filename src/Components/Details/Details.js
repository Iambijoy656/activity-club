import { parse } from 'postcss';

import React, { useState } from 'react';



const Details = ({ time, notify }) => {
    // console.log(time)
    const [breakTime, setBreakTime] = useState(0);











    const getBreakTime = (e) => {
        const breakTimeString = e.target.innerText;
        const breakTime = parseInt(breakTimeString);
        setBreakTime(breakTime);
    }







    return (

        <div className='flex flex-col gap-3 p-2 py-2 '>


            <h3 className='text-center bg-primary p-2 rounded text-white my-3'>User Information</h3>


            <div className='flex bg-white rounded-lg'>
                <div className="w-10 rounded-full">
                    <img src="../../image/hhh.jpg" alt="" />
                </div>
                <div>
                    <p>Bijoy Chandro das</p>
                    <small>Dhaka,Bangladesh</small>
                </div>
            </div>




            <div className='flex justify-between gap-3 bg-white rounded-lg p-2 my-2'>

                <div>
                    <p>75 <small>kg</small></p>
                    <small>Weight</small>
                </div>
                <div>
                    <p>5.2</p>
                    <small>Height</small>
                </div>
                <div>
                    <p>25<small>years</small></p>
                    <small>age</small>
                </div>

            </div>

            <div className='mt-3'>
                <h1>Add A Break</h1>

                <div className='flex justify-between bg-white p-3 rounded-lg'>
                    <h1 className='bg-slate-100 p-2 rounded-lg mr-1 hover:bg-primary' ><span onClick={getBreakTime}>10</span>s</h1>
                    <h1 className='bg-slate-100 p-2 rounded-lg mr-1 hover:bg-primary'><span onClick={getBreakTime}>15</span>s</h1>
                    <h1 className='bg-slate-100 p-2 rounded-lg mr-1 hover:bg-primary'><span onClick={getBreakTime}>20</span>s</h1>
                    <h1 className='bg-slate-100 p-2 rounded-lg mr-1 hover:bg-primary'><span onClick={getBreakTime}>40</span>s</h1>
                    <h1 className='bg-slate-100 p-2 rounded-lg mr-1 hover:bg-primary'><span onClick={getBreakTime}>50</span>s</h1>
                </div>
            </div>


            <div className='my-3'>
                <h1 className='mb-2'>Exercise Details</h1>
                <div className='bg-white p-3 flex justify-between rounded-lg' >
                    <h1>Exercise time</h1>
                    <small>{time}<small> seconds</small></small>
                </div>
                <div className='bg-white p-3 flex justify-between rounded-lg my-2' >
                    <h1>Break time</h1>
                    <small>{breakTime}<small>seconds</small></small>
                </div>
            </div>

            <div className='text-center'>
                <button onClick={notify} className='bg-primary text-white px-3 py-2 rounded-lg'>Activity Complete</button>
            </div>



        </div>
    );
};

export default Details;