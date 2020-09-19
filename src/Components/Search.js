import React, { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");

  const handlerChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => handlerChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
}

export default Search;
