import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <>
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://img.freepik.com/free-vector/professional-website-banner-with-orange-shapes_1361-1755.jpg?size=626&ext=jpg" className="d-block w-100" alt="Banner Web" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://img.freepik.com/free-vector/professional-website-banner-with-orange-shapes_1361-1755.jpg?size=626&ext=jpg" className="d-block w-100" alt="https://img.freepik.com/free-vector/professional-website-banner-with-orange-shapes_1361-1755.jpg?size=626&ext=jpg" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://img.freepik.com/free-vector/professional-website-banner-with-orange-shapes_1361-1755.jpg?size=626&ext=jpg" className="d-block w-100" alt="https://img.freepik.com/free-vector/professional-website-banner-with-orange-shapes_1361-1755.jpg?size=626&ext=jpg" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Banner
