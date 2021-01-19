import React, {Fragment, useState} from 'react';
import {Sorting} from "./Sorting";
import {Icon24BrainOutline} from "@vkontakte/icons";
import Carousel from "./Carousel";
import {CardObjects} from "./CardObjects";
import {useEffect} from "react/cjs/react.production.min";
import bridge from "@vkontakte/vk-bridge";

const SORTING_CRITERIA = {
    DISTANCE: 'distance',
    COST: 'cost',
    REV: 'rev'
}

const Main = ({user, go, places}) => {

    const [term, setTerm] = useState('');
    const [sort, setSort] = useState(SORTING_CRITERIA.DISTANCE);


    return (
        <div className='container-fluid'>
            <div className='d-flex flex-row justify-content-between'>
                <div className="input-group col-10">
                    <Sorting/>
                    <input type="text" className="form-control" placeholder="Search term..."/>
                </div>
                <button type="button" className="btn btn-primary" style={{
                    width: '55px',
                    height: '55px',
                    textAlign: 'center'
                }}>
                    <Icon24BrainOutline/>
                </button>
            </div>
            <Carousel places={places}/>
            <CardObjects places={places}/>
        </div>
    );
};

export default Main;
