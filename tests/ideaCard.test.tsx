/* eslint-env jest */

import { describe, jest, it, expect } from '@jest/globals';
import "testing-library/jest-dom";

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import IdeaCard from '@/components/IdeaCard';


const mockIdea = {
  uuid: '123',
  title: 'Test Idea',
  description: 'Test Description',
  content: 'Test Content',
  createdTime: new Date(),
  updatedTime: new Date(),
};

describe('IdeaCard Component', () => {
  it('renders the IdeaCard component', () => {
    render(<IdeaCard idea={mockIdea} onDelete={() => {}} onSave={() => {}} />);
    // Add assertions based on your component's structure
    expect(screen.getByText('Test Idea')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('calls onDelete function when delete button is clicked', () => {
    const onDeleteMock = jest.fn();
    render(<IdeaCard idea={mockIdea} onDelete={onDeleteMock} onSave={() => {}} />);
    userEvent.click(screen.getByText('Delete'));
    expect(onDeleteMock).toHaveBeenCalled();
  });

  it('calls onSave function when save button is clicked', () => {
    const onSaveMock = jest.fn();
    render(<IdeaCard idea={mockIdea} onDelete={() => {}} onSave={onSaveMock} />);
    userEvent.click(screen.getByText('Save'));
    expect(onSaveMock).toHaveBeenCalled();
  });

  it('updates the character count when content is changed', () => {
    render(<IdeaCard idea={mockIdea} onDelete={() => {}} onSave={() => {}} />);
    const contentTextArea = screen.getByPlaceholderText('Enter your ideas here...');
    fireEvent.change(contentTextArea, { target: { value: 'New content' } });
    expect(screen.getByText('Remaining Characters: 11/150')).toBeInTheDocument();
  });

  it('submits the form when save button is clicked', () => {
    const onSaveMock = jest.fn();
    render(<IdeaCard idea={mockIdea} onDelete={() => {}} onSave={onSaveMock} />);
    userEvent.click(screen.getByText('Save'));
    expect(onSaveMock).toHaveBeenCalled();
  });
});
