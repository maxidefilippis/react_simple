import React from "react";
import { Title } from "..";
import Layout from "../../layout";

const Error = ({ message }) => (
  <Layout>
    <Title name="HOME" />
    <p>Error...{message}</p>
  </Layout>
);

export default Error;
