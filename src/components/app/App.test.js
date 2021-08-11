import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { list } from 'purgecss/node_modules/postcss';

describe('app component', () => {
  it('displays a bunch of artists', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    const input = screen.getByPlaceholderText('Search an Artist')
    fireEvent.change(input, { target: { value: 'dj' } })
    expect(input.value).toBe('dj')

    // const onSubmit = jest.fn();
    // const form = screen.getByTestId('form')
    // fireEvent.submit(form)
    // expect(onSubmit).toHaveBeenCalledTimes(1)

    const button = screen.getByTestId('form-button')
    const ul = await screen.findByRole('list')
    console.log(ul)
    userEvent.click(button)
    expect(ul).not.toBeEmptyDOMElement()
  })
})

