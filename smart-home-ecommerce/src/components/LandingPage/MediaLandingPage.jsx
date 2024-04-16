import React from "react";
import { Image, Space, Flex, Button } from "antd";

const MediaLandingPage = () => {
  return (
    <>
      <div className="position-relative" style={{ height: "40vh" }}>
        <Image src="" />
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5 d-flex flex-column justify-content-center align-items-center text-white">
          <Space direction="vertical" align="center" size="middle">
            <h1 style={{ fontSize: "60px" }}>Welcome</h1>
            <p style={{ fontSize: "20px" }}>To my site.</p>
            <Flex gap="middle" align="center" justify="center">
              <Button shape="round" size="large">
                Learn More
              </Button>
              <Button shape="round" size="large" className="custom-button">
                Buy
              </Button>
            </Flex>
          </Space>
        </div>
      </div>
    </>
  );
};

export default MediaLandingPage;
