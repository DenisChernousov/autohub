import './App.css';
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
           <div className="content">
            <Header />
            <Info />
            <Contacts />
           </div>
            <Footer />
        </div>
    );
}

export default App;
