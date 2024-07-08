let reminderData = [
    { id: 1, text: "Comprar leche", important: false },
    { id: 2, text: "Enviar correo electrónico", important: true },
    { id: 3, text: "Llamar a mamá", important: false },
 ];
 
 export const getReminders = () => reminderData;
 
 export const addReminder = (text, important) => {
    const newReminder = {
        id: reminderData.length + 1,
        text: text,
        important: important,
    };
    reminderData.push(newReminder);
 };
 
 export const updateReminder = (id, text, important) => {
    const index = reminderData.findIndex(reminder => reminder.id === id);
    if (index !== -1) {
        reminderData[index] = { id, text, important };
    }
 };
 
 export const deleteReminder = (id) => {
    reminderData = reminderData.filter(reminder => reminder.id !== id);
 };
 