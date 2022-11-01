import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './Component/CreateContext/context';
import{Signcontext}from "./Component/CreateContext/context"
import firebase from './Component/FireBaseConfig/FirebaseConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Signcontext.Provider value={{firebase}}>
 <Context>
 <App/>
 </Context>
   </Signcontext.Provider>
   
   
  
);

