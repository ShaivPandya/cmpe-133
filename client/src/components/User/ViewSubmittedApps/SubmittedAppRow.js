export default function SubmittedApp({parentToChild}) {
    const app = parentToChild;
    
    return(
        <tr>
            <td>{app.business}</td>
            <td><a href="/view-application">{app.jobTitle}</a></td>
            <td>{app.status}</td>
        </tr>
    )
}