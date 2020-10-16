import React from 'react';
import volunteerWork from '../../FakeData/VolunteerWork';
import VolunteerTask from '../VolunteerTask/VolunteerTask';
import './Home.css';


const Home = () => {
    return (
        <div className= "row">
            {
                volunteerWork.map(data => <VolunteerTask task = {data}></VolunteerTask>)
            }
        </div>
    );
};

export default Home;