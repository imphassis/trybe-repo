import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import { About, Contact, Projects, Home } from './pages/Zindex';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

describe('Testing my portfolio page', () => {
  it('should render the App component', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Welcome to my Portfolio/i);
    expect(home).toBeInTheDocument();
  });

  it('should render the about page', async () => {
    const { getByText, history } = renderWithRouter(<App />);
    const aboutButton = getByText(/About/);
    userEvent.click(aboutButton);
    // const pathname = history.location.pathname;
    // expect(pathname).toBe('/about');
    expect(getByText(/Lorem ipsum dolor/)).toBeInTheDocument();
  });

  it('Testing About page elements', () => {
    const { getByText, getByAltText } = renderWithRouter(<About />);
    expect(getByText(/PH Assis/)).toBeInTheDocument();
    const img = getByAltText(/PH at Domingos Martins/i);
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('http://localhost/profile.jpg');
  });

  it('should render the NotFound page', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/anypagethatdontexist');
    const NoMatch = /Error 404, Page not found/;
    expect(getByText(NoMatch)).toBeInTheDocument();
  });

  it('Trying to render the aboutPage component alone', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutTitle = getByText(/About me/i);
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Checking if the github button redirects', async () => {
    const { getByRole } = renderWithRouter(<About />);
    const gitButton = getByRole('link');
    userEvent.click(gitButton);
    await expect(screen.getByText('imphassis')).toBeInTheDocument();
  });
});
