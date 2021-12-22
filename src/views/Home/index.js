import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PLANETS } from "../../graphql/queries";
import { FETCH_LIMIT } from "../../constants";
import { Button, PaginationControls, PlanetsMapping } from "../../components";
import { Title, Error, Loading } from "../../components";
import Layout from "../../layout";
import { useSelector, useDispatch } from "react-redux";
import { clearSearch } from "../../state/planetsReducer/actions";

const Home = () => {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);
  const [searchNotNull, setSearchNotNull] = useState(false);
  const { data, error, loading } = useQuery(GET_PLANETS, {
    variables: { first: pagination * FETCH_LIMIT, last: FETCH_LIMIT },
  });
  const searchedPlanets = useSelector((state) => state.planetsReducer.planets);
  const { search } = useSelector((state) => state.planetsReducer);

  useEffect(() => {
    if (searchedPlanets.length > 0 && search) {
      setSearchNotNull(true);
    } else {
      setSearchNotNull(false);
    }
  }, [searchedPlanets, search]);

  if (loading) return <Loading />;
  if (error) return <Error message={error?.message} />;

  const { planets } = data?.allPlanets;
  const controls = {
    back: () => setPagination(pagination - 1),
    next: () => setPagination(pagination + 1),
  };

  const resetSearch = () => {
    dispatch(clearSearch());
  };

  return (
    <Layout>
      <Title name={searchNotNull ? "SEARCH" : "HOME"} />
      <PlanetsMapping search={searchedPlanets} data={planets} />
      {searchNotNull ? (
        <Button name="CLEAR SEARCH" onClick={resetSearch} />
      ) : (
        <PaginationControls controls={controls} pagination={pagination} />
      )}
    </Layout>
  );
};

export default Home;
