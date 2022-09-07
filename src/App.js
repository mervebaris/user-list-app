import React, {useState} from 'react';
import UserList from './components/UserList';
import UserDetail from "./components/UserDetail";
import './App.css';


function App() {
   
  const [activeUserId, setActiveUserId] = React.useState(null);


  return (
    <div className="App">
      <div>
        <UserList setActiveUserId={setActiveUserId} />
      </div>
     {activeUserId && <UserDetail activeUserId={activeUserId} />}
    </div>
  );
}

export default App;
