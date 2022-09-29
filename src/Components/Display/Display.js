import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Details from '../Details/Details';
import './Display.css'

const Display = () => {
    const [activities, setActivities] = useState([]);

    const [details, setDetails] = useState([])


    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const handleAddToCart = (activity) => {
        console.log(activity)
        const updateDetails = [...details, activity];
        setDetails(updateDetails)

    }





    return (
        <div>

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
                    <Details details={details}></Details>
                </div>
            </div >
        </div>
    );
};

export default Display;