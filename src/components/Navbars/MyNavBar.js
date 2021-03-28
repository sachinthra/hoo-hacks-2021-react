import React, { useContext } from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { CustomInput } from "reactstrap";
import { ThemeContext } from "ThemeContext/ThemeContext";
import { Link } from "react-router-dom";
// import { CommentContext } from "ThemeContext/CommentContext";

function IndexNavbar({ setCommentData }) {
  // context
  const { Themes, ToggleTheme, isLightTheme } = useContext(ThemeContext);
  // const { setCommentData } = useContext(CommentContext);
  // console.log(Themes);

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // setCommentData([]);
  }
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      style={{
        background: Themes.headBgTheme,
      }}
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <Link to="/home">
            <NavbarBrand
              data-placement="bottom"
              title="Coded by Creative Tim"
              style={{ color: Themes.UiTextTheme, cursor: "pointer" }}
            >
              Spam slayer
            </NavbarBrand>
          </Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.amazon.in/"
                target="_blank"
                title="Amazon"
                style={{ color: Themes.UiTextTheme }}
              >
                <i className="fa fa-amazon" />
                <p className="d-lg-none">Amazon Website</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <div
                style={{
                  paddingTop: "17px",
                  top: "10px",
                }}
              >
                <CustomInput
                  type="switch"
                  id="exampleCustomSwitch1"
                  name="customSwitch1"
                  defaultChecked={isLightTheme ? false : true}
                  label="Dark Mode"
                  onClick={ToggleTheme}
                  style={{ color: Themes.UiTextTheme, cursor: "pointer" }}
                />
              </div>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: Themes.UiTextTheme, cursor: "pointer" }}
                onClick={scrollToTop}
              >
                <i className="nc-icon nc-book-bookmark" /> Search
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
