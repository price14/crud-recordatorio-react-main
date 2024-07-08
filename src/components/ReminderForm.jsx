import React, { useState } from 'react';
import { addReminder, updateReminder } from '../data/reminderData';

const ReminderForm = ({ reminder, onUpdate }) => {
   const [text, setText] = useState(reminder ? reminder.text : '');
   const [important, setImportant] = useState(reminder ? reminder.important : false);

   const handleSubmit = (e) => {
       e.preventDefault();
       if (reminder) {
           updateReminder(reminder.id, text, important);
       } else {
           addReminder(text, important);
       }
       onUpdate();
       setText('');
       setImportant(false);
   };

   return (
       <form onSubmit={handleSubmit}>
           <input
               type="text"
               placeholder="Ingrese un recordatorio"
               value={text}
               onChange={(e) => setText(e.target.value)}
           />
           <label>
               Importante:
               <input
                   type="checkbox"
                   checked={important}
                   onChange={(e) => setImportant(e.target.checked)}
               />
           </label>
           <button type="submit">{reminder ? 'Actualizar' : 'Agregar'}</button>
       </form>
   );
};

export default ReminderForm;
