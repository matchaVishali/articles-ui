import React from "react";
import { useLocation } from "react-router-dom";
import data from "./../userData.json";

function Detail(props) {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("articleId");
  const author = JSON.parse(localStorage.getItem("authorName"));
  const authorDetails = data.find((each) => {
    return Object.keys(each)[0] === author;
  });
  //const obj = authorDetails.length ? authorDetails[0][name] : [];
  console.log(authorDetails[author]);
  const filteredData = authorDetails[author].filter((each) => {
    return each.articleId === Number(name);
  });
  console.log(authorDetails);
  console.log(name);
  console.log(filteredData);
  return (
    <div>
      <div>{filteredData.length ? filteredData[0].content : "No results"}</div>
      <button
        onClick={() =>
          props.history.push({
            pathname: "/articles",
            search: new URLSearchParams({
              authorName: author,
            }).toString(),
          })
        }
      >
        Back
      </button>
    </div>
  );
}

export default Detail;
