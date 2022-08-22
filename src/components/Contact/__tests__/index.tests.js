import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact form component', () => {
	it('renders', () => {
		render(<ContactForm />);
	});

	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<ContactForm />);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe('Form text is correct', () => {
	it('matches expected text', () => {
		const { getByTestId } = render(<ContactForm />);
		expect(getByTestId('contactTitle')).toHaveTextContent('Contact Me');
	});

	it('matches expected button text', () => {
		const { getByTestId } = render(<ContactForm />);
		expect(getByTestId('contactButton')).toHaveTextContent('Submit');
	});
});
