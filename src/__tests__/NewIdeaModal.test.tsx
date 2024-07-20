import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewIdeaModal from '../components/NewIdeaModal';
import { describe, expect, test, vi } from 'vitest';

// Mock the Button component
vi.mock('../Button', () => ({
  __esModule: true,
  default: ({ children, ...props }: { children: React.ReactNode }) => (
    <button {...props}>{children}</button>
  )
}));

describe('NewIdeaModal Component', () => {
  const addIdeaMock = vi.fn();
  const closeModalMock = vi.fn();

  const renderComponent = (isOpen: boolean) => {
    return render(
      <NewIdeaModal
        isOpen={isOpen}
        addIdea={addIdeaMock}
        closeModal={closeModalMock}
      />
    );
  };

  test('renders the modal when open', () => {
    renderComponent(true);
    expect(screen.getByText('New Idea')).toBeInTheDocument();
  });

  test('does not render the modal when closed', () => {
    renderComponent(false);
    expect(screen.queryByText('New Idea')).not.toBeInTheDocument();
  });

  test('can open and close the modal', () => {
    renderComponent(true);
    fireEvent.click(screen.getByText('Close'));
    expect(closeModalMock).toHaveBeenCalled();
  });

  test('submits form with valid input', async () => {
    renderComponent(true);

    fireEvent.change(screen.getByPlaceholderText('Enter Title Here'), {
      target: { value: 'Test Title' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter Description'), {
      target: { value: 'Test Description' },
    });

    fireEvent.click(screen.getByText('Submit'));

  });
})

