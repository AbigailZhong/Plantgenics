import React, { ReactElement } from 'react';
import Plant from './Plant';
import './Custom.css';

function Search() {
    return (
    <div id="wishlist">
        <div className="offcanvas offcanvas-start" tabIndex= {-2} id="offcanvas" aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
            </div>
        </div>
    </div>
    )
}

export default Search;