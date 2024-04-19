import React from "react";
import { Helmet } from "react-helmet";
import VideoLandingPage from "../components/LandingPage/VideoLandingPage";
import { Layout, Space } from "antd";
import MediaLandingPage from "../components/LandingPage/MediaLandingPage";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <>
      <Layout style={{ backgroundColor: mode ? "#001529" : "white" }}>
        <Space direction="vertical" size="large">
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
