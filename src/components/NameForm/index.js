import "./index.css"

const NameForm = ({onChangeFN, onChangeLN}) => {

   return (
       <div className="inputView">
         <input className="input" placeholder="First Name" onChange={(e)=> onChangeFN(e.target.value)}/>
         <input className="input" placeholder="Last Name" onChange={(e)=> onChangeLN(e.target.value)}/>
     </div>
   );
}

export default NameForm;