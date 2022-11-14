import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './ApplicationInformation.css'
import Navigation from '../../Navigation/Navigation';


function ApplicationInformation() {
  return (
    <div>
    <Navigation />
        <br></br>
        <div class="row justify-content-center">
        <h1> Saul Goodman's Application</h1>
            <div class="card col-sm-7">
                <div class="card-body">
                <table class="table user-view-table m-0">
                    <tbody>
                    <tr>
                        <td>Job Title:</td>
                        <td>Defense Attorney</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>Saul Goodman</td>
                    </tr>
                    <tr>
                        <td>E-mail:</td>
                        <td>bettercallsaul@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Date of birth:</td>
                        <td>November 12, 1960</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>+1 (505) 503-4455</td>
                    </tr>
                    <tr>
                        <td>Application PDF:</td>
                    </tr>
                    </tbody>
                </table>
                    <iframe src="https://thescriptlab.com/wp-content/uploads/scripts/Better-Call-Saul-S04E10-Winner.pdf" title="FileName"/>
                </div>
                    <div class="row">
                        <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="submit" class="btn btn-primary ">Offer Interview</button>
                        <button type="submit" class="btn btn-success ">Offer Job</button>
                        <button type="submit" class="btn btn-danger ">Reject Application</button>
                        </div>
                    </div>
            </div>
        </div>
  </div>
  );
}

export default ApplicationInformation;