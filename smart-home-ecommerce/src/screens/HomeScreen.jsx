import React from "react";
import { Helmet } from "react-helmet";

const HomeScreen = () => {
  return (
    <>
      <div>Dong vippro</div>
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
    </>
  );
};

export default HomeScreen;
