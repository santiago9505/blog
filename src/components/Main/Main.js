import React from "react";

import PostDestacado from "./PostDestacado";
import PostJson from "./PostJson";

//styles
import "../../assets/styles/Main.css";

const Main = () => {
  return (
    <main className="main">
      <article className="main__santiago">
        <h1 className="main__name">Santiago Guáqueta</h1>
        <h3 className="main__description">
          Hola, te doy la bienvenida a este sencillo espacio en donde logro
          transmitir mis ideas, mis aprendizajes y mis opiniones frente a
          diferentes temas. Me alegro que estés aquí, siéntete libre de
          contactarme si quieres discutir sobre un tema específico.
        </h3>
      </article>
      <section className="main__destacado">
        <h2 className="destacado__title">Posts Destacados</h2>
        <div className="post__destacado--container">
          {PostJson.map((item, index) => {
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
      </section>
    </main>
  );
};

export default Main;
