import React from 'react';
import Reminder from './Reminder';
import { getReminders, deleteReminder } from '../data/reminderData';

const ReminderList = ({ onUpdate }) => {
   const reminders = getReminders();

   const handleDelete = (id) => {
       deleteReminder(id);
       onUpdate();
   };

   return (
       <div className="reminder-list">
           {reminders.map(reminder => (
               <Reminder key={reminder.id} reminder={reminder} onDelete={handleDelete} />
           ))}
       </div>
   );
};

export default ReminderList;
