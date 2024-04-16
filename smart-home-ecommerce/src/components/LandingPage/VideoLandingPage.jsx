import React from "react";
import smartHome from "../../assets/smartHome.mp4";
import { Space, Flex, Button } from "antd";
import { useNavigate } from "react-router-dom";

const VideoLandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="position-relative" style={{ height: "90vh" }}>
        <div className="overlay"></div>
        <video
          className="w-100 h-100"
          src={smartHome}
          autoPlay
          loop
          muted
          onClick={() => navigate("/livedemo")}
          style={{ cursor: "pointer" }}
        />
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

export default VideoLandingPage;
