Bug 1: Its only checking initial loading state. We need to check after loading proper user data is coming or not.
Suggestions:

a. We can add test case for success by checking data properly fetched or not after initial loading.
        render(<UserProfile userId={1} name={'Tejas'} bio={'Developer'}/>);
        expect(screen.getByText('Tejas')).toBeInTheDocument();
        expect(screen.getByText('Developer')).toBeInTheDocument();

b. We can add test case to check if user id changes it will fetch correct juser data or not
        render(<UserProfile userId={1} name={'Tejas'} bio={'Developer'}/>);
        expect(screen.getByText('Tejas')).toBeInTheDocument();
        expect(screen.getByText('Developer')).toBeInTheDocument();
        Change the userId
        render(<UserProfile userId={2} name={'Karen'} bio={'QA'}/>);
        expect(screen.getByText('Karen')).toBeInTheDocument();
        expect(screen.getByText('QA')).toBeInTheDocument();

c. We can add test case for error state
        render(<UserProfile userId={101} />);
        expect(screen.findByText(/error/i)).toBeInTheDocument();