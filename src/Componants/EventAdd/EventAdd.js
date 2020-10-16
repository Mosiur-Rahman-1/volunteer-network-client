import React from 'react';

const EventAdd = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-3 mt-5">
                    <ul className="dashboard-menu ">
                        <a href="/dashboard/admin">Volunteer register list</a>
                        <br/>
                        <a href="/dashboard/addEvent">Add event</a>
                    </ul>
                  
                </div>

                <div className="col-md-9" style={{ height: '100vh', background: '#F4F7FC' }}>
                    <h3>Add event</h3>

                    <div className="bg-white p-5 " onsubmit="return false">
                        <form >
                            <div className="row">
                                <div className="col form-group">
                                    <label htmlFor="title">Event Title</label>
                                    <input type="text" id="title" name="title" className="form-control bg-light" placeholder="Event title" />
                                </div>
                                <div className="col form-group">
                                    <label htmlFor="date">Event Date</label>
                                    <input type="date" id="date" className="form-control bg-light" />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" id="description" className="form-control bg-light" placeholder="description" />
                                </div>
                                <div className="col form-group">
                                    <label htmlFor="date">Image</label>
                                    <input type="file" id="image" className="form-control-file" />
                                </div>
                            </div>
                            <div className="row d-flex justify-content-end">
                                <input type="submit" value="Submit" className="btn btn-primary " />
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div >
    );
};

export default EventAdd;