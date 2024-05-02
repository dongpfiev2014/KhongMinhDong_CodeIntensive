import { Flex, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const CheckoutScreen = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const auth = useSelector((state) => state.authen);
  return (
    <>
      {auth && auth.currentUser && (
        <Flex
          style={{
            backgroundColor: mode ? "#001529" : "white",
            padding: "10px",
          }}
          justify="center"
          align="center"
        >
          <Row
            style={{
              width: "1200px",
              minHeight: "80vh",
              backgroundColor: mode ? "#001529" : "white",
            }}
          >
            23
          </Row>
        </Flex>
      )}
    </>
  );
};

export default CheckoutScreen;
