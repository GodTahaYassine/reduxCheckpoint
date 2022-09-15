import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function App() {
	return (
		<div >
			<div style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-around',backgroundColor: '#21325E'}}>
				<h1 style={{color: '#F1D00A'}}>Todo List</h1>
				<AddTodo />
			</div>
			<div style={{display: 'flex', flexDirection: 'column' ,justifyContent: 'space-around',alignItems: 'center'}}>
				<VisibilityFilters />
				<TodoList />
			</div>
		</div>
	);
}
