import { render, screen } from '@testing-library/react'
import UserProfile from './userProfile';

describe('UserProfile', () => {
    test('renders loading state initially', () => {
        render(<UserProfile userId={1} />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
});