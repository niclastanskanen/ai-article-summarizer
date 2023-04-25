import Hero from './components/Hero';
import Demo from './components/Demo';

import './App.css';
import { ClerkProvider } from '@clerk/clerk-react';
import NavBar from './components/NavBar';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <NavBar />
        <Hero />
        <Demo />
      </div>
    </main>
    </ClerkProvider>
  );
};

export default App;
