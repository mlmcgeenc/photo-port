import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/extended-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
	// First Test
	it('renders', () => {
		render(<About />);
	});

	// Second Test
	it('matches snapshot DOM node structure', () => {
		// render About
		const { asFragment } = render(<About />);
		expect(asFragment()).toMatchSnapshot();
	});
});
