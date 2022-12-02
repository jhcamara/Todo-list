import React, { useState } from "react";
import { Task } from "./Task";

//create your first component
const Home = () => {

	const [taskName, setTaskName] = useState("");
	const [taskList, setTaskList] = useState([]);
	const addTask = () => {
		setTaskList([...taskList, taskName]);
		setTaskName('');
	}

	return (
		<div className="text-center ">
			{/* <h1>Todo List</h1> */}
			<input type="text" id="task" onChange={(e) => {setTaskName(e.target.value)}}/>
			<button onClick={addTask}>Do it!</button>

			{taskList.map((task)=> {
				return <Task taskName={task.taskName} />
			}) 
		}

		</div>
	);
};

export default Home;
