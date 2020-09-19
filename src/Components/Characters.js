import React from "react";
import CharactersItem from "./CharactersItem";

function Characters({ items, isLoaded }) {
  return isLoaded ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item, index) => (
        <CharactersItem key={`${index}_${item.char_id}`} item={item} />
      ))}
    </section>
  );
}

export default Characters;
