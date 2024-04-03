import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  return (
    <div>
      <br />
      <br />
      <p> Search: {q}</p>
      <br />
      <br />
    </div>
  );
};

export default Search;
