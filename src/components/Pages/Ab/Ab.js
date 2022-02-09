import React from 'react';

const Ab = (props) => {
    const{name,desc}=props.ab;
    return (
        <div classNameName>
            <h1>{name}</h1>
            <p>{desc}</p>
            
        </div>
    );
};

export default Ab;