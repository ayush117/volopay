import "./styles.css";
import All from "./Cards/All";
import Blocked from "./Cards/Blocked";
import Header from "./Virtual_Card/Header";
import Tabs from "./Virtual_Card/Tabs";
import Cards from "./Cards/Ex";
import Search from "./Virtual_Card/Search";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      {/* <All /> */}
      <Search />
      {/* <div className="row mt-2 d-flex justify-content-around align-items-center">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div> */}
      {/* <Cards /> */}
      {/* <Blocked /> */}
    </div>
  );
}
