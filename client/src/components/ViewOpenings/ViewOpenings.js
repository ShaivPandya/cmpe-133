function ViewOpenings() {
    return(
        <div>
            <h1>View Job Openings</h1>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-auto mb-3">
                        <div class="card">
                            <div class="text-danger">messages[0]</div>
                            <img class="card-img-top" src="{{ url_for('static', filename='images/'+business.image) }}" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">business.name</h5>
                                <p class="card-text">Job.view </p>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <p class="text-muted">$Job.status</p>
                                    </div>
                                    <form method="GET" action="{{ url_for('main.purchase', productID=listing.productID) }}">
                                        <div class="d-flex flex-row">
                                        <button class="btn btn-link px-2"
                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <input id="form1" min="0" name="quantity" value="1" type="number"
                                            class="form-control form-control-sm" />
                        
                                        <button class="btn btn-link px-2"
                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                        </div>
                                        <button type="submit" class="btn btn-success">View</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOpenings