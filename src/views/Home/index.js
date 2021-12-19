import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PLANETS } from "../../graphql/queries";
import { FETCH_LIMIT } from "../../constants";
import { PaginationControls, PlanetsMapping } from "../../components";
import { Title, Error, Loading } from "../../components";
import Layout from "../../layout";

const Home = () => {
  const [pagination, setPagination] = useState(1);
  const { data, error, loading } = useQuery(GET_PLANETS, {
    variables: { first: pagination * FETCH_LIMIT, last: FETCH_LIMIT },
  });

  if (loading) return <Loading />;
  if (error) return <Error message={error?.message} />;

  const { planets } = data?.allPlanets;
  const controls = {
    ["back"]: () => setPagination(pagination - 1),
    ["next"]: () => setPagination(pagination + 1),
  };

  return (
    <Layout>
      <Title name="Home" />
      <PaginationControls controls={controls} pagination={pagination} />
      <PlanetsMapping planets={planets} />
      <PaginationControls controls={controls} pagination={pagination} />
    </Layout>
  );
};

export default Home;
