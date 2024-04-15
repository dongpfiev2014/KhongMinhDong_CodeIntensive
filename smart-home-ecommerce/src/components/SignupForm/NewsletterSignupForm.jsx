import React, { useEffect, useState } from "react";
import { Card, Modal } from "antd";
import useLocalStorage from "use-local-storage";

const NewsletterSignupForm = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [hasVisitedBefore, setHasVisitedBefore] = useLocalStorage(
    "hasVisitedBefore",
    false
  );
  useEffect(() => {
    if (!hasVisitedBefore) {
      const timer = setTimeout(() => {
        setShowSignupForm(true);
        setHasVisitedBefore(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHasVisitedBefore(false);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Modal
      centered
      open={showSignupForm}
      onOk={() => setShowSignupForm(false)}
      onCancel={() => setShowSignupForm(false)}
    >
      <Card>Hello</Card>
      <div>Sida</div>
      <div>Sida</div>
      <div>Sida</div>
      <div>Sida</div>
    </Modal>
  );
};

export default NewsletterSignupForm;
