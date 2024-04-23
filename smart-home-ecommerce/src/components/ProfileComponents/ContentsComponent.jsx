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
} from "antd";
import { t } from "i18next";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const { TabPane } = Tabs;

const ContentsComponent = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const [contentCkeditor, setContentCkeditor] = useState("");

  const onFinish = (value) => {
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
                    onFinish={onFinish}
                    layout="horizontal"
                    labelCol={{
                      span: 4,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                  >
                    <Form.Item label="a" name="a">
                      <Input />
                    </Form.Item>
                    <Form.Item label="a" name="b">
                      <Input />
                    </Form.Item>
                    <Form.Item label="a" name="c">
                      <Input.TextArea rows={5} />
                    </Form.Item>
                    <Form.Item label="d" name="d" wrapperCol={{ span: 16 }}>
                      <CKEditor
                        editor={ClassicEditor}
                        data={contentCkeditor}
                        onChange={(event, editor) =>
                          console.log(editor.getData())
                        }
                      ></CKEditor>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
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
                  <TabPane tab="Sub Tab 1" key="2">
                    Content of Sub Tab Pane 1
                  </TabPane>
                  <TabPane tab="Sub Tab 2" key="3">
                    Content of Sub Tab Pane 2
                  </TabPane>
                  <TabPane tab="Sub Tab 3" key="4">
                    Content of Sub Tab Pane 3
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane tab={t("smart home")} key="5">
                <Tabs>
                  <TabPane tab="Sub Tab 1" key="6">
                    Content of Sub Tab Pane 1
                  </TabPane>
                  <TabPane tab="Sub Tab 2" key="7">
                    Content of Sub Tab Pane 2
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane tab={t("products")} key="8">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab={t("projects")} key="9">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab={t("news")} key="10">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab={t("contact")} key="11">
                Content of Tab Pane 3
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
