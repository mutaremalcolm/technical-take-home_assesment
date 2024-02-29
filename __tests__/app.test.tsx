import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { v4 as uuidv4 } from 'uuid';
import Navbar from "@/components/Navbar";


test("tests the tester 2", () => {
    expect(1).toBe(1);
  });

  const generateUUID = () => {
    return uuidv4();
  };

  describe('generateUUID', () => {
    test('should generate a valid UUID', () => {
      // Act
      const generatedUUID = generateUUID();
  
      // Assert
      expect(typeof generatedUUID).toBe('string');
      expect(generatedUUID.length).toBe(36);
      expect(generatedUUID).toMatch(
        /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i
      );
    });
  
    test('should generate a unique UUID each time', () => {
      // Act
      const uuid1 = generateUUID();
      const uuid2 = generateUUID();
  
      // Assert
      expect(uuid1).not.toBe(uuid2);
    });
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

  
  

  

  
