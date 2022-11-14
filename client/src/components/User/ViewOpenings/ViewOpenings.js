import "./styles.css"
import React,{ useState,useEffect } from 'react'
import Axios from 'axios'

function ViewOpenings() {
    const [ jobList, setJobList ] = useState([]);

    return(
        <div>
            <h1>View Job Openings</h1>
            <div>
                <input></input>
            </div>
        </div>
    )
}

export default ViewOpenings