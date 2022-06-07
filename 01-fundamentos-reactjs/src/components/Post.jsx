import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/39095386?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>George Bezerra</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado ha 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
        </p>
        <p>
          <a href=""> 👉 jane.design/doctorca</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
