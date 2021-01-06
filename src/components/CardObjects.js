import React, {Fragment} from 'react';


export const CardObjects = ({tempObjects}) => {

    const getObjs = o => {
        if (o.length === 0)
            return null;
        else {
            const elem = o.map(i =>
                <div className='card' key={i.name}>
                    <div className='row justify-content-md-center'>
                        <button>
                            <img src={`/img/${i.img}`} alt={i.name} className="card-img-top rounded"
                                 style={{width: '150px', height: '150px'}}/>
                            <div>
                                <span>{i.name}</span>
                            </div>
                        </button>
                    </div>
                </div>
            )
            return (<Fragment>{elem}</Fragment>)
        }
    }

    return (
        <div className="input-group-btn search-panel">
            <div className="card-group">
                {getObjs(tempObjects)}
            </div>
        </div>
    )
}
