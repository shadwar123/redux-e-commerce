import './App.css';
import NavBar from "./components/e-commerce/navbar/NavBar";
import ProductList from "./components/e-commerce/productList/ProductList";

import CreateNotes from './components/notes/CreateNotes';
import ListNotes from './components/notes/ListNotes';
// import Child1 from './components/Child1';
// import Child2 from './components/Child2';

function App() {
  return (
    <div className="App">
      {/* <p>Hello1</p> */}
        {/* <Child1 />
        <Child2 /> */}
        {/* <CreateNotes />
        <ListNotes /> */}
        <NavBar />
        <ProductList />
    </div>
  );
}

export default App;
