import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { ThemeProvider } from "./context/themeContext";
import PrivateRoute from "./PrivateRoute";
import Header from "./components/header";
import Footer from "./components/footer";
import Book from "./components/pages/book";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import Profile from "./components/pages/profile";
import BookByCategoryId from "./components/pages/bookByCategoryId";
import AddBooks from "./components/dashboard/book/add";
import "./App.css";

import DefaultLayout from "./layouts/default";
import EmptyLayout from "./layouts/Empty";
import DashboardLayout from "./layouts/dashboard";

// Dashboard Component

import Dashboard from "./components/dashboard/index";
import BookList from "./components/dashboard/book/list";
import EditBook from "./components/dashboard/book/edit";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<Book />} />
                <Route
                  path="/books/category/:categoryId"
                  element={<BookByCategoryId />}
                />
                <Route path="/profile" element={<Profile />} />
                {/* <Route element={<PrivateRoute/>} >
              <Route path="/dashboard">
                <Route path="" element={<div>Dashboard</div>} />
                <Route path="books">
                  <Route path="" element={<div>Books</div>} />
                  <Route path="add" element={<AddBooks/>} />

                </Route>
              </Route>
              <Route path="profile" element={<div>This User Profile </div>} />
            </Route> */}

                <Route path="*" element={<div>404 Not Found</div>} />
              </Route>

              <Route path="/" element={<EmptyLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route element={<DashboardLayout />}>
                  <Route path="/dashboard">
                    <Route index element={<Dashboard />} />
                    <Route path="books">
                      <Route path="" element={<BookList></BookList>} />
                      <Route path="add" element={<AddBooks />} />
                      <Route path="edit/:bookId" element={<EditBook />} />
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
