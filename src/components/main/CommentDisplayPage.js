import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { ThemeContext } from "ThemeContext/ThemeContext";

function CommentDisplayPage({ commentData }) {
  console.log("commentData");
  console.log(commentData);
  const { Themes } = useContext(ThemeContext);

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div
      className="section section-buttons"
      style={{ backgroundColor: Themes.MainBgTheme }}
    >
      <Container>
        <div className="title">
          <h2 style={{ color: Themes.UiTextTheme }}>Comments</h2>
        </div>
        <Row>
          <Col sm="3"></Col>
          <Col sm="2">
            <Button
              color="light"
              type="button"
              onClick={() => {
                setCurrentPage((prev) => prev - 1);
              }}
              disabled={currentPage === 0}
              style={{
                color: Themes.UiTextTheme,
                backgroundColor: Themes.UiButtonTheme,
              }}
            >
              Previous
            </Button>
          </Col>
          <Col sm="2">
            <h3 style={{ margin: "0px" }}>
              {currentPage + 1}/{Math.ceil(commentData.length / 10)}
            </h3>
          </Col>
          <Col sm="3">
            <Button
              color="light"
              type="button"
              disabled={currentPage === Math.ceil(commentData.length / 10) - 1}
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
              }}
              style={{
                color: Themes.UiTextTheme,
                backgroundColor: Themes.UiButtonTheme,
              }}
            >
              Next
            </Button>
          </Col>
          <Col sm="3"></Col>
        </Row>
        <Row>
          <Col>
            {commentData &&
              commentData
                .slice(10 * currentPage, 10 * currentPage + 10)
                .map((item, index) => (
                  <div
                    key={item.index}
                    className="typography-line"
                    style={{ color: Themes.UiTextTheme }}
                  >
                    <span className="note" style={{ fontSize: "20px" }}>
                      {item.rating}
                    </span>
                    <p
                      className="text-muted"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      {item.review}
                    </p>
                  </div>
                ))}
            {/* <div className="typography-line">
              <span className="note">Muted text</span>
              <p className="text-muted">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
              </p>
            </div> */}
          </Col>
        </Row>
        <Row>
          <Col sm="3"></Col>
          <Col sm="2">
            <Button
              color="light"
              type="button"
              onClick={() => {
                setCurrentPage((prev) => prev - 1);
              }}
              disabled={currentPage === 0}
              style={{
                color: Themes.UiTextTheme,
                backgroundColor: Themes.UiButtonTheme,
              }}
            >
              Previous
            </Button>
          </Col>
          <Col sm="2">
            <h3 style={{ margin: "0px" }}>
              {currentPage + 1}/{Math.ceil(commentData.length / 10)}
            </h3>
          </Col>
          <Col sm="3">
            <Button
              color="light"
              type="button"
              disabled={currentPage === Math.ceil(commentData.length / 10) - 1}
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
              }}
              style={{
                color: Themes.UiTextTheme,
                backgroundColor: Themes.UiButtonTheme,
              }}
            >
              Next
            </Button>
          </Col>
          <Col sm="3"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default CommentDisplayPage;
