import React from 'react';


export const Sorting = () => {

        return (
            <div className="input-group-btn search-panel">
                <button type="button" className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown">
                    <span id="search_concept">Sort by</span> <span className="caret"/>
                </button>
                <ul className="dropdown-menu" role="menu">
                    <li key={0}><a className="dropdown-item" href="#dist">distance</a></li>
                    <li key={1}><a className="dropdown-item" href="#cost">cheaper avg cost</a></li>
                    <li key={2}><a className="dropdown-item" href="#reviews">reviewers</a></li>
                </ul>
            </div>
        )
}
