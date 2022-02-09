import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Ab from '../Ab/Ab';

const About = () => {
    const [about,setAbout] = useState([]);
    useEffect(()=>{
              fetch("about.JSON")
              .then(res=>res.json())
              .then(data=>setAbout(data))
    },[])
    return (
        <div>
            {
                about.map(ab=> <Ab ab={ab}></Ab>)
            }
            
        </div>
    );
};

export default About;