import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const{name,img,description,desgnation} = props.doctor;
    return (
       <div>
           <div className="col">
               <div className="card h-10">
                   <img src={img} className="card-img-top" alt="" />
                   <div className="card-body text-center">
                       <h5>{name}</h5>
                       <h1>{desgnation}</h1>

                       <small className="card-title">{description}</small>
                       <p className="card-text">{description}</p>
                   </div>
                   <div className="card-footer">
                       <Link to={`/appointment/${img}`}><button  className="btn btn-success btn-lg">Book Appointment</button></Link>
                   </div>
               </div>
           </div>
       </div>

//         <div className="col">
//     <div className="card h-100">
//       <img src={img} className="card-img-top" alt="...">
//       <div className="card-body">
//         <h5 className="card-title">{description}</h5>
//         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//       <div className="card-footer">
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </div>
   
  
//   </div>
// </div>
        
    )
};

export default Doctor;