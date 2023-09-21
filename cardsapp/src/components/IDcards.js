import IDcard from "./IDcard";
import Data from '../Data.json'

function IDcards(){
    console.log(Date.data);
    return(<>
       <h1>Hello from Mycards App!</h1>
       {Data.data.map(elm=>{
         return <IDcard key={elm.id} name={elm.name} age={elm.age} des={elm.des}/>
       })}
       
    </>
    )
}

export default IDcards;