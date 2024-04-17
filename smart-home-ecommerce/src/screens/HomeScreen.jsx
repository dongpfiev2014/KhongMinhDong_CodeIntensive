import React from "react";
import { Helmet } from "react-helmet";
import VideoLandingPage from "../components/LandingPage/VideoLandingPage";
import { Layout, Space } from "antd";
import MediaLandingPage from "../components/LandingPage/MediaLandingPage";

const HomeScreen = () => {
  return (
    <>
      <Layout className="bg-white">
        <Space direction="vertical" size="middle">
          <VideoLandingPage />
          <MediaLandingPage />
          <MediaLandingPage />
        </Space>
      </Layout>
      <Helmet>
        <title>Smart Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    </>
  );
};

export default HomeScreen;
