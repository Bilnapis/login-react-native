import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./navigation/Navigation";

export default function App() {
    return (
        <AuthProvider>
            <Navigation />
        </AuthProvider>
    );
}
