const IDcard= (props) => {
    return ( 
        <div className="card w-25 float-start mx-3 my-3 bg-primary text-white">
            <h4 class="card-header bg-info">
            {props.name}
            </h4>
            <div className="card-body">
                <h3 className="card-text">{props.des}</h3>
                <p className="card-text">{props.age}</p>
            </div>
        </div>
     );
}
 
export default IDcard;