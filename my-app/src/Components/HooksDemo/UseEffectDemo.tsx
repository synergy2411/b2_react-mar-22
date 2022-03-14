import React, { useEffect, useState } from "react";
import axios from 'axios';

const UseEffectDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [repos, setRepos] = useState<Array<{name : string}>>([]);

  //   useEffect(() => {
  //     console.log("Use effect works");
  //   });

//   useEffect(() => {
//     console.log("Use effect works");
//   }, []);
  
//   useEffect(() => {
//     console.log("Use effect works");
//   }, [title]);

    useEffect(() => {
        console.log("Use effect callback")
        let notifier = setTimeout(() => {
            axios.get(`https://api.github.com/users/${title}/repos`)
                .then((response) => {
                    // console.log(response)
                    const repos =  response.data as Array<{name :string}>
                    setRepos(repos)
                }).catch(console.log)
        }, 1500)
        return () => {
            clearInterval(notifier)
        }
    },[title])

  const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)

  return (
    <div>
        <input type="text" value={title} onChange={changeHandler} />
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <hr />
      <ul className="list-group">
        {repos?.map((repo, i) => <li key={i} className="list-group-item">{repo.name}</li>)}
      </ul>
    </div>
  );
};

export default UseEffectDemo;
