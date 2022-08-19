import About from "./Component/About";
import Profile from "./Component/Profile";
import{useState} from 'react'
import {Route,Routes,Link,useNavigate} from 'react-router-dom'


function App() {
  const [state,setState]=useState('')
  const navigate=useNavigate()

  


  return (
   <div>
    <button onClick={()=>navigate('/a')} >About</button>
    <button onClick={()=>navigate('/p')} >profile</button>
    
   
  
  
    
      
      <Routes>
      <Route  exact path='/a' element={<About/>} />
      <Route  exact path='/p' element={<Profile/>} />
      </Routes>
  
    
  
   </div>
  );
}
export default App;
