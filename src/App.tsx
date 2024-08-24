import { useAuth } from '../lib/components/context/AuthContext'

function App() {
    const { authState: { user } } = useAuth();

    return (
        <>
            User Data: {JSON.stringify(user)}
        </>
    )
}

export default App
