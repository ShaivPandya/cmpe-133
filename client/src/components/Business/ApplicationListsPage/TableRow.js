export default function TableRow({parentToChild}) {
    const app = parentToChild;
    const l = "/view-application/" + app.idApplication;

    return(
        <>
            <td><a href={l}>{app.Name}</a></td>
            <td>{app.Phone}</td>
            <td>{app.email}</td>
            <td>{app.status}</td>
        </>
    )
}