export default function Photo({photo}){
    const {body,title,id} = photo;
    return(
        <div>
            <h4>{id}</h4>
            <p>{body}</p>
            <p>{title}</p>
        </div>
    )
}