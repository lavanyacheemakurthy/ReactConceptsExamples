import React, { useState, useCallback, useMemo } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Route, useRouteMatch, useHistory, useParams, useLocation } from 'react-router-dom'
import './App.css';
import Child from './Child';

// const App = () => {

//   const [count, setcount] = useState(0)
//   const [input, setinput] = useState('')
//   // const updateCounterFromChild = () => setcount(count + 1)
//   const updateCounterFromChild = useCallback(
//     () => {
//       setcount(count + 1)
//     },
//     [count],
//   )
//   return (
//     <div className="App">

//       From parent {count}<br></br>
//       <button onClick={() => setcount(count + 1)}>+1</button>
//       {input}
//       <input type={'text'} name='name' value={input} onChange={e => { setinput(e.target.value) }} />
//       <Child
//         count={count}
//         // updateCounter={updateCounterFromChild}
//         updateCounter={updateCounterFromChild}
//       />
//     </div>
//   );
// }

const topics = [
  {
    name: "Web Dev",
    id: 'web-dev',
    description: 'Web developent includes all the content user can see and interact on any client machine with browser. Web dev is categorized as below',
    resources: [
      {
        name: 'Frontend',
        id: 'frontend',
        description: 'Includes HTML, CSS, JS and all other scriptings that can run on client machine for user interaction',
        url: 'https://www.facebook.com'
      },
      {
        name: 'backend',
        id: 'backend',
        description: 'Includes Application layer and persistance layer topics',
        url: 'https://www.google.com'
      }
    ]
  },
  {
    name: "AI",
    id: 'ai',
    description: 'Artificial Intelligence is to do some Robotic magics!',
    resources: [
      {
        name: 'Computer Vision',
        id: 'computer-vision',
        description: 'Desc for computer vison',
        url: 'https://www.youtube.com'
      },
      {
        name: 'Neural Networks',
        id: 'neural-networks',
        description: 'Desc for neural networks',
        url: 'https://www.linkedin.com'
      }
    ]
  }
]

const App = () => {
  const [parentVar, setparentvar] = useState(0);
  const [childVar, setChildVar] = useState(0);
  const [arr, setArr] = useState([2, 3, 5, 6, 6, 7, 8, 8, 9, 4, 546, 7674, 678, 9, 9, 98, 3544]);
  const handleParentClick = () => {
    setparentvar(parentVar + 1);
  }
  const handleClickFromChild = (number) => {
    setChildVar(number)
  }
  const handleClickFromChildMemoized = useCallback(number => handleClickFromChild(number), []); // all through this component life cycle, this method will reference same memory location
  const getLargestNum = () => {
    console.log("Getting largest number");
    return Math.max(...arr);
  }
  const memoizedVal = useMemo(() => getLargestNum(), [arr])

  const changeArray = () => {
    setArr([60, 54, 345]);
  }
  // console.log("Parent!");
  return (
    <div className='App'>
      <h3>Content from parent : <i>{parentVar}</i></h3>
      <button onClick={handleParentClick}>Click Parent</button>
      {false && <h4>Largest Number {getLargestNum()}</h4>}
      <h4>Largest Number {memoizedVal}</h4> <button onClick={changeArray}>Click to change array</button>
      <Child childVar={childVar}
        // handleClickFromChild={handleClickFromChild} // on some change in parent, this variable is re cretead and so child treates this value as new everytime
        handleClickFromChildMemoized={handleClickFromChildMemoized}
      ></Child>


      <div className='routing'>
        <h1> Nested Routing Example</h1>
        <Router basename='/'>
          <Link to='/home' >Home</Link> <span style={{ padding: '30px' }}></span>
          <Link to='/topics'>Topics</Link>
          <Route path='/home'><div style={{ margin: '20px' }}>Home section!</div></Route>
          <Route path='/topics'><Topics></Topics></Route>
          {false && <Route path='/concepts'><Topics></Topics></Route>}
        </Router>
      </div>
    </div>
  )

}




export function Topics() {
  let useRouteMatchVar = useRouteMatch();
  let { path, url, params, isExact } = useRouteMatch();
  console.log(useRouteMatchVar);
  return (
    <div>
      <ul>{topics.map(topic => (
        <React.Fragment>
          {false && <li key={topic.id}><Link to={`/topics/${topic.id}`}>{topic.name} </Link>  </li>}
          <li key={topic.id}><Link to={`${url}/${topic.id}`}>{topic.name} </Link>  </li>
          { /*<Route path='/topics'><Topics></Topics></Route> --- what 'path' we give in Route, will come as 'url' from useRouteMatch , so when path from Route changes, this will dynamically work fo child route*/}
        </React.Fragment>
      ))}
      </ul>
      {false && <Route path={`/topics/:subid`}><SubTopic></SubTopic></Route>}
      <Route path={`${url}/:subid`}><SubTopic></SubTopic></Route>
    </div>
  )
}

export function SubTopic() {
  let useRouteMatchVar = useRouteMatch();
  let { path, url, params, isExact } = useRouteMatch();
  console.log(useRouteMatchVar);
  let currentSubTopic = topics.find(x => x.id === params.subid);
  return (
    <div style={{ marginLeft: '50px' }}>
      {currentSubTopic.description}
      <ol type='I'>
        {currentSubTopic.resources.map(sub => (
          <li key={sub.id}><Link to={`${url}/${sub.id}`}>{sub.name}</Link></li>
        ))}
      </ol>
      <Route path={`${path}/:subsubid`}><SubSubTopic></SubSubTopic>
      </Route>

    </div>
  )
}
export function SubSubTopic() {
  let useRouteMatchVar = useRouteMatch();
  let { path, url, params, isExact } = useRouteMatch();
  console.log(useRouteMatchVar);
  console.log(useLocation());
  console.log(useHistory());
  console.log(useParams());
  let history = useHistory();
  let { subid, subsubid } = useParams();
  const currentSubSubTopic = topics.find(subTopic => subTopic.id === subid).resources.find(subSubTopic => subSubTopic.id === subsubid);
  function handleClick() {
    history.push("/home");
  }
  return (<div style={{ marginLeft: '60px', marginBottom: '50px' }}>
    {currentSubSubTopic.name}
    {currentSubSubTopic.description}
    <br></br>
    <a href={currentSubSubTopic.url} target='_blank'>Click to go to!</a>
    <br></br>
    <button type="button" onClick={handleClick}>
      Go home
    </button>


  </div >)
}


export default App;
