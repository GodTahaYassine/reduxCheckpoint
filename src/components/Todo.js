import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
// import { getTodoById } from "../redux/selectors";
import { toggleTodo, editTodo } from "../redux/actions";

const Todo = ({ todo }) => {
	const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(todo.content);
	return (
		<li className="todo-item">
			<span
                onClick={() => setIsEditing(!isEditing)}
				className={cx(
					"todo-item__text",
					todo && todo.completed && "todo-item__text--completed"
				)}>
                { todo.content }
			</span>{" "}
			<button
				className="todo-toggle"
				onClick={() => dispatch(toggleTodo(todo.id))}>
				{todo && todo.completed
					? "Mark as incomplete"
					: "Mark as completed"}
			</button>
            {!isEditing && <button onClick={() => setIsEditing(!isEditing)}>Edit</button>}
            {isEditing && (
                <>
                <input
                    type="text"
                    defaultValue={todo.content}
                    onChange={(e) => setNewContent(e.target.value)}
                />
                <button onClick={() => {
                    dispatch(editTodo(todo.id, newContent)); //! doesn't want to work for some reason, ask instructor
                    console.log("newContent:" + newContent);
                    console.log("todo.content:" + todo.content);
                    setIsEditing(!isEditing);
                }}>Save</button>
                </>   
            )}

		</li>
	);
};

export default Todo;
