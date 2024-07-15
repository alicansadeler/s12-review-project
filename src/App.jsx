import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import AddComment from "./components/AddComment";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Comments from "./pages/Comments";

function App() {
  return (
    <>
      <div className="three-column-layout flex w-3/4 m-auto h-screen">
        <div className="left-sidebar w-1/4 bg-slate-100">
          <p>left</p>
        </div>
        <main className="w-2/4">
          <Route path="/comments/add">
            <AddComment />
          </Route>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/comments">
              <Comments />
            </Route>
          </Switch>
        </main>
        <div className="right-sidebar w-1/4 bg-slate-100">
          <p>right</p>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 h-12">
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/comments">Comments</Link>
          <Link to="/comments/add">Add Comments</Link>
        </nav>
      </footer>
    </>
  );
}

export default App;
