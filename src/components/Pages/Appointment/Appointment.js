import React from 'react';
import { useParams } from 'react-router-dom';

const Appointment = () => {
    const {imgID} = useParams();
    return (
        <div>
           
           
            <img src={imgID} alt="" />
            
        </div>
    );
};

export default Appointment;