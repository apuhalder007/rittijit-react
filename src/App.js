import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./userContext";
import PrivateRoute from "./PrivateRoute";
import Header from './components/header';
import Footer from './components/footer';
import Book from './components/pages/book';
import Login from "./components/pages/login";
import Profile from "./components/pages/profile";
import BookByCategoryId from './components/pages/bookByCategoryId';
import AddBooks from "./components/pages/dashboard/books/add";
import './App.css';

import DefaultLayout from "./layouts/default";
import EmptyLayout from "./layouts/Empty";

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          
          <Route element={<EmptyLayout/>}>
            <Route path="/login" element={<Login/>} />
          </Route>
          <Route element={<DefaultLayout/>}>
          <Route path="/" element={<Book/>} /> 
          <Route path="/books/category/:categoryId" element={<BookByCategoryId/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route element={<PrivateRoute/>} >
            <Route path="/dashboard">
              <Route path="" element={<div>Dashboard</div>} />
              <Route path="books">
                <Route path="" element={<div>Books</div>} />
                <Route path="add" element={<AddBooks/>} />

              </Route>
            </Route>
            <Route path="profile" element={<div>This User Profile </div>} />
          </Route>

          <Route path="*" element={<div>404 Not Found</div>} /> 
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
