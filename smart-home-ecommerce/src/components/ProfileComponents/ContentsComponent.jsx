import { Layout, Tabs, Collapse, ConfigProvider } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;

const ContentsComponent = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const text = `sida`;
  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
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
              <TabPane tab="Tab 1" key="1">
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Sub Tab 1" key="1">
                    Content of Sub Tab Pane 1
                  </TabPane>
                  <TabPane tab="Sub Tab 2" key="2">
                    Content of Sub Tab Pane 2
                  </TabPane>
                  <TabPane tab="Sub Tab 3" key="3">
                    Content of Sub Tab Pane 3
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
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
