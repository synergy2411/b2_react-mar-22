const ExpenseDate : React.FC<{createdAt : Date}> = (props) => {
    const day = props.createdAt.toLocaleString("en-US", { day : "numeric"});
    const month = props.createdAt.toLocaleString("en-US", { month : "long"});
    const year = props.createdAt.getFullYear();

    return (
        <p className="lead">{month} {day}, {year}</p>
    )


}
export default ExpenseDate;