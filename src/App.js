import Header from './components/Header'
import Tasks from './components/Tasks'
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
  // Delete and add task functions live in this file and get passed as props


  //Delete Task
  const deleteTask = (id) => {
    //setTasks is how we deal with our state

    //Show all tasks such that task.id doesn't equal the one being deleted
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length>0 ? (<Tasks tasks={tasks} 
      onDelete={deleteTask}/>
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
