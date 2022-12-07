import { Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { addToFavoritesAction, deleteFavoriteAction } from "../redux/actions";

import { useSelector, useDispatch } from "react-redux";

const Job = ({ data, deleteJob }) => {
  console.log({ deleteJob });
  const jobsList = useSelector((state) => state.favorites.favList);
  console.log({ jobsList });

  const dispatch = useDispatch();
  console.log({ dispatch });
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        {data.title}{" "}
        <Link to={`/favorites`}>
          <Badge
            variant="warning"
            onClick={() => {
              // dispatch({
              //   type: `ADD_TO_FAVORITES`,
              //   payload: data,
              // });
              dispatch(addToFavoritesAction(data));
            }}
          >
            <AiTwotoneHeart id="favorite" />
          </Badge>
        </Link>
        {deleteJob && (
          <RiDeleteBin2Fill
            id="deleteJob"
            className="ml-2"
            onClick={() => {
              // dispatch({
              //   type: `DELETE_FAVORITE`,
              //   payload: data._id,
              // });
              dispatch(deleteFavoriteAction(data._id));
            }}
          />
        )}
      </Col>
    </Row>
  );
};

export default Job;
