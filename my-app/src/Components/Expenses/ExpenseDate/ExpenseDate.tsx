import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";

const ExpenseDate : React.FC<{createdAt : Date}> = (props) => {

    const context = useContext(AuthContext)
    console.log(context);

    const day = props.createdAt.toLocaleString("en-US", { day : "numeric"});
    const month = props.createdAt.toLocaleString("en-US", { month : "long"});
    const year = props.createdAt.getFullYear();

    return (
        <div>
            {context.isAuthenticated && <p className="lead">{month} {day}, {year}</p>}
        </div>
        // <AuthContext.Consumer>
        //     {(context) => {
        //         return <div>
        //             {context.isAuthenticated && <p className="lead">{month} {day}, {year}</p>}
        //         </div> 
        //     }}
        // </AuthContext.Consumer>
    )
}
export default ExpenseDate;