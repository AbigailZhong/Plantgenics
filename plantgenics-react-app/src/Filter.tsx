import './Custom.css';

function Filter() {
    return(
        <div className="card shadow-sm" id="filter-container">
            <h5 className="card-title">Filter</h5>
	        <article className="card-group-item">
		        <header className="card-header"><h6 className="title">Growing Cycle</h6></header>
		        <div className="filter-content">
			        <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item">Annual</a>
                        <a href="#" className="list-group-item">Perennial</a>
                        <a href="#" className="list-group-item">Biennial</a>
			        </div>
		        </div>
	        </article>

	        <article className="card-group-item">
		        <header className="card-header"><h6 className="title">Type:</h6></header>
		        <div className="filter-content">
			        <div className="card-body">
				        <label className="btn">
                            <input className="" type="checkbox" name="myradio" value="" />
                            <span className="form-check-label">Flower</span>
				        </label>

                        <label className="btn btn-success">
                        <input className="" type="checkbox" name="myradio" value="" />
                        <span className="form-check-label">Vegetable</span>
                        </label>

                        <label className="btn btn-primary">
                        <input className="" type="checkbox" name="myradio" value="" />
                        <span className="form-check-label">Herb</span>
                        </label>
			        </div>
		        </div>
	        </article>
        </div>
    );
}

export default Filter;