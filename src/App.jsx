import "./App.css";
import Category from "./components/Body/Category/Category";
import Mobile from "./components/Body/Category/Mobiles/Mobile";
import Offer from "./components/Body/Category/Offers/Offer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Category />
        <Mobile />
        <Offer />
      </div>
      <div></div>
    </>
  );
}

export default App;
