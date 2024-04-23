import { Button, Card, Layout } from "antd";
import { t } from "i18next";
import React from "react";

const PaymentComponent = () => {
  return (
    <>
      <Layout style={{ backgroundColor: "white", padding: "10px" }}>
        <Card
          bordered={true}
          type="inner"
          title={t("Credit / Debit Card")}
          extra={
            <Button type="primary" danger>
              {t("Add New Card")}
            </Button>
          }
          style={{ height: "30vh" }}
        >
          {t("You don't have cards yet")}
        </Card>
        <Card
          bordered={true}
          type="inner"
          title={t("My Bank Accounts")}
          extra={
            <Button type="primary" danger>
              {t("Add New Bank Account")}
            </Button>
          }
          style={{ height: "30vh" }}
        >
          {t("You don't have bank accounts yet")}
        </Card>
      </Layout>
    </>
  );
};

export default PaymentComponent;
