import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Details from '../Details/Details';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Display.css'

const Display = () => {
    const [activities, setActivities] = useState([]);

    const [time, setTime] = useState(0)


    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const notify = () => toast("Wow complete Activity!");

    let exTime = 0;
    const saveExcerciseData = localStorage.getItem('saveExcerciseData');


    const handleAddToCart = (activity) => {
        if (saveExcerciseData) {
            exTime = activity + parseInt(saveExcerciseData);
        } else {
            exTime = activity + time;
        }

        setTime(exTime)
        localStorage.setItem('saveExcerciseData', exTime);

    }




    // console.log(time)

    return (
        <div>
            <ToastContainer />

            <div className='grid xl:grid-cols-[3fr_1fr] md:grid-cols-[3fr_1fr] gap-4  my-5 w-9/12 mx-auto  sm:flex-col'>

                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  sm:w-full'>
                    {
                        activities.map(activity =>
                            <Activity
                                key={activity.id}
                                activity={activity}
                                handleAddToCart={handleAddToCart}
                            ></Activity>)
                    }
                </div>



                <div className='bg-slate-100  cart'>
                    <Details time={saveExcerciseData} notify={notify}></Details>
                </div>
            </div >
        </div>
    );
};

export default Display;