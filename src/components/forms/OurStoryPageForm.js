import React from 'react';
import '../../styles/OurStoryForm.css';

const OurStoryForm = () => {
	return (
		<div className="ourstory-form">
			<div className="input-container">
				<input type="text" name="" id="story-name" placeholder="NAME" />
				<input type="email" name="" id="story-email" placeholder="EMAIL" />
			</div>
			<textarea
				name=""
				id="ourstory-msg"
				cols="30"
				rows="10"
				placeholder="MESSAGE"
			/>
			<button>Submit</button>
		</div>
	);
};

export default OurStoryForm;
