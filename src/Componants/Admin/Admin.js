import React, {useEffect, useState } from 'react';

const Admin = () => {

    const [usersRegistered , setUsersRegistered] = useState([]);
    useEffect ( () => {
        fetch('https://secure-tor-12510.herokuapp.com/users')
        .then (res => res.json())
        .then(user => setUsersRegistered(user));
    }, [])
    return (
        <div className="container-fluid" >
            <div className="row admin-navbar">

                <div className="col-md-3">
                    <ul className="mt-5">
                        <a href="/dashboard/admin">Volunteer register list</a>
                        <br/>
                        <a href="/dashboard/addEvent">Add event</a>
                    </ul>

                </div>

                <div className="col-md-9" style={{ height: '100vh', background: '#F4F7FC' }}>
                    <h3>Volunteer register list</h3>

                    <div className="bg-white p-5">
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Registration date</th>
                                    <th scope="col">Volunteer list</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Mosiur Rahaman</th>
                                    <td>masiurreheman01@gmail.com</td>
                                    <td>12/10/2020</td>
                                    <td>Child support</td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Poltu</th>
                                    <td>poltu@gmail.com</td>
                                    <td>12/10/2020</td>
                                    <td>Animal support</td>
                                    <td><button className="btn btn-danger">Delete</button></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Admin;