import "./global.css"; 
import  styles from "./app.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
 
 

function App() {
  return (
    <>
  <Header />
     <div className={styles.wrapper}>
       <Sidebar />
       <main>
         <Post 
            author="George Bezerra"
            content="Um post Legal"
          />
          <Post 
            author="George Bezerra"
            content="Um post Legal"
          />
       </main>
     </div>
    </>
  );
}

export default App;
