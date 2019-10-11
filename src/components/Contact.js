import React from 'react';
import data from '../data.json';

function Contact( props ) {
    const id = props.match.params.idContact;
    console.log(props);
    return(
        <div>
            <h3>{data[id].schoolName}</h3>
            <p>{data[id].city}</p>
            <h6>{data[id].country}</h6>
            <p>{data[id].degree}</p>
            <p>{data[id].schoolStarted}</p>
            <p>{data[id].schoolEnded}</p>
        </div>
    )
}

export default Contact;