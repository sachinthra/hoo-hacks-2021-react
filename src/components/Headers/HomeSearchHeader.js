/*eslint-disable*/
import React, { useContext } from "react";

// reactstrap components
import { Row, Col, Container, FormGroup, Input, Button } from "reactstrap";
import { ThemeContext } from "ThemeContext/ThemeContext";

// core components

function IndexHeader({ inputText, handleOnChange, handleOnSubmit, errorMsg }) {
  const { Themes } = useContext(ThemeContext);
  function scrollToComment() {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundColor: Themes.MainBgTheme,
          // backgroundImage:
          // "url(" + require("assets/img/antoine-barres.jpg").default + ")",
        }}
      >
        {/* <div className="filter" /> */}
        <div className="content-center" style={{ width: "90%" }}>
          <Container>
            <Row>
              <Col sm="12">
                <div className="title-brand">
                  <h1 className="presentation-title">Spam Slayer</h1>
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col sm="9">
                <FormGroup>
                  <Input
                    placeholder="Product Link"
                    value={inputText}
                    type="text"
                    onChange={handleOnChange}
                    style={{
                      color: Themes.UiTextTheme,
                      backgroundColor: Themes.UiButtonTheme,
                    }}
                  />
                </FormGroup>
              </Col>
              <Col sm="3">
                <Button
                  color="light"
                  type="button"
                  onClick={handleOnSubmit}
                  style={{
                    color: Themes.UiTextTheme,
                    backgroundColor: Themes.UiButtonTheme,
                  }}
                >
                  Search
                </Button>
              </Col>
            </Row>

            {errorMsg !== "" ? (
              <h2
                className="presentation-subtitle text-center"
                style={{ color: "red", fontWeight: "bold" }}
              >
                {errorMsg}
              </h2>
            ) : (
              ""
            )}
          </Container>
        </div>

        <h6
          className="category category-absolute"
          style={{
            color: Themes.UiTextTheme,
          }}
        >
          This might take Sometime. Please Wait
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
