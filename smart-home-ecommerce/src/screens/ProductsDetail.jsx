import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getIdProduct } from "../Redux-reducer/data";
import {
  Carousel,
  Col,
  Flex,
  Image,
  Row,
  Space,
  Button,
  Card,
  Typography,
  Rate,
  Divider,
  Input,
  InputNumber,
  Tabs,
  Form,
} from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { t } from "i18next";

const ProductsDetail = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();
  const id = searchParams.get("id");
  const [currentImage, setCurrentImage] = useState(0);
  const carouselRef = useRef(null);
  const [value, setValue] = useState("1");

  useEffect(() => {
    if (id) {
      dispatch(getIdProduct(id)).then((action) => {
        if (action.payload) {
          console.log(action.payload);
          setProduct(action.payload);
        }
      });
    }
  }, [id]);

  const contentStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "15px",
    objectFit: "cover",
    overflow: "hidden",
  };

  const contentStyle2 = {
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    objectFit: "cover",
    overflow: "hidden",
    cursor: "pointer",
  };

  const handleAfterChange = (current) => {
    setCurrentImage(current);
  };
  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
    carouselRef.current.goTo(index, false);
  };

  function formatCurrency(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const items = [
    {
      key: "1",
      label: "Mô Tả Sản Phẩm",
      children: (
        <>
          <div
            className="CKeditor"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
        </>
      ),
    },
    {
      key: "2",
      label: "Đánh Giá Sản Phẩm",
      children: (
        <>
          <div className="container">
            <Row>
              <Col span={18}>
                <h6>Hãy là người đầu tiên chia sẻ trải nghiệm của mình!</h6>
              </Col>
              <Col span={6}>
                <Flex justify="space-between">
                  <div>Đánh giá của bạn:</div>
                  <Rate />
                </Flex>
                <Divider />
                <Form
                  autoComplete="off"
                  style={{ maxWidth: 600 }}
                  labelCol={{
                    span: 0,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên của bạn!",
                      },
                      {
                        type: "name",
                        message: "Tên không hợp lệ!",
                      },
                    ]}
                  >
                    <Input placeholder="Name" allowClear size="middle" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập email của bạn!",
                      },
                      {
                        type: "email",
                        message: "Địa chỉ email không hợp lệ!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" allowClear size="middle" />
                  </Form.Item>
                  <Form.Item
                    name="telephone"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập SĐT của bạn!",
                      },
                    ]}
                  >
                    <InputNumber
                      placeholder="Telephone"
                      allowClear
                      size="middle"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 9,
                      span: 16,
                    }}
                  >
                    <Button
                      style={{ marginTop: "10px" }}
                      type="primary"
                      htmlType="submit"
                    >
                      Đánh giá
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </>
      ),
    },
  ];

  const handleAddToCart = () => {
    console.log(product);
  };
  return (
    <>
      {product && (
        <>
          <Flex
            style={{
              backgroundColor: mode ? "#001529" : "white",
            }}
            justify="center"
            align="center"
          >
            <div
              className="container"
              style={{
                width: "1200px",
                height: "100%",
                backgroundColor: mode ? "#001529" : "white",
                padding: "10px",
              }}
            >
              <Row gutter={16} style={{ padding: "5px" }}>
                <Col span={10}>
                  <Flex vertical gap="small">
                    <Carousel afterChange={handleAfterChange} ref={carouselRef}>
                      {product.images &&
                        product.images.map((imageUrl, index) => (
                          <>
                            <div
                              key={index}
                              className="d-flex justify-content-center"
                            >
                              <Image style={contentStyle} src={imageUrl} />
                            </div>
                          </>
                        ))}
                    </Carousel>
                    <Space
                      direction="horizontal"
                      size="small"
                      align="center"
                      className="justify-content-center"
                    >
                      {product.images &&
                        product.images.map((imageUrl, index) => (
                          <>
                            <div
                              key={index}
                              className="d-flex justify-content-center"
                            >
                              <Image
                                style={contentStyle2}
                                src={imageUrl}
                                preview={false}
                                onMouseEnter={() => handleThumbnailClick(index)}
                              />
                            </div>
                          </>
                        ))}
                    </Space>
                    <Flex justify="space-around">
                      <Space size="small">
                        <div className="fw-medium">Share: </div>
                        <Button
                          type="link"
                          icon={<InstagramOutlined />}
                          size="large"
                          style={{
                            color: mode
                              ? "rgba(255, 255, 255, 0.65)"
                              : "rgba(0, 0, 0, 0.88)",
                          }}
                        />
                        <Button
                          type="link"
                          icon={<FacebookOutlined />}
                          size="large"
                          style={{
                            color: mode
                              ? "rgba(255, 255, 255, 0.65)"
                              : "rgba(0, 0, 0, 0.88)",
                          }}
                        />
                        <Button
                          type="link"
                          icon={<TwitterOutlined />}
                          size="large"
                          style={{
                            color: mode
                              ? "rgba(255, 255, 255, 0.65)"
                              : "rgba(0, 0, 0, 0.88)",
                          }}
                        />
                        <Button
                          type="link"
                          icon={<YoutubeOutlined />}
                          size="large"
                          style={{
                            color: mode
                              ? "rgba(255, 255, 255, 0.65)"
                              : "rgba(0, 0, 0, 0.88)",
                          }}
                        />
                      </Space>
                      <Space>
                        <HeartOutlined />
                        <div className="fw-medium">Favorite: 122 </div>
                      </Space>
                    </Flex>
                  </Flex>
                </Col>
                <Col
                  span={14}
                  className="d-flex flex-column justify-content-between"
                >
                  <Flex vertical gap={100}>
                    <Space direction="vertical">
                      <Card bordered={false}>
                        <Typography.Title level={4}>
                          {product.title}
                        </Typography.Title>
                        <Flex justify="space-between">
                          <Space>
                            <Rate
                              disabled
                              defaultValue={4}
                              style={{ fontSize: "14px" }}
                            />
                            <div> 9 Rating</div>
                            <div> 12 sold</div>
                          </Space>
                          <div>Report</div>
                        </Flex>
                      </Card>
                      <Card
                        bordered={false}
                        style={{ backgroundColor: "#f5f5f5" }}
                      >
                        <div style={{ color: "red", fontSize: "20px" }}>
                          {`${product.price && formatCurrency(product.price)}đ`}
                        </div>
                      </Card>
                    </Space>
                    <Space direction="vertical" size="large">
                      <Flex justify="flex-start" align="center" gap={5}>
                        <Typography.Text
                          style={{ fontSize: "15px", color: "gray" }}
                        >
                          Quantity:
                        </Typography.Text>
                        <InputNumber
                          min={1}
                          max={25}
                          value={value}
                          onChange={setValue}
                        />
                        <Button
                          type="primary"
                          onClick={() => {
                            setValue("1");
                          }}
                        >
                          Reset
                        </Button>
                        <Typography.Text
                          style={{ fontSize: "15px", color: "gray" }}
                        >
                          25 pieces available
                        </Typography.Text>
                      </Flex>
                      <Flex justify="flex-start" align="center" gap={10}>
                        <Button
                          size="large"
                          danger
                          style={{ width: "150px" }}
                          onClick={handleAddToCart}
                        >
                          Add To Cart
                        </Button>
                        <Button
                          size="large"
                          danger
                          type="primary"
                          style={{ width: "150px" }}
                        >
                          Buy Now
                        </Button>
                      </Flex>
                    </Space>
                  </Flex>
                  <Divider />
                  <Space style={{ width: "100%" }}>
                    <Button type="primary" size="large" block>
                      Gọi ngay 1900 0299
                    </Button>
                    <Button type="primary" size="large" block>
                      Yêu cầu tư vấn Miễn Phí
                    </Button>
                  </Space>
                </Col>
              </Row>
              <Divider />
              <Row gutter={5}>
                <Col span={4}>
                  <Button
                    block
                    size="large"
                    type="dashed"
                    style={{ color: "#5a5a5a" }}
                  >
                    Miễn phí Thiết Kế
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    block
                    size="large"
                    type="dashed"
                    style={{ color: "#5a5a5a" }}
                  >
                    Miễn phí Lắp Đặt
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    block
                    size="large"
                    type="dashed"
                    style={{ color: "#5a5a5a" }}
                  >
                    Miễn phí Cài Đặt
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    block
                    size="large"
                    type="dashed"
                    style={{ color: "#5a5a5a" }}
                  >
                    Hướng dẫn Sử dụng
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    block
                    size="large"
                    type="dashed"
                    style={{ color: "#5a5a5a" }}
                  >
                    Bảo hành 2 năm
                  </Button>
                </Col>
                <Col span={4}>
                  <Button
                    block
                    size="large"
                    type="dashed"
                    style={{ color: "#5a5a5a" }}
                  >
                    Bảo trì 24/7
                  </Button>
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col span={24}>
                  <Tabs
                    items={items}
                    type="card"
                    size="large"
                    tabBarGutter={5}
                    centered
                  />
                </Col>
              </Row>
            </div>
          </Flex>
        </>
      )}
    </>
  );
};

export default ProductsDetail;