import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/auth";
//
// import Book from "./components/journal_image/Book";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import EntryPage from "./components/EntryPage"
import NewEntryPage from "./components/NewEntryPage"

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(authenticate()).then(() => setLoaded(true))
  }, [dispatch]);


  return (
    <BrowserRouter>
      <NavBar user={user} />
      {loaded && (
        <Switch>
          <Route path="/login_signup" exact={true}>
            <div className="book-container">
              <LoginForm />
              <SignUpForm />
            </div>
          </Route>
          <ProtectedRoute path="/journals/:id/new" exact={true}>
            <NewEntryPage />
          </ProtectedRoute>
          <ProtectedRoute path="/journals/:id" exact={true}>
            <EntryPage />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true}>
            <HomePage className="home-page__container" />
          </ProtectedRoute>
        </Switch>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
