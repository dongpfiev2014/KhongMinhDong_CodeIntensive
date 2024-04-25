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
} from "antd";
import { t } from "i18next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";

const { TabPane } = Tabs;

const ContentsComponent = () => {
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
      value: "about",
      label: t("about"),
      children: [
        {
          value: "VTD",
          label: "VTD",
        },
        {
          value: "VIMAR",
          label: "VIMAR",
        },
        {
          value: "VDA",
          label: "VDA",
        },
      ],
    },
    {
      value: "smarthome",
      label: t("smart home"),
      children: [
        {
          value: "villa",
          label: t("villa"),
          children: [
            {
              value: "lighting",
              label: t("Lighting solutions"),
            },
            {
              value: "security",
              label: t("Security and alarm solutions"),
            },
            {
              value: "camera",
              label: t("Surveillance camera solutions"),
            },
            {
              value: "intercom",
              label: t("Intercom solutions"),
            },
            {
              value: "aircon",
              label: t("Air conditioning control solutions"),
            },
            {
              value: "curtain",
              label: t("Curtain control solutions"),
            },
          ],
        },
        {
          value: "hotel",
          label: t("hotel"),
          children: [
            {
              value: "rcu",
              label: t("RCU"),
            },
            {
              value: "grms",
              label: t("GRMS Software"),
            },
            {
              value: "iptv",
              label: t("IPTV"),
            },
          ],
        },
      ],
    },
    {
      value: "news",
      label: t("news"),
      children: [
        {
          label: t("Market News"),
          value: "market",
        },
        {
          label: t("Site News"),
          value: "site",
        },
        {
          label: t("Company News"),
          value: "company",
        },
      ],
    },
    {
      value: "contact",
      label: t("contact"),
      children: [
        {
          label: t("service"),
          value: "service",
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
                      span: 22,
                    }}
                    initialValues={{ author: auth.currentUser.username }}
                  >
                    <Form.Item label={t("Author")} name="author">
                      <Input disabled />
                    </Form.Item>
                    <Form.Item label={t("Category")} name="category">
                      <Cascader options={options} onChange={onChangeCascader} />
                    </Form.Item>
                    <Form.Item label={t("Title")} name="title">
                      <Input.TextArea rows={2} />
                    </Form.Item>
                    <Form.Item
                      label={t("contents")}
                      name="contents"
                      wrapperCol={{ span: 22 }}
                    >
                      <CKEditor
                        editor={Editor}
                        data={contentCkeditor}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setContentCkeditor(data);

                          form.setFieldsValue({ contents: data });
                        }}
                        onReady={(editor) => {
                          editor.editing.view.change((writer) => {
                            writer.setStyle(
                              "height",
                              "550px",
                              editor.editing.view.document.getRoot()
                            );
                          });
                        }}
                      />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
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
              <TabPane tab={t("about")} key="1">
                <Tabs defaultActiveKey="1">
                  <TabPane tab="VTD" key="2">
                    <div>
                      <div
                        className="CKeditor"
                        dangerouslySetInnerHTML={{ __html: contentCkeditor }}
                      />
                    </div>
                  </TabPane>
                  <TabPane tab="VIMAR" key="3">
                    Content of Sub Tab Pane 2
                  </TabPane>
                  <TabPane tab="VDA" key="4">
                    Content of Sub Tab Pane 3
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane tab={t("smart home")} key="5">
                <Tabs>
                  <TabPane tab={t("villa")} key="6">
                    <Tabs>
                      <TabPane tab={t("Lighting solutions")} key="7">
                        1
                      </TabPane>
                      <TabPane tab={t("Security and alarm solutions")} key="8">
                        1
                      </TabPane>
                      <TabPane tab={t("Surveillance camera solutions")} key="9">
                        1
                      </TabPane>
                      <TabPane tab={t("Intercom solutions")} key="10">
                        1
                      </TabPane>
                      <TabPane
                        tab={t("Air conditioning control solutions")}
                        key="11"
                      >
                        1
                      </TabPane>
                      <TabPane tab={t("Curtain control solutions")} key="12">
                        1
                      </TabPane>
                    </Tabs>
                  </TabPane>
                  <TabPane tab={t("hotel")} key="13">
                    <Tabs>
                      <TabPane tab={t("RCU")} key="14"></TabPane>
                      <TabPane tab={t("GRMS Software")} key="15"></TabPane>
                      <TabPane tab={t("IPTV")} key="16"></TabPane>
                    </Tabs>
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane tab={t("news")} key="17">
                <Tabs>
                  <TabPane tab={t("Market News")} key="18"></TabPane>
                  <TabPane tab={t("Site News")} key="19"></TabPane>
                  <TabPane tab={t("Company News")} key="20"></TabPane>
                </Tabs>
              </TabPane>
              <TabPane tab={t("contact")} key="21">
                <Tabs>
                  <TabPane tab={t("service")} key="22"></TabPane>
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

export default ContentsComponent;
