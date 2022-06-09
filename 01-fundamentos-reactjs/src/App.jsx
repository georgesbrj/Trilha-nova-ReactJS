import "./global.css"; 
import  styles from "./app.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
 
const posts  = [
   {
     id: 1 ,
     author: {
          avatarUrl: 'https://github.com/diego3g.png',
          name:'Diego Fernades',
          role: 'cto@rocketseat'  
     },
     content: [
           {type:'paragraph',content:'Fala galeraa 👏' },
           {type: 'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
           {type: 'link',content:'jane.design/doctorca'}, 
     ],
     publishedAt: new Date('2022-06-07 20:00:00')
    },
    {
      id: 2 ,
      author: {
           avatarUrl: 'https://github.com/maykbrito.png',
           name:'Mayk Brito',
           role: 'aducato@rocketseat'  
      },
      content: [
            {type:'paragraph',content:'Fala galeraa 👏' },
            {type: 'paragraph',content:'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
            {type: 'link',content:'jane.design/doctorca'}, 
      ],
      publishedAt: new Date('2022-06-08 20:00:00')
     },
     {
      id: 3 ,
      author: {
           avatarUrl: 'https://github.com/georgesbrj.png',
           name:'George Bezerra',
           role: 'aluno@rocketseat'  
      },
      content: [
            {type:'paragraph',content:'Fala galeraa 👏' },
            {type: 'paragraph',content:'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
            {type: 'link',content:'jane.design/doctorca'}, 
      ],
      publishedAt: new Date('2022-06-08 20:00:00')
     },
  ];

function App() {
  return (
    <>
  <Header />
     <div className={styles.wrapper}>
       <Sidebar />
       <main>
         {
            posts.map(post => {
               
                 return(
                    <Post
                      key={post.id}
                       author={post.author}
                       content={post.content}
                       publishedAt={post.publishedAt}
                    />
                )
              })
         }       
       </main>
     </div>
    </>
  );
}

export default App;
