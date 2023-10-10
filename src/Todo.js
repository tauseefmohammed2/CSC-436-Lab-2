export default function Todo ({ title, desciption, author, dateCreated, complete, dateCompleted }) {
    return (
         <div>
            <h3>{title}</h3>
            <div>{desciption}</div>
            <div>{dateCreated}</div>
            <div>{complete}</div>
            <div>{dateCompleted}</div>
            <br />
            <i>Written by <b>{author}</b></i>
        </div>
    )
}