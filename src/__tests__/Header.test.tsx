import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header'; 
import { describe, test, expect } from 'vitest';
import { vi } from 'vitest'

describe('Header Component', () => {
  const openModalMock = vi.fn();

  const renderComponent = (initialRoute = '/') => {
    return render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <Routes>
          <Route path="*" element={<Header openModal={openModalMock} handleSort={undefined} />} />
        </Routes>
      </MemoryRouter>
    );
  };

  test('renders the header with ClearScore text', () => {
    renderComponent();
    expect(screen.getByText('ClearScore')).toBeInTheDocument();
  });

  test('calls openModal when New Idea button is clicked', () => {
    renderComponent();
    fireEvent.click(screen.getByText('New Idea'));
    expect(openModalMock).toHaveBeenCalled();
  });
});
