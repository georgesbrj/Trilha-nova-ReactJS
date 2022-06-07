import styles from  './Comment.module.css';
import { ThumbsUp, Trash} from 'phosphor-react'; 
import { Avatar } from './Avatar';

export function Comment(){
   return(
       <div className={styles.comment}> 
           <Avatar hasBorder={false}  src="https://github.com/maybrito.png" />
          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                      <strong>George Bezerra</strong>
                      <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atras</time>
                    </div>
                    <button title='Deletar comentario'>
                       <Trash size={20} />
                    </button>

                </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>  
            <footer>
               <button>
                   <ThumbsUp  size={20}/>
                   Aplaudir <span>20</span>
               </button>
            </footer>
          </div>
       </div>
   )
}