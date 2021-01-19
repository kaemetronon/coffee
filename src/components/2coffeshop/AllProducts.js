import React, {Fragment} from 'react';
import {Div, Button, Counter, FixedLayout, FormLayout, Group, Header, Slider} from "@vkontakte/vkui";


const AllProducts = ({shopId}) => {

    const getDataForShop = shopId => {
        // request to server
        // plug here
        return [
            {
                name: 'cappuccino with mocha',
                description: 'descr1',
                price: '14₽',
                volume: '88мл',
                img: 'cap.png',
                count: 4
            }, {
                name: 'latte with mocha',
                description: 'descr2',
                price: 'price2',
                volume: 'vol2',
                img: 'cap.png',
                count: 0
            }, {
                name: 'water with mocha',
                description: 'descr3',
                price: 'price3',
                volume: 'vol3',
                img: 'cap.png',
                count: 0
            }
        ];
    };

    const renderElements = (o) => {
        if (o.length === 0) {
            return null;
        } else {
            const rendered = o.map(i =>
                <div className="card mb-3">
                    <div className="row g-0">
                        <img src={`/img/${i.img}`} height="100"/>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5>{i.name} </h5>
                                <p>{i.description} </p>
                                <p>{i.price} - {i.volume}</p>
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" disabled="disabled"
                                        dataType="minus"
                                        data-field="quant[1]">
                                    <span className="glyphicon glyphicon-minus"/>
                                </button>
                            </span>
                        <input type="text" name="quant[1]" className="form-control input-number" value="1" min="1"
                               max="10"/>
                        <span className="input-group-btn">
                                <button type="button" className="btn btn-default btn-number" dataType="plus"
                                        data-field="quant[1]">
                                    <span className="glyphicon glyphicon-plus"/>
                                </button>
                            </span>
                    </div>
                </div>
            )
            return (<Fragment>{rendered}</Fragment>)
        }
    }
    const allElems = renderElements(getDataForShop(shopId));

    return (
        <div>
            <ul className="list-group list-group-flush">
                {allElems}
            </ul>
        </div>
    );
}


export default AllProducts;
