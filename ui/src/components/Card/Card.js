import React from 'react'
import './Card.css'

function Card(props) {
    console.log(props)
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div className="col-3">
                            <img className="img-fluid" src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/05/03/40b7c63c-59a2-11e9-bbcc-84176f6dd1e7_image_hires_134058.jpg?itok=6kpUNFj4&v=1556862065" />
                            <h3>{props.boys}</h3>
                        </div>
                        <div className="col-9">
                            <h3>List Cewe</h3>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Hobby</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.girls.map(girl => {
                                            return (
                                                <tr>
                                                    <td>{girl.name} <span className="badge badge-info">{girl.duration} tahun</span></td>
                                                    <td>{
                                                        girl.hobbies.map(hobby=>{
                                                            return (
                                                                <span className="badge badge-info"></span>
                                                            )
                                                        })
                                                    }</td>
                                                    <td><button className="btn btn-sm btn-primary">Information</button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <p>Ini adalah </p>
                <small>Ini adalah mantan </small>
            </div>
        </>
    )
}

export default Card
