import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import ReactLoading from "react-loading";
import { Row, Col, Container } from "reactstrap";

function MyLodingAnimation(props) {
  const { Themes } = useContext(ThemeContext);
  return (
    <div
      className="loading-div"
      style={{
        backgroundColor: Themes.MainBgTheme,
      }}
    >
      <div className="page-header section-dark">
        {/* <div className="filter" /> */}
        <div className="content-center" style={{ width: "100%" }}>
          <Container>
            <Row>
              <Col sm="5"></Col>
              <Col sm="2">
                {/* <ReactLoading type={"balls"} color="#fff" width={150} /> */}
                <ReactLoading type={"bubbles"} color="#fff" width={250} />
              </Col>
              <Col sm="5"></Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default MyLodingAnimation;
