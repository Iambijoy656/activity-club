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
        <div className='grid grid-cols-6 gap-4'>
            <div className='col-start-1 col-end-5'>
                {
                    activities.map(activity =>
                        <Activity
                            key={activity.id}
                        ></Activity>)
                }
            </div>



            <div className='text-center'>
                <h3>user information</h3>
            </div>
        </div >
    );
};

export default Display;