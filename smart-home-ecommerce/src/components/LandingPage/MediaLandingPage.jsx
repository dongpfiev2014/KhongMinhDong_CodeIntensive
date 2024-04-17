import React from "react";
import { Image, Space, Flex, Button } from "antd";

const MediaLandingPage = (props) => {
  const { src, title, content } = props;
  return (
    <>
      <div
        className="position-relative"
        style={{ height: "40vh", backgroundColor: "lightblue" }}
      >
        <Image src={src} />
        <div className="position-absolute top-0 start-50 translate-middle-x d-flex flex-column justify-content-center align-items-center text-white">
          <Space direction="vertical" align="center" size="middle">
            <h1 style={{ fontSize: "60px" }}>{title}</h1>
            <p style={{ fontSize: "20px" }}>{content}</p>
            <Flex gap="middle" align="center" justify="center">
              <Button shape="round" size="large">
                Learn More
              </Button>
              <Button shape="round" size="large" className="custom-button">
                Buy now
              </Button>
            </Flex>
          </Space>
        </div>
      </div>
    </>
  );
};

export default MediaLandingPage;
