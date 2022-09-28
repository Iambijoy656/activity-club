import React, { useState } from 'react';

const Display = () => {
    const [activities, setActivities] = useState([])


    return (
        <div className='grid grid-cols-6 gap-4'>
            <div className='col-start-1 col-end-5'>
                <h3>Activities</h3>
            </div>



            <div className='text-center'>
                <h3>user information</h3>
            </div>
        </div>
    );
};

export default Display;