import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Nav from '..';
import { toHaveTextContent } from '@testing-library/jest-dom/dist/matchers';

afterEach(cleanup);

describe('Nav component', () => {
	// baseline test
	it('renders', () => {
		render(<Nav />);
	});

	// snapshot test
	it('matches snapshot DOM node structure', () => {
		// renders Nav
		const { asFragment } = render(<Nav />);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe('camera emoji is visible', () => {
	it('inserts emoji into h2', () => {
    const { getByLabelText } = render(<Nav />)
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', ()=> {
  it('inserts text into the links', ()=> {
    const { getByTestId } = render(<Nav />)
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!')
    expect(getByTestId('about')).toHaveTextContent('About me')
  })
})
