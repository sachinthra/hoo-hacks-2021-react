import HomeSearchHeader from "components/Headers/HomeSearchHeader";
import MyNavBar from "components/Navbars/MyNavBar";
import React, { useContext, useState, useRef } from "react";
import axios from "axios";
// import { ThemeContext } from "ThemeContext/ThemeContext";
import CommentDisplayPage from "components/main/CommentDisplayPage";
import ImageDataDisplay from "components/main/ImageDataDisplay";

function HomePage(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  // const { Themes, ToggleTheme, isLightTheme } = useContext(ThemeContext);
  const [commentData, setCommentData] = useState([]);
  const [imageData, setImageData] = useState("");
  const [ratingsArray, setRatingsArray] = useState([]);
  const [inputText, setInputText] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const myRef = useRef(null);
  const BACKEND_DOMAIN = "http://167.71.24.31/";

  function commentScroll() {
    window.scrollTo({
      behavior: "smooth",
      top: myRef.current.offsetTop,
    });
  }

  function handleOnChange(event) {
    event.preventDefault();
    setInputText(event.target.value);
    // console.log(event.target.value);
  }
  let array = [];

  function handleOnSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    axios
      .get(`${BACKEND_DOMAIN}test/`)
      .then(function (res) {
        setImageData(res.data.image_id);
        setRatingsArray(res.data.ratings);

        array = [];
        for (let i = 0; i < res.data.ratings.length; i++) {
          array.push({
            rating: res.data.ratings[i],
            review: res.data.reviews[i],
          });
        }
        return array;
      })
      .then(function (array) {
        setCommentData(array);
        // console.log("kkk");
        // console.log(array);
        setIsLoading(false);
        commentScroll();
      });
  }

  return (
    <>
      <MyNavBar setCommentData={setCommentData} />

      <HomeSearchHeader
        inputText={inputText}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      {commentData.length !== 0 ? (
        <div className="main" ref={myRef}>
          <ImageDataDisplay
            BACKEND_DOMAIN={BACKEND_DOMAIN}
            ratingsArray={ratingsArray}
            imageData={imageData}
          />
          <CommentDisplayPage commentData={commentData} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default HomePage;
