import './JobPostingsList.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../../Navigation/Navigation';

function JobPostingsList() {
  return (
    <div className="App">
        <Navigation />
        <br></br>
        <h1> All Job Postings</h1>
        <div class="container mt-5 mb-3">
            <div class="row">
                <div class="col-md-4">
                    <div class="card p-3 mb-2 border-success">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div class="ms-2 c-details">
                                <button type="submit" class="btn btn-success">Edit Job Posting</button>
                                </div>
                            </div>
                            <div class="badge"> <span>Tags</span> </div>
                        </div>
                        <div class="mt-5">
                            <h3 class="heading">Job Title</h3>
                            <div class="mt-5">
                                <div class="mt-3"> <span class="text1">15 Positions left</span> </div>
                                <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
                                <br></br>
                                <button type="submit" class="btn btn-success">View Applications</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-3 mb-2 border-success">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div class="ms-2 c-details">
                                <button type="submit" class="btn btn-success">Edit Job Posting</button>
                                </div>
                            </div>
                            <div class="badge"> <span>Tags</span> </div>
                        </div>
                        <div class="mt-5">
                            <h3 class="heading">Job Title</h3>
                            <div class="mt-5">
                                <div class="mt-3"> <span class="text1">15 Positions left</span> </div>
                                <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
                                <br></br>
                                <button type="submit" class="btn btn-success">View Applications</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-3 mb-2 border-success">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div class="ms-2 c-details">
                                <button type="submit" class="btn btn-success">Edit Job Posting</button>
                                </div>
                            </div>
                            <div class="badge"> <span>Tags</span> </div>
                        </div>
                        <div class="mt-5">
                            <h3 class="heading">Job Title</h3>
                            <div class="mt-5">
                                <div class="mt-3"> <span class="text1">15 Positions left</span> </div>
                                <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
                                <br></br>
                                <button type="submit" class="btn btn-success">View Applications</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-3 mb-2 border-success">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div class="ms-2 c-details">
                                <button type="submit" class="btn btn-success">Edit Job Posting</button>
                                </div>
                            </div>
                            <div class="badge"> <span>Tags</span> </div>
                        </div>
                        <div class="mt-5">
                            <h3 class="heading">Job Title</h3>
                            <div class="mt-5">
                                <div class="mt-3"> <span class="text1">15 Positions left</span> </div>
                                <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
                                <br></br>
                                <button type="submit" class="btn btn-success">View Applications</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-3 mb-2 border-success">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div class="ms-2 c-details">
                                <button type="submit" class="btn btn-success">Edit Job Posting</button>
                                </div>
                            </div>
                            <div class="badge"> <span>Tags</span> </div>
                        </div>
                        <div class="mt-5">
                            <h3 class="heading">Job Title</h3>
                            <div class="mt-5">
                                <div class="mt-3"> <span class="text1">15 Positions left</span> </div>
                                <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
                                <br></br>
                                <button type="submit" class="btn btn-success">View Applications</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-3 mb-2 border-success">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div class="ms-2 c-details">
                                <button type="submit" class="btn btn-success">Edit Job Posting</button>
                                </div>
                            </div>
                            <div class="badge"> <span>Tags</span> </div>
                        </div>
                        <div class="mt-5">
                            <h3 class="heading">Job Title</h3>
                            <div class="mt-5">
                                <div class="mt-3"> <span class="text1">15 Positions left</span> </div>
                                <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
                                <br></br>
                                <button type="submit" class="btn btn-success">View Applications</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default JobPostingsList;