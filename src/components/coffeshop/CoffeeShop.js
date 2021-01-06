import React, {Component, Fragment} from 'react';
import Icon24MarketOutline from '@vkontakte/icons/dist/24/market_outline';

const CATEGORIES = ['coffee', 'tea', 'cakes', 'other']


const CoffeeShop = () => {

    const renderCategoriesButtons = () => {
        const btn = CATEGORIES.map(i =>
            <button type="button" className="btn btn-secondary">{i}</button>
        )
        return (
            <Fragment>
                <div className="btn-group" role="group">
                    {btn}
                </div>
            </Fragment>
        )
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" style={{
                width: '55px',
                height: '55px',
                float: 'right'
            }}>
                <Icon24MarketOutline/>
            </button>
            <h5>Search by categories</h5>
            {renderCategoriesButtons()}
            <h3 style={{
                position: 'absolute',
                left: '50%'}}>Menu</h3>
        </div>
    );
}

export default CoffeeShop;
