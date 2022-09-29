import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/login"></Route>
        <Route path="/register"></Route>
        <Route path="/home"></Route>
        <Route path="/"></Route>
        <Route path="/admin"></Route>
        <Route path="/seller"></Route>
        <Route path="/accountant"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
