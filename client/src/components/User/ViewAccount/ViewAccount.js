import "./styles.css"
import ApplicantNav from "../../Navigation/ApplicantNav";

function ViewAccount() {
    return (
        <div>
            <div class="row">
                <ApplicantNav />
                <div class="border-right border-dark align-items-center text-center col-8">
                    <h1>Your Listings</h1>
                </div>
                <div class="d-flex justify-content-center col-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src="static/images/default_profile.jpeg" alt="Admin" class="rounded-circle" width="150" />
                                <div class="mt-3">
                                    <h4>name</h4>
                                    <p class="text-secondary mb-1">email</p>
                                    <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                    <a href="{{ url_for('auth.delete') }}"class="btn btn-primary">Delete Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default ViewAccount