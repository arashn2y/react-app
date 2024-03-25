import {useState} from 'react';
import Header from "./components/Header";

function App() {
  const [name,setName] = useState('ospite');
  const [email, setEmail] = useState('davide@mail.com');
  const [user, setUser] = useState({
    name: 'ospite',
    email: 'davide@mail.com'
  });
  //console.log(user.name, user.email);
  return ( 
  <>

  <Header title='My App'/>
  <div className='flex flex-col justify-center items-center mt-3'>
  
  <input type="text"
  value= {name}
  className='border-black border-2 p-2 rounded mt-3'
  onChange={event=>{
    const name = event.target.value;
    setName(name);
    setUser((prevState)=>{
      //console.log(user);
      return {
        ...prevState,//si prendono tutti gli elementi del precedente oggetto
        name: event.target.value
      }
    });
  }} />
  <h1 >{name}</h1>

  <input type="email"
  value= {email}
  className= 'border-black border-2 p-2 rounded mt-3'
  onChange={event=>{
    const email = event.target.value;
    setEmail(email);
    setUser((prevState)=>{
      //console.log(user);
      return {
        ...prevState,
        email: event.target.value
      }
    })
  }}/>
  <h1>{email}</h1>
  
  </div>
  




  </>
  );
}

export default App;