export default function TableRow({parentToChild}) {
    const app = parentToChild;
    return(
        <>
            <td><a href="/view-application">{app.Name}</a></td>
            <td>{app.Phone}</td>
            <td>{app.email}</td>
            <td>{app.status}</td>
        </>
    )
}