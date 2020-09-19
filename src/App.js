import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Characters from "./Components/Characters";
import Search from "./Components/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [query, setQuery] = useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name${query}`
      );

      setItems(result.data);
      setIsLoaded(false);
    };
    fetchData();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Characters items={items} isLoaded={isLoaded} />
    </div>
  );
}

export default App;
