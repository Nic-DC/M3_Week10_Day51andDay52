//import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { RiDeleteBin2Fill } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";

const Favorites = () => {
  const favoriteList = useSelector((state) => state.favorites.favList);
  console.log({ favoriteList });

  const dispatch = useDispatch();
  console.log({ dispatch });
  return (
    <div>
      <h1>Favorites List</h1>
      <Container>
        <Row>
          <Col>
            {favoriteList.map((fav) => (
              <div key={fav._id}>
                <Job data={fav} style={{ display: "inline - block" }} deleteJob={true} />
                <RiDeleteBin2Fill />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Favorites;
