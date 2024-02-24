import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Home from '@/app/page'; 
import Navbar from "@/components/Navbar";


test("tests the tester 2", () => {
    expect(1).toBe(1);
  });


  test('Deleting an idea removes it from the state and localStorage', () => {
    // Arrange
    const component = render(<Home />);
    
    // Act
    fireEvent.click(screen.getByText('Delete All'));
    
    // Assert
    expect(component.queryByTestId('idea-card')).toBeNull();
    expect(localStorage.getItem('ideas')).toBeNull();
  });

describe("Testing the 'Navbar' component", () => {
    test("Render Setup Check - 'Navbar'", () => {

      // Arrange
      render(<Navbar onAddNewCard={function (): void {
          throw new Error("Function not implemented.");
      } } />);

      // Act
      const NavbarTest = screen.getByText("Th!nkPad");
  
      // Assert
      expect(NavbarTest).toBeInTheDocument();
    });
  });

  describe('Navbar Component', () => {
    test('Render Setup Check - Navbar', () => {
      // Arrange
      const onAddNewCardMock = jest.fn();
  
      // Act
      const { getByText, getByRole } = render(
        <Navbar onAddNewCard={onAddNewCardMock} />
      );
  
      // Assert
      expect(getByText('Th!nkPad')).toBeInTheDocument();
      expect(getByRole('button')).toBeInTheDocument();
    });
  
    test('Clicking the button triggers onAddNewCard callback', () => {
      // Arrange
      const onAddNewCardMock = jest.fn();
      const { getByRole } = render(
        <Navbar onAddNewCard={onAddNewCardMock} />
      );
  
      // Act
      fireEvent.click(getByRole('button'));
  
      // Assert
      expect(onAddNewCardMock).toHaveBeenCalledTimes(1);
    });
  });

  
