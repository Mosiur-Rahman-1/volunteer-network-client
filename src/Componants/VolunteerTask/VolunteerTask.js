import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteerTask.css';

const VolunteerTask = (props) => {
    const data = props.task;
    const {title, pic, id} = data;
    return (
        <div className= 'col-md-3 width'>
            <img src={require(`../../images/${pic}`)} className= "card-img-top" alt="Task images"/>
            <div className="card-body bg-success rounded-bottom">
                <Link to = {"/task/" + id}><h5 className="card-title text-light">{title}</h5></Link>
            </div>
        </div>
    );
};

export default VolunteerTask;