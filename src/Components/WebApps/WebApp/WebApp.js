import React from 'react';
import './WebApp.css';

const webapp = (props) => {
    return (
        <div class="col-12 col-xl-2 col-md-3 col-sm-4">
            <a href={props.site} class="card">
                <img src={props.src} class="card-img-top" alt="..."/>
                <div class="card-body pb-0">
                    <h5 class="card-title">{props.name}</h5>
                    <a href={props.join} class="btn btn-outline-primary btn-sm w-100 mb-1 button">Join A Meeting</a>
                    <a href={props.host} class="btn btn-outline-success btn-sm w-100 mb-1 button">Host A Meeting</a>
                </div>
            </a>
        </div>
    );
}

export default webapp;
