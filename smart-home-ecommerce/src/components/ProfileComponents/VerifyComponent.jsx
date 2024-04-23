import { Button, Flex, Layout, Space, Typography } from "antd";
import { t } from "i18next";
import React from "react";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { IoLockClosedSharp } from "react-icons/io5";

const VerifyComponent = () => {
  return (
    <>
      <Layout
        style={{ backgroundColor: "white", padding: "10px", height: "100%" }}
      >
        <Flex
          vertical
          justify="center"
          align="center"
          gap="small"
          style={{ height: "100%" }}
        >
          <RiShieldKeyholeFill size="6em" />
          <Typography.Paragraph style={{ fontSize: "16px", fontWeight: "500" }}>
            {t("Verify Password")}
          </Typography.Paragraph>
          <Button>
            <Space>
              <IoLockClosedSharp size="1em" />
              <span>{t("Verify by Password")}</span>
            </Space>
          </Button>
        </Flex>
      </Layout>
    </>
  );
};

export default VerifyComponent;
