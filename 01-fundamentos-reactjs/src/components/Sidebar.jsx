import {PencilLine} from 'phosphor-react';
import styles from "./Sidebar.module.css";

import sidebarCover from "../assets/sidebarCover.svg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={sidebarCover}  />
      <div className={styles.profile}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/39095386?v=4" />
        <strong>George Bezerra</strong>
        <span>Web Developer</span>
      </div>
      <footer>
          
        <a href="#"><PencilLine size={20}/> Editar seu perfil</a>
      </footer>
    </aside>
  );
}
