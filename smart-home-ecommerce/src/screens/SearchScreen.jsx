import React from "react";
import { Flex } from "antd";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const SearchScreen = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key");
  const products = useSelector((state) => state.products);
  const contents = useSelector((state) => state.contents);
  console.log(products, contents, key);

  const renderList = () => {};

  return (
    <>
      <Flex
        style={{
          backgroundColor: mode ? "#001529" : "white",
        }}
        justify="center"
        align="center"
      >
        <div
          className="container"
          style={{
            width: "1200px",
            height: "100%",
            backgroundColor: mode ? "#001529" : "white",
            padding: "10px",
          }}
        ></div>
      </Flex>
    </>
  );
};

export default SearchScreen;
