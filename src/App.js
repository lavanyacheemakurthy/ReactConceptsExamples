import React, { useState, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route, useRouteMatch, useHistory, useParams, useLocation } from 'react-router-dom'
import Child from './Child';
import PromiseExample from './components/PromiseExample';
import { UseEffectExample } from './components/UseEffectExample';
import './App.css';

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
  return (
    <Router >
      <div className='home sticky'>
        <ul>
          <li><NavLink exact to={`/`} activeClassName="active">Root</NavLink></li>
          <li><NavLink to={`/hooksEg`} activeClassName="active">UseMemo, UseCallback, React.memo</NavLink></li>
          <li><NavLink to={`/nestedRoutesEg`} activeClassName="active">Nested Routes</NavLink></li>
          <li><NavLink to={`/useEffectEg`} activeClassName="active">useEffect</NavLink></li>
          <li><NavLink to={`/promisesEg`} activeClassName="active">Promises</NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/' >What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.


          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Route>
        <Route path='/hooksEg' ><Parent /></Route>
        <Route path='/nestedRoutesEg' ><NestedRouteEg /></Route>
        <Route path='/useEffectEg' ><UseEffectExample /></Route>
        <Route path='/promisesEg' ><div><PromiseExample /></div></Route>
      </Switch>
    </Router>

  )
}
const NestedRouteEg = () => {
  return (<div className='routing'>
    <h1> Nested Routing Example</h1>
    <Router basename='/'>
      <NavLink to='/home' >Home</NavLink> <span style={{ padding: '30px' }}></span>
      <NavLink to='/topics'>Topics</NavLink>
      <Route path='/home'><div style={{ margin: '20px' }}>Home section!</div></Route>
      <Route path='/topics'><Topics></Topics></Route>
      {false && <Route path='/concepts'><Topics></Topics></Route>}
    </Router>
  </div>)
}
const Parent = () => {
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
      <div>
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
        <React.Fragment key={topic.id}>
          {false && <li ><NavLink to={`/topics/${topic.id}`}>{topic.name} </NavLink>  </li>}
          <li ><NavLink to={`${url}/${topic.id}`}>{topic.name} </NavLink>  </li>
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
          <li key={sub.id}><NavLink to={`${url}/${sub.id}`}>{sub.name}</NavLink></li>
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
