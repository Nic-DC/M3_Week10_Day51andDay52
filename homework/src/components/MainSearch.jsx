import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";

import { useSelector, useDispatch } from "react-redux";
import { getJobsAction } from "../redux/actions";

const MainSearch = () => {
  const jobsList = useSelector((state) => state.jobsResult.searchedJobs);

  const dispatch = useDispatch();
  console.log({ dispatch });

  const showLoader = useSelector((state) => state.jobsResult.isLoading);
  console.log({ showLoader });

  const triggeredFetch = useSelector((state) => state.jobsResult.triggeredFetch);
  console.log({ triggeredFetch });

  const fetchError = useSelector((state) => state.jobsResult.isError);
  console.log({ fetchError });

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>

        {/* <Col xs={10} className="mx-auto mb-5">
          {jobsList.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col> */}
      </Row>
      {fetchError ? (
        <Row>
          <Col xs={10} className="mx-auto mb-5 mt-5 d-flex justify-content-center">
            <Alert variant="danger">Something is amiss my dear dear user 🤯</Alert>
          </Col>
        </Row>
      ) : (
        triggeredFetch &&
        (showLoader ? (
          <Row className="justify-content-center">
            <Col xs={10} className="mx-auto mb-5 mt-5 d-flex justify-content-center">
              <Spinner animation="grow" />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col xs={10} className="mx-auto mb-5">
              {jobsList.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
};

export default MainSearch;
