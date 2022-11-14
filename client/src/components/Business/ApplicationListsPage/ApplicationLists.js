import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navigation from '../../Navigation/Navigation';

function ApplicationsList() {
  return (
    <div>
    <Navigation />
      <br></br>
      <h1> Applications for Defense Attorney</h1>
      <div class="row justify-content-center">
            <div class="col-sm-7">
            <table class="table table-hover table-bordered table-md " cellspacing="0" width="100%">
            <thead>
                <tr class="bg-success text-light">
                <th>Full name</th>
                <th>Phone number</th>
                <th>E-mail</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Applied</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Interview Offered</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Interview Accepted</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Job Offered</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Job Accepted</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Job Accepted</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Job Accepted</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Job Accepted</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Job Accepted</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Job Accepted</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Job Accepted</td>
                </tr>
                <tr>
                <td><a href="/view-application">Saul Goodman</a></td>
                <td>505-503-4455</td>
                <td>bettercallsaul@gmail.com</td>
                <td>Job Accepted</td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
  </div>
  );
}

export default ApplicationsList;