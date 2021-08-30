import React from "react";
import "../../assets/styles/EachPost.css";

const CryptoPost = () => {
  return (
    <div className="post__container">
      <figure className="img__post--container">
        <img
          className="post__img"
          src="https://firebasestorage.googleapis.com/v0/b/blog-fb45f.appspot.com/o/blockchain-img.jpg?alt=media&token=31230dc2-4b35-4ee1-b927-7dadc390bacc"
          alt="blockchain-img"
        />
      </figure>
      <h2 className="post__title">
        Mi opinión sobre criptomonedas y blockchain:{" "}
      </h2>
      <article className="post__text--container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste officia
          corporis excepturi eaque perspiciatis explicabo illum doloribus odio
          voluptates, tempora error nihil fugiat praesentium neque iusto
          incidunt culpa ipsum a.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iste officia corporis excepturi eaque perspiciatis
          explicabo illum doloribus odio voluptates, tempora error nihil fugiat
          praesentium neque iusto incidunt culpa ipsum a.Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Iste officia corporis excepturi
          eaque perspiciatis explicabo illum doloribus odio voluptates, tempora
          error nihil fugiat praesentium neque iusto incidunt culpa ipsum a.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste officia
          corporis excepturi eaque perspiciatis explicabo illum doloribus odio
          voluptates, tempora error nihil fugiat praesentium neque iusto
          incidunt culpa ipsum a.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iste officia corporis excepturi eaque perspiciatis
          explicabo illum doloribus odio voluptates, tempora error nihil fugiat
          praesentium neque iusto incidunt culpa ipsum a.Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Iste officia corporis excepturi
          eaque perspiciatis explicabo illum doloribus odio voluptates, tempora
          error nihil fugiat praesentium neque iusto incidunt culpa ipsum a.
        </p>
      </article>
      <article className="post__date">
        <p>23 de Agosto del 2021</p>
      </article>
    </div>
  );
};

export default CryptoPost;
