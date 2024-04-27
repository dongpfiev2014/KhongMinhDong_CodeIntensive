import React, { useState, useEffect } from "react";
import {
  Col,
  Flex,
  Row,
  Button,
  Tabs,
  List,
  Card,
  Image,
  Space,
  Rate,
  Menu,
  Checkbox,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux-reducer/data";
import { useTranslation } from "react-i18next";
import { OrderedListOutlined } from "@ant-design/icons";
import { SiNintendoswitch } from "react-icons/si";
import { MdOutlineDensitySmall } from "react-icons/md";
import { GiEntryDoor } from "react-icons/gi";
import { MdVideoCameraFront } from "react-icons/md";
import { PiSirenDuotone } from "react-icons/pi";
import { GiGate } from "react-icons/gi";
import { GiTheaterCurtains } from "react-icons/gi";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/GlobalStyles.css";

const ProductsScreen = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [current, setCurrent] = useState("");
  // const [filteringProducts, setFilteringProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState([]);
  const [activeKeyTab, setActiveKeyTab] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    setActiveKeyTab(id);
  }, [id]);

  const handleBrandCheckboxChange = (selectedValues) => {
    setSelectedBrands(selectedValues);
    console.log(selectedValues);
  };

  const handleMaterialCheckboxChange = (selectedValues) => {
    setSelectedMaterials(selectedValues);
    console.log(selectedValues);
  };

  const handleSeriesCheckboxChange = (selectedValues) => {
    setSelectedSeries(selectedValues);
    console.log(selectedValues);
  };

  const onClickFilter = (val) => {
    setCurrent(val.key);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllProducts()).then((action) => {
      if (action.payload) {
        setProducts(action.payload);
        console.log(action.payload);
        setIsLoading(false);
      }
    });
  }, []);

  const filteredProducts = products.filter((element) => {
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(element.brand);
    const materialMatch =
      selectedMaterials.length === 0 ||
      selectedMaterials.includes(element.material);
    const seriesMatch =
      selectedSeries.length === 0 || selectedSeries.includes(element.series);
    return brandMatch && materialMatch && seriesMatch;
  });

  const items = [
    {
      key: "all",
      label: "All",
      icon: <MdOutlineDensitySmall />,
      children:
        filteredProducts &&
        renderListProducts(
          filteredProducts.filter(
            (element) =>
              element.category && element.category.includes("products")
          )
        ),
    },
    {
      key: "switch",
      label: t("Switch"),
      icon: <SiNintendoswitch />,
      children:
        filteredProducts &&
        renderListProducts(
          filteredProducts.filter(
            (element) => element.category && element.category.includes("switch")
          )
        ),
    },
    {
      key: "doorEntry",
      label: t("Door Entry Intercom"),
      icon: <GiGate />,
      children:
        filteredProducts &&
        renderListProducts(
          filteredProducts.filter(
            (element) =>
              element.category && element.category.includes("doorEntry")
          )
        ),
    },
    {
      key: "camera",
      label: t("Camera"),
      icon: <MdVideoCameraFront />,
      children:
        filteredProducts &&
        renderListProducts(
          filteredProducts.filter(
            (element) => element.category && element.category.includes("camera")
          )
        ),
    },
    {
      key: "alarm",
      label: t("Alarm"),
      icon: <PiSirenDuotone />,
      children:
        filteredProducts &&
        renderListProducts(
          filteredProducts.filter(
            (element) => element.category && element.category.includes("alarm")
          )
        ),
    },
    {
      key: "lock",
      label: t("Door Lock"),
      icon: <GiEntryDoor />,
      children:
        filteredProducts &&
        renderListProducts(
          filteredProducts.filter(
            (element) => element.category && element.category.includes("lock")
          )
        ),
    },
    {
      key: "motor",
      label: t("Curtain Motor"),
      icon: <GiTheaterCurtains />,
      children:
        filteredProducts &&
        renderListProducts(
          filteredProducts.filter(
            (element) => element.category && element.category.includes("motor")
          )
        ),
    },
  ];

  const itemsFilter = [
    {
      key: "1",
      label: "Sort By Price",
      children: [
        {
          key: "2",
          label: "Price: Low to High",
        },
        {
          key: "3",
          label: "Price: High to Low",
        },
      ],
    },
  ];
  const onChangeTabs = (key) => {
    setActiveKeyTab(key);
  };

  function formatCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function getRandomRatio() {
    return Math.random() + 1; // Tạo một tỷ lệ ngẫu nhiên, ví dụ: từ 1 đến 2
  }

  function renderListProducts(data) {
    return (
      <>
        <List
          loading={isLoading}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 20,
          }}
          grid={{ gutter: 10, column: 5 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Card
                hoverable
                cover={
                  <Image
                    alt="example"
                    src={item.images[0]}
                    preview={false}
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "10px",
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                  />
                }
                actions={[
                  <>
                    <Space
                      size="small"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      <Rate
                        disabled
                        defaultValue={4}
                        style={{
                          fontSize: "11px",
                        }}
                      />
                      <div>{12} sold</div>
                      <div>Còn hàng</div>
                    </Space>
                  </>,
                ]}
                onClick={() => {
                  navigate(
                    `/product-detail?id=${item.id}&name=${item.title}&code=${item.code}&brand=${item.brand}&series=${item.series}&category=${item.category}`
                  );
                }}
              >
                <Card.Meta
                  title={
                    <>
                      <div
                        style={{
                          fontWeight: "500",
                          fontSize: "13px",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                        }}
                      >
                        {item.code} - {item.title}
                      </div>
                    </>
                  }
                  description={
                    <>
                      <div className="d-flex">
                        <Space
                          size="small"
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                          }}
                        >
                          <div className="d-flex">
                            <div style={{ color: "red" }}>
                              {`${item.price && formatCurrency(item.price)}đ`}
                            </div>
                          </div>
                          <div style={{ textDecoration: "line-through" }}>
                            {`${
                              item.price &&
                              formatCurrency(
                                (item.price * getRandomRatio()).toFixed()
                              )
                            }đ`}
                          </div>
                        </Space>
                      </div>
                    </>
                  }
                />
              </Card>
            </List.Item>
          )}
        />
      </>
    );
  }

  return (
    <>
      <Flex
        style={{
          backgroundColor: mode ? "#001529" : "white",
        }}
        justify="center"
        align="center"
      >
        <Row
          style={{
            width: "1400px",
            minHeight: "80vh",
            backgroundColor: mode ? "#001529" : "white",
          }}
        >
          <Col
            span={4}
            style={{
              position: "fixed",
              width: "calc(1400px/6)",
            }}
          >
            <Flex justify="center" align="flex-start" vertical gap="middle">
              <Button type="text" icon={<OrderedListOutlined />}>
                {t("All Categories")}
              </Button>
              <Flex justify="center" align="center">
                <Menu
                  theme={mode ? "dark" : "light"}
                  mode="inline"
                  selectedKeys={[current]}
                  items={itemsFilter}
                  onClick={onClickFilter}
                  style={{
                    height: "100%",
                    borderRight: 0,
                  }}
                />
              </Flex>
              <Checkbox.Group onChange={handleBrandCheckboxChange}>
                <Space direction="vertical">
                  <div class="fw-medium">{t("brand")}</div>
                  <Checkbox value="vimar">Vimar</Checkbox>
                  <Checkbox value="vda">VDA</Checkbox>
                  <Checkbox value="epic">Epic</Checkbox>
                  <Checkbox value="yale">Yale</Checkbox>
                  <Checkbox value="somfy">Somfy</Checkbox>
                </Space>
              </Checkbox.Group>
              <Checkbox.Group onChange={handleMaterialCheckboxChange}>
                <Space direction="vertical">
                  <div class="fw-medium">{t("material")}</div>
                  <Checkbox value="techno">Techno</Checkbox>
                  <Checkbox value="metal">Metal</Checkbox>
                  <Checkbox value="glass">Glass</Checkbox>
                  <Checkbox value="stone">Stone</Checkbox>
                  <Checkbox value="wood">Wood</Checkbox>
                  <Checkbox value="leather">Leather</Checkbox>
                </Space>
              </Checkbox.Group>
              <Checkbox.Group onChange={handleSeriesCheckboxChange}>
                <Space direction="vertical">
                  <div class="fw-medium">{t("series")}</div>
                  <Checkbox value="eikon">Eikon (Luxury)</Checkbox>
                  <Checkbox value="arke">Arke (Mid-range)</Checkbox>
                  <Checkbox value="plana">Plana (Entry-level)</Checkbox>
                </Space>
              </Checkbox.Group>
              <Space direction="vertical">
                <div class="fw-medium">Rating</div>
                <Rate disabled defaultValue={5} style={{ fontSize: "14px" }} />
                <Rate disabled defaultValue={4} style={{ fontSize: "14px" }} />
                <Rate disabled defaultValue={3} style={{ fontSize: "14px" }} />
                <Rate disabled defaultValue={2} style={{ fontSize: "14px" }} />
                <Rate disabled defaultValue={1} style={{ fontSize: "14px" }} />
              </Space>
            </Flex>
          </Col>
          <Col
            span={20}
            style={{
              marginLeft: "calc(1400px/6)",
              height: "100%",
            }}
          >
            <Tabs
              items={items}
              onChange={onChangeTabs}
              type="card"
              size="middle"
              tabBarGutter={5}
              centered
              activeKey={activeKeyTab}
            />
          </Col>
        </Row>
      </Flex>
    </>
  );
};

export default ProductsScreen;
