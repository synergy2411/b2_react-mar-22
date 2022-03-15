import axios from 'axios';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import classes from './AlertBox.module.css';

const MyAlertBox = () => {
    const location = useLocation()
    const query  = new URLSearchParams(location.search)         // ?searchTerm=Value
    const title = query.get("title")
    console.log( "Title : " , title);
    
    const history = useHistory()
    const params = useParams<{postId : string}>();

    const onDeletePost=() =>{
        axios.delete("http://localhost:3001/posts/"+params.postId)
            .then(response => history.replace("/posts"));
    }

    const onNavigate = () => history.replace("/posts")

    return (
        <div className={classes.backdrop}>
            <div className={classes["alert-box"]}>
                <p className='lead'>Are you sure to delete?</p>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger btn-block" onClick={onDeletePost}>Yes, please</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary btn-block" onClick={onNavigate} >No, thanks</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyAlertBox;