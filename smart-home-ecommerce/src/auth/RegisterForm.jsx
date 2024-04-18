import React from "react";
import { Button, Form, Input, Space, Image } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../styles/GlobalStyles.css";

const RegisterForm = () => {
  const onFinish = (values) => {
    console.log("Values", values);
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh", backgroundColor: "#eceff1" }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          border: "1px solid #d9d9d9",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
        }}
      >
        <Form
          layout="vertical"
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item className="d-flex justify-content-center">
            <Image
              src="/vecteezy_smart-home-logo-icon-template_20040705.svg"
              width={120}
              preview={false}
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              allowClear
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your Confirm Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm Password"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="E-mail Address"
              allowClear
              size="large"
              type="email"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-100">
              Sign Up
            </Button>
          </Form.Item>

          <Form.Item className="d-flex justify-content-center align-items-center text-secondary">
            <span>Have an acount? </span>
            <Link to={"/accounts/login"}>Sign In</Link>
          </Form.Item>
          <Form.Item className="d-flex justify-content-center align-items-center text-secondary">
            <span>or you can sign in with </span>
            <Space>
              <GoogleOutlined style={{ fontSize: "20px" }} />
              <FacebookOutlined style={{ fontSize: "20px" }} />
              <LinkedinOutlined style={{ fontSize: "20px" }} />
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
