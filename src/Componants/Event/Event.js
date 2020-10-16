import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SingleEvent from '../SingleEvent/SingleEvent';

const Event = () => {
    const [eventsRegistered , setEventsRegistered] = useState([]);
    const [signedInUser, setSignedInUser] = useContext(UserContext);

    useEffect ( () => {
        fetch('https://secure-tor-12510.herokuapp.com/events?email='+ signedInUser.email)
        .then (res => res.json())
        .then(events => setEventsRegistered(events));
    }, [])
    return (
        <>
        {
            eventsRegistered.map(event => <SingleEvent event = {event}></SingleEvent>)
        }
        </>
    );
};

export default Event;