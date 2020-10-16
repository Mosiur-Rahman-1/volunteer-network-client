import React from 'react';

const SingleEvent = (props) => {
    const {pic, title, _id} = props.event;
    return (
        <div className="d-flex flex-row float-left m-5">
        <div className="card mb-3 justify-content-center" style={{maxWidth: "540px"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={require(`../../images/${pic}`)} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <button onClick ={() => handleEventDelete(_id)} className= " btn-danger ml-5 mt-5">Cancel</button>
                </div>
            </div>
        </div>
        </div>
    );

    function handleEventDelete (id){
        console.log(id);
        fetch(`/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('sucessfull deleted',result);
        })
    }
};

export default SingleEvent;