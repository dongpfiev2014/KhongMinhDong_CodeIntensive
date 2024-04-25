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
import Logo from "../photos/vecteezy_smart-home-logo-icon-template_20040705.svg";

const HeaderComponent = () => {
  const [current, setCurrent] = useState("about");
  const navigate = useNavigate();
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const auth = useSelector((state) => state.authen);

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
              label: t("Lighting solutions"),
              key: "villa-1",
            },
            {
              label: t("Security and alarm solutions"),
              key: "villa-2",
            },
            {
              label: t("Surveillance camera solutions"),
              key: "villa-3",
            },
            {
              label: t("Intercom solutions"),
              key: "villa-4",
            },
            {
              label: t("Air conditioning control solutions"),
              key: "villa-5",
            },
            {
              label: t("Curtain control solutions"),
              key: "villa-6",
            },
          ],
        },
        {
          label: t("hotel"),
          key: "hotel",
          children: [
            {
              label: t("RCU"),
              key: "hotel-1",
            },
            {
              label: t("GRMS Software"),
              key: "hotel-2",
            },
            {
              label: t("IPTV"),
              key: "hotel-3",
            },
          ],
        },
      ],
    },
    // {
    //   label: (
    //     <NavLink to={"/livedemo"} style={{ textDecoration: "none" }}>
    //       {t("live demo")}
    //     </NavLink>
    //   ),
    //   key: "live-demo",
    // },
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
          label: t("Switch"),
          key: "switch",
        },
        {
          label: t("Door Entry Intercom"),
          key: "doorEntry",
        },
        {
          label: t("Camera"),
          key: "camera",
        },
        {
          label: t("Alarm"),
          key: "alarm",
        },
        {
          label: t("Door Lock"),
          key: "lock",
        },
        {
          label: t("Curtain Motor"),
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
          label: t("Commercial Projects"),
          key: "abroad",
        },
        {
          label: t("Civil Projects"),
          key: "civil",
        },
        {
          label: t("Smart Hotel Projects"),
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
          label: t("Market News"),
          key: "market",
        },
        {
          label: t("Site News"),
          key: "site",
        },
        {
          label: t("Company News"),
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
              src={Logo}
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
              {(auth.currentUser === null ||
                auth.currentUser === undefined) && (
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
                        <Button
                          type="link"
                          onClick={() => navigate("/accounts/profile")}
                        >
                          {t("my account")}
                        </Button>
                        <Button
                          type="link"
                          onClick={() => navigate("/accounts/purchase")}
                        >
                          {t("my purchase")}
                        </Button>
                        <Button
                          type="link"
                          onClick={() => {
                            dispatch(logout());
                            navigate("/accounts/login");
                          }}
                        >
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
