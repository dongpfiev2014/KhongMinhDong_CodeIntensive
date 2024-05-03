import {
  Badge,
  Col,
  Layout,
  List,
  Row,
  Tabs,
  Avatar,
  Button,
  Typography,
} from "antd";
import React from "react";
import { useSelector } from "react-redux";

const items = [
  {
    key: "all",
    label: "All",
    children: "No orders yet",
  },
  {
    key: "toPay",
    label: "To Pay",
    children: "No orders yet",
  },
  {
    key: "toShip",
    label: (
      <>
        <Badge count={5} size="small">
          <div>To Ship</div>
        </Badge>
      </>
    ),

    children: "No orders yet",
  },
  {
    key: "toReceive",
    label: "To Receive",
    children: "No orders yet",
  },
  {
    key: "completed",
    label: "Completed",
    children: "No orders yet",
  },
  {
    key: "cancelled",
    label: "Cancelled",
    children: "No orders yet",
  },
  {
    key: "returnRefund",
    label: "Return/Refund",
    children: "No orders yet",
  },
];

const renderOrderItems = (data) => (
  <>
    <List
      // loading={isLoading}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 20,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">more</a>,
            <Typography.Text type="success">
              Giao hàng thành công
            </Typography.Text>,
            <Typography.Text type="danger">COMPLETED</Typography.Text>,
          ]}
          extra={[
            <>
              <div>
                <Button>Huy don hang</Button>
              </div>
            </>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.picture.large} />}
            title={<a href="https://ant.design">{item.name?.last}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  </>
);

const PurchaseComponent = () => {
  const auth = useSelector((state) => state.authen);
  const { mode } = useSelector((state) => state.darkMode);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   dispatch(getAllProducts()).then((action) => {
  //     if (action.payload) {
  //       setProducts(action.payload);
  //       console.log(action.payload);
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      {auth && auth.currentUser && (
        <Layout
          className="colorImportant"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: mode ? "#000c17" : "white",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <Row style={{ width: "100%", backgroundColor: "white" }}>
            <Col span={24}>
              <Tabs
                items={items}
                onChange={onChange}
                type="card"
                size="middle"
                tabBarGutter={5}
                centered
              />
            </Col>
          </Row>
        </Layout>
      )}
    </>
  );
};

export default PurchaseComponent;
