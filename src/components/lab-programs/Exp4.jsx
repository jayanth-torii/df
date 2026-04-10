import React,{useState} from 'react'

const Exp4 = () => {
    const[tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const addTask = () => {
        if(input.trim()){
            setTasks([
                ...tasks,
                {id: Date.now(), text: input.trim(), completed: false}
            ]);
            setInput('');
        }
    };
    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

  return (
    <div>
      <h1>Experiment 4: To-Do List Application</h1>
        <p>Manage a list of tasks with add, toggle complete, and delete functionality</p>
        <div>
            <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e)=>e.key=== 'Enter' && addTask()}
            placeholder='Enter a new task'
            />
            <button onClick={addTask}>Add Task</button>
        </div>
        <div>
            {tasks.length === 0 ? (
                <p>No tasks yet. Add a task to get started!</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                            <button onClick={() => toggleTask(task.id)}>
                                {task.completed?"❌":"✅"}
                            </button>
                         <span>
                            {task.completed ? <s>{task.text}</s> : task.text}
                         </span>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
            {tasks.length >0 &&(
                <p>{tasks.filter(t => t.completed).length} of {tasks.length} tasks completed</p>
            )}
        </div>
    </div>
  )
}

export default Exp4
