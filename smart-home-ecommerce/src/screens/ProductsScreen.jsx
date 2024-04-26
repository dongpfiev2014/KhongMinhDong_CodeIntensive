import React from "react";
import { Flex, Row } from "antd";
import { useSelector } from "react-redux";

const ProductsScreen = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <>
      <Flex
        style={{
          backgroundColor: mode ? "#001529" : "white",
        }}
        justify="center"
        align="center"
      >
        <Row
          style={{
            width: "1400px",
            minHeight: "75vh",
            backgroundColor: mode ? "#001529" : "white",
          }}
        >
          Hello
        </Row>
      </Flex>
    </>
  );
};

export default ProductsScreen;
