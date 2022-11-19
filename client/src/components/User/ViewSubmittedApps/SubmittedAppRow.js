export default function SubmittedApp({parentToChild}) {
    const app = parentToChild;
    const l = "/application/" + app.idApplication;
    
    return(
        <tr>
            <td>{app.business}</td>
            <td><a href={l}>{app.jobTitle}</a></td>
            <td>{app.status}</td>
        </tr>
    )
}