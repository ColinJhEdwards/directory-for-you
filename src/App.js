import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <UserList />
    </div>
  );
}

export default App;
