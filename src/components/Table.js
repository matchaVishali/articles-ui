import React, { useEffect } from "react";
import "./Table.css";
import data from "./../userData.json";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function Table(props) {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("authorName");
  localStorage.setItem("authorName", JSON.stringify(name));
  const authorData = data.filter((each) => {
    return Object.keys(each)[0] === name;
  });
  console.log(authorData);
  const obj = authorData.length ? authorData[0][name] : [];
  console.log(obj);

  

  const [tableData, setTableData] = useState(obj);
  const handleUpvotes = () => {
    const newData = tableData.sort((a, b) => {
      const aUpvotes = a.upvotes;
      const bUpvotes = b.upvotes;
      return bUpvotes - aUpvotes;
    });
    console.log(newData);
    setTableData(newData);
  };

  const handleDates = () => {
    const newData = tableData.sort((a, b) => {
      const aDate = new Date(a.date).setHours(0, 0, 0, 0);
      const bDate = new Date(b.date).setHours(0, 0, 0, 0);
      return bDate - aDate;
    });
    console.log(newData);
    setTableData(newData);
  };

  return (
    <div>
      {tableData.length ? (
        <div>
          <div>
            <button onClick={handleDates}>Newest</button>
            <button onClick={handleUpvotes}>Top</button>
          </div>
          <div className="Table">
            <table>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Upvotes</th>
                <th>Date</th>
              </tr>
              {tableData.map((val, key) => {
                console.log(val);
                return (
                  <tr key={key} className="table-hover">
                    <td>{val.articleId}</td>
                    <td>
                      <Link
                        to={{
                          pathname: "/article/details",
                          search: new URLSearchParams({
                            articleId: val.articleId,
                          }).toString(),
                        }}
                      >
                        {val.title}
                      </Link>
                    </td>
                    <td>{val.upvotes}</td>
                    <td>{val.date}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      ) : (
        "No Results"
      )}
    </div>
  );
}

export default Table;
