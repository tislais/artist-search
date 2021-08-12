import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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

    // const button = screen.getByTestId('form-button')
    // const ul = await screen.findByRole('list')
    // userEvent.click(button)
    // expect(ul).not.toBeEmptyDOMElement()
  })

  it('displays a list of releases', async() => {
    render(
      <MemoryRouter initialEntries={['/070d193a-845c-479f-980e-bef15710653e']}>
        <App />
      </MemoryRouter>
    )

    return waitFor(async () => {
      const ul = await screen.findByRole('list')
      expect(ul).not.toBeEmptyDOMElement()
    }, 5000)
  })
})

