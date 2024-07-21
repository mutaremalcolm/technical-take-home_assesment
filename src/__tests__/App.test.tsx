import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { beforeEach, describe, expect, test, vi } from 'vitest';

// Mock localStorage
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => store[key] = value.toString(),
    removeItem: (key: string) => delete store[key],
    clear: () => store = {}
  };
})();

Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

// Mock toast notifications
vi.mock('react-hot-toast', () => ({
  success: vi.fn(),
}));

// Mock child components
vi.mock('../components/Header', () => ({
  __esModule: true,
  default: ({ openModal }: { openModal: () => void }) => (
    <div>
      <button onClick={openModal}>Open Modal</button>
    </div>
  )
}));

vi.mock('../components/IdeaCard', () => ({
  __esModule: true,
  default: ({ id, title, description }: { id: string; title: string; description: string }) => (
    <div data-testid="idea-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}));

vi.mock('../components/NewIdeaModal', () => ({
  __esModule: true,
  default: ({ isOpen, addIdea, closeModal }: { isOpen: boolean; addIdea: (idea: { id: string; title: string; description: string }) => void; closeModal: () => void }) => (
    isOpen ? <div data-testid="modal"><button onClick={() => addIdea({ id: '3', title: 'New Idea', description: 'New Description' })}>Add Idea</button><button onClick={closeModal}>Close</button></div> : null
  )
}));

describe('App Component', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.localStorage.setItem('ideas', JSON.stringify([
      { id: '1', title: 'First Idea', description: 'First Description' },
      { id: '2', title: 'Second Idea', description: 'Second Description' },
    ]));
  });

  test('renders ideas from localStorage', () => {
    render(<App />);
    expect(screen.getByText('First Idea')).toBeInTheDocument();
    expect(screen.getByText('Second Idea')).toBeInTheDocument();
  });

  test('can open and close the modal', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});
