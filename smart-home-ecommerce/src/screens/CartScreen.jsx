import {
  Button,
  Flex,
  Image,
  InputNumber,
  Row,
  Space,
  Table,
  Typography,
  Modal,
  Popconfirm,
  Affix,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux-reducer/auth";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { BsTrash } from "react-icons/bs";

const PaymentBar = () => (
  <Affix offsetBottom={0}>
    <div
      style={{
        padding: "10px",
        backgroundColor: "white",
        borderTop: "1px solid #ddd",
      }}
    >
      {/* Nội dung thanh toán ở đây */}
      <Button type="primary" block>
        Thanh toán
      </Button>
    </div>
  </Affix>
);

const columns = [
  {
    title: "Product",
    dataIndex: "title",
  },
  {
    title: "Unit Price",
    dataIndex: "price",
  },
  {
    title: "Quantity",
    dataIndex: "amount",
  },
  {
    title: "Total Price",
    dataIndex: "totalPrice",
  },
  {
    title: "Actions",
    dataIndex: "actions",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },

  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

const CartScreen = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const auth = useSelector((state) => state.authen);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, ...rest } = (auth && auth.currentUser) || {};
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleRemoveItem = (index) => {
    const updatedCart = [...auth.currentUser.product];
    updatedCart.splice(index, 1);
    const updatedUser = { ...rest, product: updatedCart };
    dispatch(addToCart(updatedUser)).then((action) => {
      if (action.payload) {
        console.log(action.payload);
      }
    });
  };

  const handleIncreaseAmount = (index) => {
    const updatedCart = JSON.parse(JSON.stringify(auth.currentUser.product));
    updatedCart[index].amount += 1;
    const updatedUser = { ...rest, product: updatedCart };
    dispatch(addToCart(updatedUser)).then((action) => {
      if (action.payload) {
        console.log(action.payload);
      }
    });
  };
  const handleDecreaseAmount = (index) => {
    const updatedCart = JSON.parse(JSON.stringify(auth.currentUser.product));
    updatedCart[index].amount -= 1;
    if (updatedCart[index].amount == 0) {
      showDeleteConfirm(index);
    } else {
      const updatedUser = { ...rest, product: updatedCart };
      dispatch(addToCart(updatedUser)).then((action) => {
        if (action.payload) {
          console.log(action.payload);
        }
      });
    }
  };

  const handleOnChangeAmount = (index, value) => {
    if (value !== null && value > 0) {
      const updatedCart = JSON.parse(JSON.stringify(auth.currentUser.product));
      updatedCart[index].amount = value;
      const updatedUser = { ...rest, product: updatedCart };
      dispatch(addToCart(updatedUser)).then((action) => {
        if (action.payload) {
          console.log(action.payload);
        }
      });
    } else if (value == 0) {
      showDeleteConfirm(index);
    }
  };

  const showDeleteConfirm = (index) => {
    Modal.confirm({
      title: "Delete Item",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure to delete this item?",
      okText: "Yes",
      cancelText: "No",
      onOk() {
        setDropdownVisible(true);
        handleRemoveItem(index);
      },
      onCancel() {
        setDropdownVisible(true);
      },
    });
  };

  const data =
    auth &&
    auth.currentUser &&
    auth.currentUser.product.map((item, index) => ({
      key: item.id,
      title: (
        <>
          <Space>
            <Image
              preview={false}
              width={100}
              alt="logo"
              src={item.images[0]}
              style={{
                height: "100%",
                borderRadius: "15px",
                objectFit: "cover",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() =>
                navigate(
                  `/product-detail?id=${item.id}&name=${item.title}&code=${item.code}&brand=${item.brand}&series=${item.series}&category=${item.category}`
                )
              }
            />
            <Typography.Paragraph
              ellipsis={{ rows: 2, expandable: false }}
              className="fw-medium"
              style={{ maxWidth: "200px", cursor: "pointer" }}
              onClick={() =>
                navigate(
                  `/product-detail?id=${item.id}&name=${item.title}&code=${item.code}&brand=${item.brand}&series=${item.series}&category=${item.category}`
                )
              }
            >
              {item.title}
            </Typography.Paragraph>
          </Space>
        </>
      ),
      price: (
        <>
          <Space>
            <Typography.Text
              style={{ textDecoration: "line-through", color: "grey" }}
            >
              {`${parseInt(
                item.price * (Math.random() + 1)
              ).toLocaleString()}đ`}
            </Typography.Text>
            <Typography.Text>
              {`${item.price.toLocaleString()}đ`}
            </Typography.Text>
          </Space>
        </>
      ),
      amount: (
        <>
          <Space size={5}>
            <Button size="small" onClick={() => handleDecreaseAmount(index)}>
              -
            </Button>
            <InputNumber
              size="small"
              changeOnWheel
              value={item.amount}
              controls={false}
              style={{
                width: "35px",
              }}
              onBlur={(event) =>
                handleOnChangeAmount(index, parseInt(event.target.value))
              }
            />
            <Button size="small" onClick={() => handleIncreaseAmount(index)}>
              +
            </Button>
          </Space>
        </>
      ),
      totalPrice: (
        <Typography.Text type="danger">
          {`${(item.price * item.amount).toLocaleString()}đ`}
        </Typography.Text>
      ),
      actions: (
        <>
          {" "}
          <Space size="middle">
            <Popconfirm
              placement="bottom"
              title="Remove the item"
              description="Are you sure to remove this item?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => handleRemoveItem(index)}
            >
              <Space>
                <BsTrash
                  style={{
                    cursor: "pointer",
                    color: "red",
                  }}
                />
                <Typography.Text style={{ cursor: "pointer" }}>
                  Delete
                </Typography.Text>
              </Space>
            </Popconfirm>
          </Space>
        </>
      ),
    }));

  return (
    <>
      {auth && auth.currentUser && (
        <>
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
              <Table
                style={{ width: "100%" }}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
              />
              <PaymentBar />
            </Row>
          </Flex>
        </>
      )}
    </>
  );
};

export default CartScreen;
