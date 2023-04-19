import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Book from './components/pages/book';
import BookByCategoryId from './components/pages/bookByCategoryId';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/about">
            {/* your about component */}
          </Route>
          <Route path="/books/category/:categoryId" element={<BookByCategoryId/>}/>
          <Route path="/" element={<Book/>} /> 
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
