import React from "react";
import { Button, Checkbox, Form, Input, Space, Image } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../styles/GlobalStyles.css";

const LoginForm = () => {
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
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link style={{ float: "right" }} to={""}>
              Forgot password
            </Link>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-100">
              Log in
            </Button>
            <Link
              to={"/accounts/signup"}
              style={{ float: "right", marginLeft: "5px" }}
            >
              Register now!
            </Link>
            <span style={{ float: "right" }}>or</span>
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

export default LoginForm;
