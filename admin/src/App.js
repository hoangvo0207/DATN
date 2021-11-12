import React, { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { AuthContext } from "./contexts/authContext/AuthContext";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import ListItem from "./pages/listItem/ListItem";
import Login from "./pages/login/Login";
import NewList from "./pages/newList/NewList";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {user ? <Redirect to='/' /> : <Login />}
        </Route>
        {user && (
          <React.Fragment>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/lists">
                <List />
              </Route>
              <Route path="/lists/:listId">
                <ListItem />
              </Route>
              <Route path="/newList">
                <NewList />
              </Route>
            </div>
          </React.Fragment>
        )}
      </Switch>
    </Router>
  );
}

export default App;
