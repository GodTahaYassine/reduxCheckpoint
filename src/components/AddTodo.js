import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import "./addtodo.css"
const AddTodo = (props) => {
	const [input, setInput] = useState(undefined);
	const dispatch = useDispatch();

	return (
		<div style={{marginTop: '20px'}} >
			<input onBlur={(e) => setInput(e.target.value)} className="inp"/>
			<button
				className="add-todo button button1"
				onClick={() => dispatch(addTodo(input))}>
				Add Todo
			</button>
		</div>
	);
};

export default AddTodo;
