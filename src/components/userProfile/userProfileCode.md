Bug 1: Not using interface for name and bio.
Suggestion: We can create 'interface' for name and bio to shape the object, to make it reusable and to make its type safe.

interface UserData = {
    name: string;
    bio: string;
}

Bug 2: Passing 'any' as a datatype.
Suggestion: Instead of passing 'any' as a type we can pass 'UserData' as a type with null check.

const [user, setUser] = useState<UserData | null>(null);

Bug 3: Using then and catch.
Suggestion: Instead of using then and catch we can use async await.

const getUser = async () => {
    try {
        setLoading(true)
        const response = await fetch(`https://api.example.com/user/${userId}`);
        const data: UserData = await response.json();
        setUser(data);
    } catch (error) {
            setError('Error fetching user data');
    }
}

Bug 4: Passing empty dependency.
Suggestion: Here instead of passing empty dependency we can pass userId, so even if userId changes dynamically we will not get the old data.

[] -> [userId]

Bug 5: Error will only log in console so even if user will get error it will show Loading on the screen.
Suggestion: We can add error state it will help us to show error on UI. We can add style accordingly for error.

const [error, setError] = useState(null);
if (error) return <p>{error}</p>

Bug 6: Loading condition.
Suggestion: For loading also we can set the state as we already set the state for error so it will be good.

const [isLoading, setLoading] = useState(true);
if (isLoading) return <p>Loading...</p>