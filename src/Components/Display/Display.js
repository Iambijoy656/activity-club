import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Display = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])


    return (
        <div>

            <div className='grid grid-cols-6 gap-4 w-10/12 mx-auto my-5'>
                <h3 className='font-bold'>Select Today's Exercise</h3>
                <div className='col-start-1 col-end-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        activities.map(activity =>
                            <Activity
                                key={activity.id}
                                activity={activity}
                            ></Activity>)
                    }
                </div>



                <div className='text-center'>
                    <h3>user information</h3>
                </div>
            </div >
        </div>
    );
};

export default Display;