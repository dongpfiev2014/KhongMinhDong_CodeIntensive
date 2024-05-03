import {
  Button,
  Card,
  Divider,
  Flex,
  List,
  Row,
  Space,
  Typography,
  Image,
  Table,
  Col,
  Input,
  Select,
} from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const currentDate = moment();
const deliveryDate = moment(currentDate).add(2, "days").format("DD-MM-YYYY");
const min = 5000;
const max = 35000;

const columns = [
  {
    title: (
      <>
        <Typography.Title level={4}>Products Ordered</Typography.Title>
      </>
    ),

    dataIndex: "title",
  },
  {
    title: (
      <>
        <Typography.Text type="secondary">Unit Price</Typography.Text>
      </>
    ),
    dataIndex: "price",
  },
  {
    title: (
      <>
        <Typography.Text type="secondary">Amount</Typography.Text>
      </>
    ),

    dataIndex: "amount",
  },
  {
    title: (
      <>
        <Typography.Text type="secondary">Item Subtotal</Typography.Text>
      </>
    ),
    dataIndex: "totalPrice",
  },
];

const tabList = [
  {
    key: "credit",
    tab: "Credit Card/Debit Card",
  },
  {
    key: "cash",
    tab: "Cash on Delivery",
  },
];

const contentList = {
  credit: <p>content1</p>,
  cash: <p>content2</p>,
};

const CheckoutScreen = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const auth = useSelector((state) => state.authen);
  const { product, ...rest } = (auth && auth.currentUser) || {};
  const selectedRowKeys = useSelector((state) => state.selectedRowKeys);
  const navigate = useNavigate();
  const dataSource = product.filter((item) =>
    selectedRowKeys.includes(item.id)
  );

  const data = dataSource.map((item, index) => ({
    key: item.id,
    title: (
      <>
        <Space size="middle">
          <Image
            preview={false}
            width={50}
            alt="logo"
            src={item.images[0]}
            style={{
              height: "100%",
              borderRadius: "5px",
              objectFit: "cover",
              overflow: "hidden",
            }}
          />
          <Typography.Paragraph
            ellipsis={{ rows: 2, expandable: false }}
            className="fw-medium"
            style={{ maxWidth: "300px" }}
          >
            {item.title}
          </Typography.Paragraph>
        </Space>
      </>
    ),
    price: (
      <>
        <Typography.Text>{`${item.price.toLocaleString()}đ`}</Typography.Text>
      </>
    ),
    amount: <>{item.amount}</>,
    totalPrice: (
      <Typography.Text type="normal">
        {`${(item.price * item.amount).toLocaleString()}đ`}
      </Typography.Text>
    ),
    description: (
      <>
        <Row>
          <Col span={12}>
            <Space>
              <Typography.Text>Message for Sellers:</Typography.Text>
              <Input allowClear style={{ width: "300px" }} />
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Flex gap={50} align="flex-start">
                <Typography.Text>Shipping Option:</Typography.Text>
                <Space direction="vertical">
                  <Select
                    defaultValue="Express delivery"
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    options={[
                      {
                        label: "Express delivery",
                        value: "express",
                      },
                      {
                        label: "Same-day delivery",
                        value: "sameday",
                      },
                    ]}
                  />
                  <Typography.Text style={{ color: "#26aa99" }}>
                    Guaranteed to get by {deliveryDate}
                  </Typography.Text>
                </Space>
                <Typography.Text>{`${(
                  Math.floor(Math.random() * (max - min + 1)) + min
                ).toLocaleString()}đ`}</Typography.Text>
              </Flex>
              <Typography.Text>Order is eligible for co-check.</Typography.Text>
            </Space>
          </Col>
        </Row>
      </>
    ),
  }));

  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <>
      {auth && auth.currentUser && (
        <Flex
          style={{
            backgroundColor: mode ? "#001529" : "white",
            padding: "10px",
          }}
          justify="center"
          align="center"
        >
          <Row
            style={{
              width: "1200px",
              minHeight: "80vh",
              backgroundColor: mode ? "#001529" : "white",
            }}
          >
            <Flex vertical style={{ width: "100%" }} gap={10}>
              <Divider
                style={{
                  width: "100%",
                  height: "2px",
                  border: "none",
                  backgroundImage:
                    "linear-gradient(to right, pink 50%, lightblue 50%)",
                  backgroundSize: "150px 100%", // Độ rộng và chiều cao của mỗi vết đứt
                }}
              />
              <Card
                bordered={true}
                title={
                  <Typography.Title level={4} type="danger">
                    Delivery Address
                  </Typography.Title>
                }
                style={{ width: "100%" }}
              >
                <Space size="large">
                  <Typography.Text strong>
                    {auth.currentUser.name}
                    {` `}
                    {auth.currentUser.telephoneNumber}
                  </Typography.Text>
                  <Typography.Text>{auth.currentUser.address}</Typography.Text>
                  <Button
                    type="link"
                    onClick={() => navigate("/accounts/profile")}
                  >
                    Change
                  </Button>
                </Space>
              </Card>

              <Table
                rowHoverable
                style={{ width: "100%" }}
                columns={columns}
                dataSource={data}
                pagination={false}
                expandable={{
                  expandedRowRender: (record) => (
                    <div>{record.description}</div>
                  ),
                  rowExpandable: (record) => record.description !== undefined,
                  expandIcon: () => null,
                }}
                defaultExpandAllRows
              />

              <Card
                style={{
                  width: "100%",
                }}
                title={
                  <>
                    <Typography.Title level={4} type="danger">
                      Payment Method
                    </Typography.Title>
                  </>
                }
                tabList={tabList}
                onTabChange={onTab1Change}
                tabProps={{
                  size: "middle",
                  type: "editable-card",
                  centered: "true",
                }}
              >
                {contentList[activeTabKey1]}
              </Card>
            </Flex>
          </Row>
        </Flex>
      )}
    </>
  );
};

export default CheckoutScreen;
