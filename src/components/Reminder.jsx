import React from 'react';

const Reminder = ({ reminder, onDelete }) => {
   return (
       <div className={`reminder ${reminder.important ? 'important' : ''}`}>
           <p>{reminder.text}</p>
           <div>
               <button onClick={() => onDelete(reminder.id)}>Eliminar</button>
           </div>
       </div>
   );
};

export default Reminder;
