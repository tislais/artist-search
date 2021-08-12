import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

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
  })

  it('displays a list of releases', async () => {
    render(
      <MemoryRouter initialEntries={['/Prince/070d193a-845c-479f-980e-bef15710653e']}>
        <App />
      </MemoryRouter>
    )

    return waitFor(async () => {
      const ul = await screen.findByRole('list')
      expect(ul).not.toBeEmptyDOMElement()
    }, 5000)
  });

  it('displays a list of recordings', async () => {
    render(
      <MemoryRouter initialEntries={['/Prince/070d193a-845c-479f-980e-bef15710653e/032c0dcf-32fb-48df-854c-c4ffdea82009']}>
        <App />
      </MemoryRouter>
    )
    
    return waitFor(async () => {
      const ul = await screen.findByRole('list')
      expect(ul).not.toBeEmptyDOMElement()
    }, 5000)
  });

  it('displays song lyrics', async () => {
    render(
      <MemoryRouter initialEntries={['/Prince/070d193a-845c-479f-980e-bef15710653e/032c0dcf-32fb-48df-854c-c4ffdea82009/Little%20Red%20Corvette/2eb5645c-1f40-4c2b-8453-e0a17343b133']}>
        <App />
      </MemoryRouter>
    )
    
    return waitFor(async () => {
      const lyrics = await screen.findByTestId('lyrics')
      expect(lyrics).not.toBeEmptyDOMElement()
    }, 5000)
  });

});
