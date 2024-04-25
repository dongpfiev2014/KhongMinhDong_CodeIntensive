import {
  Layout,
  Tabs,
  Collapse,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Button,
  Row,
  Col,
  Cascader,
  InputNumber,
  Select,
} from "antd";
import { t } from "i18next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";

const { TabPane } = Tabs;

const ProductsComponent = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const auth = useSelector((state) => state.authen);
  console.log(auth);
  const [contentCkeditor, setContentCkeditor] = useState("");
  const [form] = Form.useForm();

  const onFinish = (value) => {
    console.log(value);
  };

  const options = [
    {
      value: "products",
      label: t("products"),
      children: [
        {
          label: t("Switch"),
          value: "switch",
        },
        {
          label: t("Door Entry Intercom"),
          value: "doorEntry",
        },
        {
          label: t("Camera"),
          value: "camera",
        },
        {
          label: t("Alarm"),
          value: "alarm",
        },
        {
          label: t("Door Lock"),
          value: "lock",
        },
        {
          label: t("Curtain Motor"),
          value: "motor",
        },
      ],
    },
    {
      value: "projects",
      label: t("projects"),
      children: [
        {
          label: t("Commercial Projects"),
          value: "commercial",
        },
        {
          label: t("Civil Projects"),
          value: "civil",
        },
        {
          label: t("Smart Hotel Projects"),
          value: "hotelprojects",
        },
      ],
    },
  ];

  const onChangeCascader = (value) => {
    console.log(value);
  };

  const items = [
    {
      key: "1",
      label: t("Add Content"),
      children: (
        <>
          <Flex justify="center" align="center" style={{ width: "100%" }}>
            <Row style={{ width: "100%" }}>
              <Col span={24}>
                <ConfigProvider>
                  <Form
                    form={form}
                    onFinish={onFinish}
                    layout="horizontal"
                    labelCol={{
                      span: 2,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{ author: auth.currentUser.username }}
                  >
                    <Form.Item label={t("Author")} name="author">
                      <Input disabled />
                    </Form.Item>
                    <Form.Item label={t("Category")} name="category">
                      <Cascader
                        options={options}
                        onChange={onChangeCascader}
                        onClick={(e) => console.log(e)}
                      />
                    </Form.Item>
                    <Form.Item label={t("Title")} name="title">
                      <Input.TextArea rows={2} />
                    </Form.Item>
                    <Form.Item
                      label={t("Description")}
                      name="description"
                      wrapperCol={{ span: 16 }}
                    >
                      <CKEditor
                        editor={Editor}
                        data={contentCkeditor}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setContentCkeditor(data);

                          form.setFieldsValue({ description: data });
                        }}
                        onReady={(editor) => {
                          editor.editing.view.change((writer) => {
                            writer.setStyle(
                              "height",
                              "200px",
                              editor.editing.view.document.getRoot()
                            );
                          });
                        }}
                      />
                    </Form.Item>
                    <Form.Item label={t("code")} name="code">
                      <InputNumber style={{ width: "20%" }} />
                    </Form.Item>
                    <Form.Item label={t("stock")} name="stock">
                      <InputNumber style={{ width: "20%" }} />
                    </Form.Item>
                    <Form.Item label={t("unit price")} name="price">
                      <InputNumber style={{ width: "20%" }} addonAfter="VNĐ" />
                    </Form.Item>
                    <Form.Item label={t("brand")} name="brand">
                      <Select
                        defaultValue="Vimar"
                        style={{ width: "20%" }}
                        options={[
                          { value: "vimar", label: "Vimar" },
                          { value: "vda", label: "VDA" },
                          { value: "epic", label: "Epic" },
                          { value: "yale", label: "Yale" },
                          { value: "somfy", label: "Somfy" },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item label={t("origin")} name="origin">
                      <Select
                        defaultValue="Italia"
                        style={{ width: "20%" }}
                        options={[
                          { value: "vn", label: "Vietnam" },
                          { value: "italia", label: "Italia" },
                          { value: "eu", label: "EU" },
                          { value: "us", label: "US" },
                          { value: "china", label: "China" },
                          { value: "korea", label: "Korea" },
                        ]}
                      />
                    </Form.Item>
                    <Form.Item label={t("images")} name="images"></Form.Item>
                    <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
                      <Button htmlType="submit" type="primary">
                        {t("Add")}
                      </Button>
                    </Form.Item>
                  </Form>
                </ConfigProvider>
              </Col>
            </Row>
          </Flex>
        </>
      ),
    },
    {
      key: "2",
      label: t("Table of Contents"),
      children: (
        <>
          <ConfigProvider
            theme={{
              token: {
                /* here is your global tokens */
              },
              components: {
                Tabs: {
                  /* here is your component tokens */
                },
              },
            }}
          >
            <Tabs defaultActiveKey="1">
              <TabPane tab={t("products")} key="1">
                <Tabs defaultActiveKey="1">
                  <TabPane tab={t("Switch")} key="2">
                    <div>
                      <div
                        className="CKeditor"
                        dangerouslySetInnerHTML={{ __html: contentCkeditor }}
                      />
                    </div>
                  </TabPane>
                  <TabPane tab={t("Door Entry Intercom")} key="3">
                    Content of Sub Tab Pane 2
                  </TabPane>
                  <TabPane tab={t("Alarm")} key="4">
                    Content of Sub Tab Pane 3
                  </TabPane>
                  <TabPane tab={t("Camera")} key="5">
                    Content of Sub Tab Pane 3
                  </TabPane>
                  <TabPane tab={t("Door Lock")} key="6">
                    Content of Sub Tab Pane 3
                  </TabPane>
                  <TabPane tab={t("Curtain Motor")} key="7">
                    Content of Sub Tab Pane 3
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane tab={t("projects")} key="8">
                <Tabs>
                  <TabPane tab={t("Commercial Projects")} key="9">
                    1
                  </TabPane>
                  <TabPane tab={t("Civil Projects")} key="10">
                    1
                  </TabPane>
                  <TabPane tab={t("Smart Hotel Projects")} key="11">
                    1
                  </TabPane>
                </Tabs>
              </TabPane>
            </Tabs>
          </ConfigProvider>
        </>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <Layout
        style={{
          backgroundColor: mode ? "#000c17" : "white",
          padding: "10px",
          borderRadius: "20px",
          height: "100%",
        }}
      >
        <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
      </Layout>
    </>
  );
};

export default ProductsComponent;
