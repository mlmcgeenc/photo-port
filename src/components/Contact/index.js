import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
	const [errorMessage, setErrorMessage] = useState('');
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			console.log(isValid);
			if (!isValid) {
				setErrorMessage('Please provide a valid email');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
		console.log('errorMessage:', errorMessage);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	console.log(formState);

	return (
		<section>
			<h1 data-testid='contactTitle'>Contact Me</h1>
			<form id='contact-form'>
				<div>
					<label htmlFor='name'>Name:</label>
					<input type='text' defaultValue={name} onBlur={handleChange} name='name'></input>
				</div>
				<div>
					<label htmlFor='email'>Email address:</label>
					<input type='email' defaultValue={email} onBlur={handleChange} name='email'></input>
				</div>
				<div>
					<label htmlFor='message'>Message:</label>
					<textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
				</div>
				{errorMessage && (
					<div>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}
				<button data-testid='contactButton' type='submit' onSubmit={handleSubmit}>
					Submit
				</button>
			</form>
		</section>
	);
}

export default ContactForm;
