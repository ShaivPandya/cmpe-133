import { useNavigate } from "react-router-dom";

export default function SubmittedApp({parentToChild}) {
    const app = parentToChild;

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/application/` + app.idApplication;
        navigate(path);
    };
    
    return(
        <tr>
            <td>{app.business}</td>
            <td><a onClick={routeChange}>{app.jobTitle}</a></td>
            <td>{app.status}</td>
        </tr>
    )
}