import React, {Component, Fragment} from 'react';


class Carousel extends Component {

    render() {
        const objF = obj => {
            if (obj.length === 0) return null;
            else {
                const firstElem = 'carousel-item active';
                const notFirstElem = 'carousel-item';

                const rendered = obj.map((i, idx) =>
                    <div className={idx === 0 ? firstElem : notFirstElem}>
                        <img className="d-block w-100" src={`/img/${i.img}`} alt={i.name} width="100" height="100"/>
                    </div>
                )
                return (<Fragment>{rendered}</Fragment>)
            }
        }

        return (
            <div id="carouselExampleControls" className="carousel slide container-fluid col-6" data-ride="carousel">
                <div className="carousel-inner">
                    {objF(this.props.tempObjects)}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel;
