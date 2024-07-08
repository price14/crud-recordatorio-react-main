import React, { useState } from 'react';
import './App.css';
import ReminderForm from './components/ReminderForm';
import ReminderList from './components/ReminderList';

function App() {
   const [refreshKey, setRefreshKey] = useState(0);

   const handleUpdate = () => {
       setRefreshKey(prevKey => prevKey + 1);
   };

   return (
       <div className="App">
           <h1>CRUD de Recordatorios</h1>
           <ReminderForm onUpdate={handleUpdate} />
           <ReminderList key={refreshKey} onUpdate={handleUpdate} />
       </div>
   );
}

export default App;
