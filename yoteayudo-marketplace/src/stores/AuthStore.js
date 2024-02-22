import React, { useEffect } from 'react';
import authStore from './AuthStore';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(authStore.isAuthenticated);

  useEffect(() => {
    const subscription = authStore.isAuthenticated$.subscribe((value) => {
      setIsAuthenticated(value);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <p>Welcome, {authStore.user.name}!</p>
          <button onClick={() => authStore.logout()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => authStore.login({ name: 'Maria' })}>
          Login
        </button>
      )
      (
        <button onClick={() => authStore.login({ password: '123' })}>
          Password
        </button>
      )}
    </div>
  );
}

export default App;