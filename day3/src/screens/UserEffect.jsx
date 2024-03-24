import React, { useEffect, useState } from "react";
import { List, Space, Input } from "antd";
import { films } from "../data/films";

const { Search } = Input;

const UserEffect = () => {
  const [data, setData] = useState(films);
  const [searchKey, setSearchKey] = useState();
  const [yearOfFilms, setYearOfFilms] = useState();
  const [yearSelected, setYearSelected] = useState();
  useEffect(() => {});

  const handleSearch = () => {};
  return (
    <div>
      <Search
        placeholder="Search"
        allowClear
        value={searchKey}
        onPressEnter={handleSearch}
        onChange={(val) => setSearchKey(val.target.value)}
        onSearch={handleSearch}
        size="large"
      />
      <Space />
      <List />
    </div>
  );
};

export default UserEffect;
