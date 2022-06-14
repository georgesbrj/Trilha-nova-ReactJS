import styles from  './Comment.module.css';
import { ThumbsUp, Trash} from 'phosphor-react'; 
import { Avatar } from './Avatar';
import { useState } from "react";

export function Comment({content,onDeleteComment}){


//estados de like 
const [likeCount,setLikeCount] = useState(0);   

 //funcoes 
 function handleDeleteComment(){
    onDeleteComment(content);
 }

 function handleLikeComment(){
     //console.log('clicou');
     setLikeCount(likeCount + 1);
 }

   return(
       <div className={styles.comment}> 
           <Avatar hasBorder={false}  src="https://github.com/georgesbrj.png" />
          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                      <strong>George Bezerra</strong>
                      <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atras</time>
                    </div>

                    <button  onClick={handleDeleteComment} title='Deletar comentario'>
                       <Trash size={20} />
                    </button>

                </header>
                <p>{content}</p>
            </div>  
            <footer>
               <button onClick={handleLikeComment} >
                   <ThumbsUp  size={20}/>
                   Aplaudir <span>{likeCount}</span>
               </button>
            </footer>
          </div>
       </div>
   )
}