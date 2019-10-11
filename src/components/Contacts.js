import React from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

class Contacts extends React.Component {
    state = {
        contacts: data
    }

    render() {
        const countries = this.state.contacts.map((item, index) => {
            const route = `/contacts/${index}`
            return (
                <div key={index}>
                    <h3><Link to={route}>{item.schoolName}</Link></h3>
                    <p>{item.city}</p>
                    <h6>{item.country}</h6>
                </div>
            )
        })
        return (
            <div>
                <h1>Contacts Page</h1>
                {countries}
            </div>
            );
        }
}

export default Contacts;
