import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Doctor from '../Doctor/Doctor';




const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    useEffect(()=>{
       fetch("doctor.json")
       .then(res=>res.json())
       .then(data=>setDoctors(data))
    },[])
    return (
        
        <div className="container">
            <h1>Our Doctors
            
            </h1>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-6 g-4">
            {
                doctors.map(doctor=><Doctor doctor={doctor}></Doctor>)
            }
            
            </div>
        </div>
    );
};

export default Doctors;