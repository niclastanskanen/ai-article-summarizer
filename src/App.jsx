import Hero from './components/Hero';
import Demo from './components/Demo';

import './App.css';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <SignedIn>
            <NavBar />
            <Hero />
            <Demo />
          </SignedIn>
          <SignedOut>
            <NavBar />
            <Landing />
          </SignedOut>
        </div>
      </main>
    </ClerkProvider>
  );
};

export default App;
