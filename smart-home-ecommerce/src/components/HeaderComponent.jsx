import React, { useState } from "react";
import {
  Menu,
  Image,
  Input,
  Layout,
  Space,
  Flex,
  Switch,
  Dropdown,
  Button,
  Badge,
  Card,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { PiShoppingCartLight } from "react-icons/pi";

const items = [
  {
    label: "Giới thiệu",
    key: "about",
  },
  {
    label: "Nhà Thông Minh",
    key: "features",
    children: [
      {
        type: "Villa",
        label: "Villa, Căn Hộ",
        children: [
          {
            label: "Giải pháp chiếu sáng",
            key: "villa-1",
          },
          {
            label: "Giải pháp an ninh, báo động",
            key: "villa-2",
          },
          {
            label: "Giải pháp camera giám sát",
            key: "villa-3",
          },
          {
            label: "Giải pháp chuông hình",
            key: "villa-4",
          },
          {
            label: "Giải pháp điều khiển điều hòa",
            key: "villa-5",
          },
          {
            label: "Giải pháp điều khiển rèm",
            key: "villa-6",
          },
        ],
      },
      {
        type: "Hotel",
        label: "Khách Sạn",
        children: [
          {
            label: "Giải pháp Điều khiển phòng khách sạn RCU - GRMS",
            key: "hotel-1",
          },
          {
            label: "Phần mềm quản lý phòng khách sạn GRMS",
            key: "hotel-2",
          },
          {
            label: "Giải pháp IPTV và truyền hình tương tác GRMS",
            key: "hotel-3",
          },
        ],
      },
    ],
  },
  {
    label: (
      <Link to={"/livedemo"} style={{ textDecoration: "none" }}>
        Live Demo
      </Link>
    ),
    key: "live-demo",
  },
  {
    label: "Sản Phẩm",
    key: "product",
    children: [
      {
        label: "Công Tắc",
        key: "switch",
      },
      {
        label: "Chuông Hình",
        key: "doorEntry",
      },
      {
        label: "Camera",
        key: "camera",
      },
      {
        label: "Báo Động",
        key: "alarm",
      },
      {
        label: "Khóa Cửa",
        key: "lock",
      },
      {
        label: "Động Cơ Rèm",
        key: "motor",
      },
    ],
  },

  {
    label: (
      <Link to={"/projects"} style={{ textDecoration: "none" }}>
        Dự Án
      </Link>
    ),
    key: "projects",
    children: [
      {
        label: "Công trình thương mại",
        key: "abroad",
      },
      {
        label: "Công trình dân dụng",
        key: "civil",
      },
      {
        label: "Khách sạn thông minh",
        key: "hotelprojects",
      },
    ],
  },
  {
    label: (
      <Link to={"/news"} style={{ textDecoration: "none" }}>
        Tin Tức
      </Link>
    ),
    key: "news",
    children: [
      {
        label: "Tin thị trường",
        key: "market",
      },
      {
        label: "Tin công trình",
        key: "site",
      },
      {
        label: "Tin công ty",
        key: "company",
      },
    ],
  },
  {
    label: (
      <Link to={"/contact"} style={{ textDecoration: "none" }}>
        Liên Hệ
      </Link>
    ),
    key: "contact",
    children: [{ label: "Dịch Vụ", key: "service" }],
  },
];
const HeaderComponent = () => {
  const [current, setCurrent] = useState("mail");
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    setCurrent(key);
  };
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <>
      <Layout style={{ position: "sticky", zIndex: 1, top: 0 }}>
        <Flex
          justify="center"
          align="center"
          style={{ backgroundColor: 1 < 2 ? "#001529" : "white" }}
        >
          <Space
            size="large"
            align="center"
            direction="horizontal"
            wrap={false}
          >
            <Image
              src="vecteezy_smart-home-logo-icon-template_20040705.svg"
              width={80}
              preview={false}
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            <Menu
              theme={theme}
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
            <Input.Search
              placeholder="Search"
              allowClear
              size="medium"
              // onSearch={onSearch}
              style={{
                width: 250,
              }}
            />
            <Switch
              checked={theme === "dark"}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
            <Dropdown
              dropdownRender={() => (
                <>
                  <Space
                    direction="vertical"
                    size="medium"
                    style={{
                      backgroundColor: theme === "dark" ? "#001529" : "white",
                      borderRadius: "10px",
                    }}
                  >
                    <Button type="text">English</Button>
                    <Button type="text">Tiếng Việt</Button>
                  </Space>
                </>
              )}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  EN-VN
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Space>
              <Dropdown
                dropdownRender={() => (
                  <>
                    <Card style={{ minWidth: 324 }} type="inner">
                      <div>h1</div>
                    </Card>
                  </>
                )}
              >
                <Badge count={86} size="small">
                  <PiShoppingCartLight size="1.5em" color="beige" />
                </Badge>
              </Dropdown>
              <Button type="link">Log in</Button>
              <Button type="primary">Sign up for free</Button>
            </Space>
          </Space>
        </Flex>
      </Layout>
    </>
  );
};

export default HeaderComponent;
