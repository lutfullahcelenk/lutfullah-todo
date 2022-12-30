import React from "react";
import "./style.css";

const Header = () => {
	return (
		<div className='header'>
			<h1 className='todo-text'>Lutfullah Todo</h1>

			<div className='add-todo'>
				<input placeholder='Add a new Lutfullah todo...' />
				<button type='button' className='add-button'>
					Add
				</button>
			</div>
		</div>
	);
};

export default Header;
