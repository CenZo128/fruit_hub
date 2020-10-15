import React from 'react'
import './Banner.css'

function Banner(props) {
    return (
        <>
            <div className="container">
                <p>Ini adalah {props.names.girls}</p>
                <small>Ini adalah mantan {props.names.boys}</small>
            </div>
        </>
    )
}

export default Banner
