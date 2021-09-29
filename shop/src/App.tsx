import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import SearchProvider from "./SearchContext";

function App() {
  return (
    <div>
      <SearchProvider>
        <Header />
        <Navigation />
        <Footer />
      </SearchProvider>
    </div>
  );
}
export default App;