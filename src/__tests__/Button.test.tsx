import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button'; 
import { describe, expect, test, vi } from 'vitest';

describe('Button component', () => {
    test('renders a button with the provided children', () => {
        render(<Button type="button">Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    test('applies the correct classes based on props', () => {
        const { container } = render(<Button type="button" className="custom-class" white={true} px="px-10">Click me</Button>);
        const button = container.querySelector('button');
        expect(button).toHaveClass('button', 'relative', 'inline-flex', 'items-center', 'justify-center', 'h-11', 'transition-colors', 'hover:text-color-1', 'px-10', 'text-n-8', 'custom-class');
    });

    test('calls the onClick handler when clicked', () => {
        const handleClick = vi.fn();
        render(<Button type="button" onClick={handleClick}>Click me</Button>);
        fireEvent.click(screen.getByText('Click me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('renders an anchor tag when href is provided', () => {
        render(<Button type="link" href="https://example.com">Visit me</Button>);
        const link = screen.getByText('Visit me').closest('a');
        expect(link).toHaveAttribute('href', 'https://example.com');
    });

    test('renders a button tag when href is not provided', () => {
        render(<Button type="button">Click me</Button>);
        const button = screen.getByText('Click me').closest('button');
        expect(button).toBeInTheDocument();
    });
});
