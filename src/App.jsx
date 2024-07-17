import {
  Navbar,
  About,
  DownloadApp,
  Home,
  Platform,
  Footer
} from "./sections/index";

function App() {
  return (
    <div className="font-uber">
      <Navbar />
      <About />
      <Home />
      <Platform />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
