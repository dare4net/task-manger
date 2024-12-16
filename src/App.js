import React, { useState } from 'react';
//import { addTask, getTasks, deleteTask } from './firebaseFunctions'; // Assuming you put the functions in a separate file
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

async function addTask(taskName) {
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
            taskName: taskName,
            completed: false,
        });
        console.log("Task added with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding task: ", e);
    }
}

async function getTasks() {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}

/*async function deleteTask(taskId) {
    await deleteDoc(doc(db, "tasks", taskId));
    console.log("Task deleted: ", taskId);
}*/





function App() {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Enter a task" 
            />
            <button onClick={handleAddTask}>Add Task</button>
            <button onClick={getTasks}>View Tasks</button>
        </div>
    );
}

export default App;
