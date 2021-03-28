import React, { useState, createContext } from "react";

export const CommentContext = createContext();

export default function CommentContextProvider(props) {
  const [commentData, setCommentData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  function handleToggleTheme() {
    setCommentData((previsLightTheme) => !previsLightTheme);
  }

  return (
    <CommentContext.Provider
      value={{
        commentData: commentData,
        setCommentData: setCommentData,
        currentPage: currentPage,
        setCurrentPage: setCurrentPage,
        totalPages: totalPages,
        setTotalPages: setTotalPages,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
}
