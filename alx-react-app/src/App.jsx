import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div>
      <Header />
      <MainContent />

        <UserProfile 
        name="Jonathan Ishimwe" 
        age="25" 
        bio="Enjoys coding and exploring new cities" 
      />

      <Footer />
    </div>
  );
}

export default App;
