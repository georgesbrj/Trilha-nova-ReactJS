import { format,formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from 'react';




export function Post({author,publishedAt,content}) {
  
  //estados 

  //array de posts
  const [comments,setComments] = useState([
    'Post muito bancana,hein'
  ]);

  //array de comentarios 
  const [newCommentText,setNewCommentText] = useState('');


  //lib date-fns
  const publishedDateFormatted =  format(publishedAt,"d 'de' LLLL 'as' HH:mm'h'",{locale:ptBR});
  const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt,{
    locale:ptBR,    
    addSuffix:true
  });

  //funcoes 
function handleCreateNewComent(){
  event.preventDefault();
  
  setComments([...comments,newCommentText]);  
  //console.log(comments); 

   
  setNewCommentText('');//limpando os comentarios 
}  

function handleNewCommentChange(){
  //console.log(event.target.value);
  setNewCommentText(event.target.value);

}


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
         {content.map(line => {
           if(line.type == 'paragraph'){
             return <p key={line.content} >{line.content}</p>
           }else if(line.type == 'link'){
             return <p key={line.content} ><a href="#">{line.content}</a></p>
           }
         })}
      </div>

      <form onSubmit={handleCreateNewComent} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
        <textarea 
          onChange={handleNewCommentChange}
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentario" 
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
       {comments.map(comment => {
           //console.log(comment);
         return <Comment key={comment} content={comment} />
       })}
      </div>
    </article>
  );
}
