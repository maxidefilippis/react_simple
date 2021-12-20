import React from "react";
import { Title } from "../../components";
import Layout from "../../layout";

const NotFound = () => {
  return (
    <Layout>
      <Title name="ERROR #404" />
      <p className="favorites__message">NOT FOUND</p>
    </Layout>
  );
};

export default NotFound;
