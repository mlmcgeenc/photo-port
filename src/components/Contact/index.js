import React, { useState } from 'react';

function ContactForm() {
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const { name, email, message } = formState;

	function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
  }

  console.log(formState)

	return (
		<section>
			<h1>
				<form id='contact-form'>
					<div>
						<label htmlFor='name'>Name:</label>
						<input type='text' defaultValue={name} onChange={handleChange} name='name'></input>
					</div>
					<div>
						<label htmlFor='email'>Email address:</label>
						<input type='email' defaultValue={email} onChange={handleChange} name='email'></input>
					</div>
					<div>
						<label htmlFor='message'>Message:</label>
						<textarea name='message' defaultValue={message} onChange={handleChange}  rows='5' />
					</div>
					<button type='submit' onSubmit={handleSubmit}>Submit</button>
				</form>
			</h1>
		</section>
	);
}

export default ContactForm;
