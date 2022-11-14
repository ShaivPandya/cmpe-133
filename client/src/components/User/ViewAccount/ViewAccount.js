import "./styles.css"
import ApplicantNav from "../../Navigation/ApplicantNav";
import { useState } from "react";

function ViewAccount() {
    const [user, setUser] = useState([]);

    return (
        <div>
            <div class="row">
                <ApplicantNav />
                <h1>John Doe</h1>
                <h2>Email: johndoe@gmail.com</h2>
                <h2>Phone: (123) 456-7890</h2>
                <h2>Date of Birth: 01/01/1999</h2>
            </div> 
        </div>
    )
}
export default ViewAccount