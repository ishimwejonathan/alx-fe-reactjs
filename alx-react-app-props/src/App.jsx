import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import UserContext from "./UserContext";

function App() {
  const userData = {
    name: "Alice",
    age: "25",
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
