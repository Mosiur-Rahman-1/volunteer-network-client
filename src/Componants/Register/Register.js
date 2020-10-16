import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import volunteerWork from '../../FakeData/VolunteerWork';
import { UserContext } from '../../App';

const Register = () => {
    //signed in user state
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const {taskId} = useParams();
    const work = volunteerWork.find(task => task.id == taskId);
    const {title} = work;

    //Date state added
    const [dateAdded, setDateAdded] = useState({
        selectedDate: new Date (),
    });

    const handleDateAdded = (date) => {
        const newDate = {...dateAdded};
        console.log(newDate);
        newDate.selectedDate = date;
        setDateAdded(newDate);
    }
    console.log(dateAdded);
    const handleRegistrationSubmit = () => {

        const registeredEvent = {...signedInUser, ...dateAdded, ...work};
        console.log(registeredEvent);
        fetch('https://secure-tor-12510.herokuapp.com/addRegisteredEvent', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(registeredEvent)
        })
        .then(res => res.json())
        .then(booking => console.log(booking))
        
    }
   
    return (
        <div className= 'row mt-5 pt-5'>
            <div className="card m-auto">
                <div className="card-body">
                    <h5 className="card-title mb-4">Register as a volunteer</h5>
                        <form action="">
                            <div className="form-group">
                                <input type="text" value = {signedInUser.name} className="form-control mb-2" id="fullName" placeholder="Your full name"/>
                                <input type="email" value = {signedInUser.email} className="form-control mb-2" id="emailInput"placeholder="Your email" />
                                <input type="date"  onChange = {handleDateAdded} className="form-control mb-2" placeholder="Date" defaultValue = {dateAdded.selectedDate}/>
                                <input type="text" className="form-control mb-2" id="description" placeholder="Type the details"/>
                                <input type="text" value = {title} className="form-control" placeholder="Your Volunteer task"/>
                            </div>
                            <Link to = '/event'><button onClick= {handleRegistrationSubmit} className="btn btn-primary">Registration</button></Link>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default Register;