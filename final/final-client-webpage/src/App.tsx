import AppRouter from "./components/router/Router";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/nav/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main id="main-content" role="main" className="flex-grow">
        <NavBar />
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
