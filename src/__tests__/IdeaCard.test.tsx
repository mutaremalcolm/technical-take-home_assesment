import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import IdeaCard from '../components/IdeaCard';
import { describe, expect, test, vi } from 'vitest';

// Mock the Trash icon
vi.mock('lucide-react', () => ({
  Trash: (props: any) => <svg {...props}>Trash Icon</svg>,
}));

describe('IdeaCard Component', () => {
  const deleteIdeaMock = vi.fn();

  const renderComponent = () => {
    return render(
      <IdeaCard
        id="1"
        title="Test Title"
        description="Test Description"
        deleteIdea={deleteIdeaMock}
      />
    );
  };

  test('renders the idea card with title and description', () => {
    renderComponent();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('allows editing the title', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Test Title'));
    const input = screen.getByDisplayValue('Test Title');
    fireEvent.change(input, { target: { value: 'New Title' } });
    fireEvent.blur(input);
    expect(screen.getByText('New Title')).toBeInTheDocument();
  });

  test('allows editing the description', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Test Description'));
    const textarea = screen.getByDisplayValue('Test Description');
    fireEvent.change(textarea, { target: { value: 'New Description' } });
    fireEvent.blur(textarea);
    expect(screen.getByText('New Description')).toBeInTheDocument();
  });

  test('shows character count for description', () => {
    renderComponent();
    expect(screen.getByText('Character Count: 16/140')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Test Description'));
    const textarea = screen.getByDisplayValue('Test Description');
    fireEvent.change(textarea, { target: { value: 'New Description' } });
    expect(screen.getByText('Character Count: 15/140')).toBeInTheDocument();
  });

  test('calls deleteIdea function on delete click', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Trash Icon'));
    expect(deleteIdeaMock).toHaveBeenCalledWith('1');
  });
});
