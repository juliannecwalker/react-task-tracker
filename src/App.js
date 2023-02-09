import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'
 
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Read',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
  ])

  const [showAddTask, setShowAddTask] = useState(true)


  // Delete and add task functions live in this file and get passed as props
 
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
 

  //Delete Task
  const deleteTask = (id) => {
    //setTasks is how we deal with our state
 
    //Show all tasks such that task.id doesn't equal the one being deleted
    setTasks(tasks.filter((task)=>task.id!==id))
  }
 
  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id===id
    ? {...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ? (<Tasks tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}
 
export default App;
