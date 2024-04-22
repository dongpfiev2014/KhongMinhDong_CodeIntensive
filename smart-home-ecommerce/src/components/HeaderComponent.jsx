import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  ConfigProvider,
  Avatar,
} from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { PiShoppingCartLight } from "react-icons/pi";
import { toggleDarkMode } from "../Redux-reducer/darkModeSlice";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants";
import { logout } from "../Redux-reducer/auth";

const HeaderComponent = () => {
  const [current, setCurrent] = useState("about");
  const navigate = useNavigate();
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const auth = useSelector((state) => state.authen);
  console.log(auth);

  const onClick = (val) => {
    setCurrent(val.key);
  };

  const items = [
    {
      label: t("about"),
      key: "about",
      // onTitleClick: (val) => setCurrent(val.key),
      children: [
        {
          label: "VTD",
          key: "vtd",
        },
        {
          label: "VIMAR",
          key: "vimar",
        },
        {
          label: "VDA",
          key: "vda",
        },
      ],
    },
    {
      label: (
        <NavLink
          to={"/smarthome"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {t("smart home")}
        </NavLink>
      ),
      key: "features",
      onTitleClick: (val) => setCurrent(val.key),
      children: [
        {
          label: t("villa"),
          key: "villa",
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
          label: t("hotel"),
          key: "hotel",
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
        <NavLink to={"/livedemo"} style={{ textDecoration: "none" }}>
          {t("live demo")}
        </NavLink>
      ),
      key: "live-demo",
    },
    {
      label: (
        <NavLink
          to={"/products"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {t("products")}
        </NavLink>
      ),
      key: "product",
      onTitleClick: (val) => setCurrent(val.key),
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
        <NavLink
          to={"/projects"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {t("projects")}
        </NavLink>
      ),
      key: "projects",
      onTitleClick: (val) => setCurrent(val.key),
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
        <NavLink
          to={"/news"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {t("news")}
        </NavLink>
      ),
      key: "news",
      onTitleClick: (val) => setCurrent(val.key),
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
        <NavLink
          to={"/contact"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {t("contact")}
        </NavLink>
      ),
      key: "contact",
      onTitleClick: (val) => setCurrent(val.key),
      children: [
        {
          label: (
            <NavLink to={"/service"} style={{ textDecoration: "none" }}>
              {t("service")}
            </NavLink>
          ),
          key: "service",
        },
      ],
    },
  ];

  return (
    <>
      <Layout style={{ position: "sticky", zIndex: 1, top: 0 }}>
        <Flex
          justify="center"
          align="center"
          style={{ backgroundColor: mode ? "#001529" : "white" }}
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
            <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    horizontalItemBorderRadius: "10px",
                  },
                },
              }}
            >
              <Menu
                theme={mode ? "dark" : "light"}
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
              />
            </ConfigProvider>
            <Input.Search
              placeholder="Search"
              allowClear
              size="medium"
              // onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
            <Switch
              checked={mode}
              onChange={() => dispatch(toggleDarkMode())}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
            <Dropdown
              dropdownRender={() => (
                <>
                  <Space
                    direction="vertical"
                    size="small"
                    style={{
                      backgroundColor: mode ? "#001529" : "#f5f5f5",
                      borderRadius: "10px",
                    }}
                  >
                    {LANGUAGES.map(({ code, label }) => (
                      <>
                        <Button
                          key={code}
                          type="link"
                          onClick={() => i18n.changeLanguage(code)}
                        >
                          {label}
                        </Button>
                      </>
                    ))}
                  </Space>
                </>
              )}
              placement="bottom"
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  EN-VN
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Space size="middle">
              <Dropdown
                dropdownRender={() => (
                  <>
                    <Card style={{ minWidth: 324 }} type="inner">
                      <div>h1</div>
                    </Card>
                  </>
                )}
                placement="bottom"
              >
                <Badge count={86} size="small">
                  <PiShoppingCartLight
                    size="1.5em"
                    color={mode ? "white" : "red"}
                    style={{ cursor: "pointer" }}
                  />
                </Badge>
              </Dropdown>
              {auth.currentUser === null && (
                <>
                  <Button
                    type="link"
                    onClick={() => navigate("/accounts/login")}
                  >
                    {t("log in")}
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => navigate("/accounts/signup")}
                  >
                    {t("sign up")}
                  </Button>
                </>
              )}
              {auth.currentUser && (
                <Dropdown
                  dropdownRender={() => (
                    <>
                      <Space
                        direction="vertical"
                        size="small"
                        style={{
                          backgroundColor: mode ? "#001529" : "#f5f5f5",
                          borderRadius: "10px",
                        }}
                      >
                        <Button type="link">{t("my account")}</Button>
                        <Button type="link">{t("my purchase")}</Button>
                        <Button type="link" onClick={() => dispatch(logout())}>
                          {t("log out")}
                        </Button>
                      </Space>
                    </>
                  )}
                  placement="bottom"
                >
                  <Space size="small" style={{ cursor: "pointer" }}>
                    <Avatar
                      src={`${
                        (auth && auth.currentUser.image) ||
                        (auth && auth.currentUser.avatar)
                      }`}
                    />
                    <span
                      style={{
                        color: mode
                          ? "rgba(255, 255, 255, 0.65)"
                          : "rgba(0, 0, 0, 0.88)",
                      }}
                    >
                      {auth.currentUser.username}
                    </span>
                  </Space>
                </Dropdown>
              )}
            </Space>
          </Space>
        </Flex>
      </Layout>
    </>
  );
};

export default HeaderComponent;
