import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//nav bar
import NavBar from "./components/NavBar";

//footer
import Footer from "./components/Footer";

//pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
