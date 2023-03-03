import styles from "./Search.module.css"

//hooks
import { useFetchDocuments } from '../../hooks/UseFetchDocuments'
import { useQuery } from '../../hooks/UseQuery'

//components
import PostDetail from '../../components/PostDetail';

import { Link } from 'react-router-dom';


const Search = () => {
const query= useQuery();
const search= query.get("q");

const {documents: posts}= useFetchDocuments("posts",search)


  return (
    <div className={styles.search_container}>
        <h2>Search</h2>
        <div className="post-list">
            {posts && posts.length === 0 &&(
                <div className={styles.noposts}>
                <p>Não foram encontrados posts a partir da sua busca...</p>
                <Link to="/" className="btn btn-dark"> Voltar</Link>
                </div>
            )}
            {posts && posts.map((post)=>(
                <PostDetail key={post.id} post={post}/>
            ))}
            
        </div>
    </div>
  )
}

export default Search