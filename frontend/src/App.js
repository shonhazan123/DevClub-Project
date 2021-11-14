import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Admin from "layouts/Admin.js";

export default function App() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/example")
      .then(({ data }) => console.log(data))
      .catch(console.log);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}
