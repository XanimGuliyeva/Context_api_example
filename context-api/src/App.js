import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./global/Global";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <GlobalProvider>
        <Navbar/>
        <Header />
      </GlobalProvider>
    </div>
  );
}

export default App;
