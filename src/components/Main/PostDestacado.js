import React from "react";
import { Link } from "react-router-dom";

//assets
import "../../assets/styles/PostDestacado.css";

class PostDestacado extends React.Component {
  render() {
    return (
      <Link to={this.props.route} className="destacado__container">
        <figure className="img__post--destacado-container">
          <img
            className="post__destacado--img"
            src={this.props.img}
            alt="blockchain-img"
          />
        </figure>
        <article className="post__destacado--text-container">
          <h2 className="post__destacado--title">{this.props.title}</h2>
          <p>{this.props.content}</p>
        </article>
        <article className="post__destacado--date">
          <p>{this.props.date}</p>
        </article>
      </Link>
    );
  }
}

export default PostDestacado;
