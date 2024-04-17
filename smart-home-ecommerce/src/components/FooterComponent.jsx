import React from "react";
import {
  Button,
  Divider,
  Flex,
  Layout,
  Space,
  Card,
  Avatar,
  Row,
  Col,
} from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <Flex justify="center" align="center" vertical>
          <Flex justify="center" align="center" gap={200}>
            <Card
              style={{
                border: "none",
                backgroundColor: "#f5f5f5",
                width: "400px",
              }}
            >
              <Card.Meta
                avatar={
                  <Avatar src="vecteezy_smart-home-logo-icon-template_20040705.svg" />
                }
                title="Smart Home"
                description="AI-based smart home management software to increase your home security with smart devices integrated."
              />
            </Card>
            <Row gutter={[14, 14]} style={{ width: "350px" }}>
              <Col span={8}>
                <Button type="text" onClick={() => navigate("/")}>
                  Shop
                </Button>
              </Col>
              <Col span={8}>
                <Button type="text" onClick={() => navigate("/")}>
                  Our Story
                </Button>
              </Col>
              <Col span={8}>
                <Button type="text" onClick={() => navigate("/")}>
                  Live Demo
                </Button>
              </Col>
              <Col span={8}>
                <Button type="text" onClick={() => navigate("/")}>
                  Our Projects
                </Button>
              </Col>
              <Col span={8}>
                <Button type="text" onClick={() => navigate("/")}>
                  News
                </Button>
              </Col>
              <Col span={8}>
                <Button type="text" onClick={() => navigate("/")}>
                  Documentation
                </Button>
              </Col>
              <Col span={8}>
                <Button type="text" onClick={() => navigate("/")}>
                  Service
                </Button>
              </Col>
              <Col span={8}>
                <Button type="text" onClick={() => navigate("/")}>
                  Privacy Policy
                </Button>
              </Col>
              <Col span={8}>
                <Button type="text" onClick={() => navigate("/")}>
                  Terms & Conditions
                </Button>
              </Col>
            </Row>
          </Flex>
          <Divider orientation="center" />
          <Flex align="center" gap={350}>
            <span>Copyright © 2024. All right reserved</span>
            <Space size="small">
              <Button type="link" icon={<InstagramOutlined />} size="middle" />
              <Button type="link" icon={<FacebookOutlined />} size="middle" />
              <Button type="link" icon={<TwitterOutlined />} size="middle" />
              <Button type="link" icon={<YoutubeOutlined />} size="middle" />
            </Space>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
};

export default FooterComponent;
