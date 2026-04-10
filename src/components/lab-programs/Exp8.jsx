import React, { useState } from 'react';

const Exp8Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [task, setTask] = useState({ name: '', date: '', desc: '' });
  const [filter, setFilter] = useState('all');

  const addReminder = (e) => {
    e.preventDefault();
    if (task.name && task.date) {
      setReminders([
        ...reminders,
        { ...task, id: Date.now(), completed: false }
      ]);
      setTask({ name: '', date: '', desc: '' });
    }
  };

  const toggleComplete = (id) => {
    setReminders(
      reminders.map(r =>
        r.id === id ? { ...r, completed: !r.completed } : r
      )
    );
  };

  const filtered = reminders.filter(r => {
    if (filter === 'completed') return r.completed;
    if (filter === 'pending') return !r.completed;
    return true;
  });

  return (
    <div>
      <h2>Experiment 8: Reminder Application</h2>
      <p>Manage tasks with due dates and filter them.</p>

      <form onSubmit={addReminder}>
        <input
          type="text"
          placeholder="Task Name"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          required
        />

        <input
          type="date"
          value={task.date}
          onChange={(e) => setTask({ ...task, date: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Description"
          value={task.desc}
          onChange={(e) => setTask({ ...task, desc: e.target.value })}
        />

        <button type="submit">Add Reminder</button>
      </form>

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      {filtered.length === 0 ? (
        <p>No reminders to show</p>
      ) : (
        <ul>
          {filtered.map(r => (
            <li key={r.id}>
              <input
                type="checkbox"
                checked={r.completed}
                onChange={() => toggleComplete(r.id)}
              />
              <strong>{r.name}</strong> - {r.date}
              {r.desc && <p>{r.desc}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Exp8Reminder;