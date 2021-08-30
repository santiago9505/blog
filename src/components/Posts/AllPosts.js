import React from "react";
import PostDestacado from "../Main/PostDestacado";

import AllPostJson from "./AllPostJson";

import "../../assets/styles/AllPost.css";

const AllPosts = () => {
  return (
    <div className="all__post--main">
      <h1 className="all__post--title">Posts</h1>
      <div className="all__post--container">
        {AllPostJson.map((item, index) => {
          return (
            <PostDestacado
              route={item.route}
              img={item.img}
              title={item.title}
              content={item.content}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
