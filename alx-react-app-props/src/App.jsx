import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';   // ✅ import context

function App() {
  // ✅ Define userData here
  const userData = { 
    name: "Alice", 
    age: 25, 
    bio: "Loves hiking and photography" 
  };

  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />

      {/* ✅ Wrap UserProfile inside UserContext.Provider */}
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
