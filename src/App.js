import About from "./Component/About";
import Profile from "./Component/Profile";
import{useState} from 'react'
import {Route,Routes,Link,useNavigate} from 'react-router-dom'
import {Appcontext} from './Appcontext'

function App() {
  const [state,setState]=useState('hi it is me JARVIS')
  const navigate=useNavigate()

  


  return (
   <div>
    <div>
    <Link to='/a'>About page</Link>
    <Link to='/p'>Profile page</Link>
    </div>
    <div>
    <button onClick={()=>navigate('/a')} >About</button>
    <button onClick={()=>navigate('/p')} >profile</button>
    </div>
    <Appcontext.Provider value={{data:state}}>
      <Routes>
      <Route  exact path='/a' 
      element={<About/>} />
      <Route  exact path='/p' element={<Profile/>} />
      </Routes>
      </Appcontext.Provider>
   </div>
  );
}
export default App;
