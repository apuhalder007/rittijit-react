import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./userContext";
import Header from './components/header';
import Footer from './components/footer';
import Book from './components/pages/book';
import Login from "./components/pages/login";
import Profile from "./components/pages/profile";
import BookByCategoryId from './components/pages/bookByCategoryId';
import './App.css';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/about" element={<Profile/>} >
            {/* your about component */}
          </Route>
          <Route path="/" element={<Book/>} /> 
          <Route path="/books/category/:categoryId" element={<BookByCategoryId/>}/>
          <Route path="/login" element={<Login/>} /> 
          <Route path="/profile" element={<Profile/>} /> 
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
