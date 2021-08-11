import React, {
    memo,
    useMemo,
    useState
} from 'react';
import { isEqual } from 'lodash';
// const Child = (props) => {
//     let { count, updateCounter } = props
//     console.log('From child!')
//     const childNumber = useMemo(() => {
//         let op = 0;
//         for (let i = 0; i < 500000000; i++) {
//             op++;
//         }
//         return op;

//     }, [])
//     // let childNumber = 0;
//     // for (let i = 0; i < 500000000; i++) {
//     //     childNumber++;
//     // }
//     return (
//         <div style={{ padding: '50px', margin: '40px', border: '2px dotted blue' }}>
//             <div>Child -{childNumber} -- {count}</div>
//             <button onClick={updateCounter}>Click</button>
//         </div>
//     );
// }


// const Child = ({ childVar }) => {
const Child = (props) => {
    const [childLocalVar, setChildLocalVar] = useState(0)
    console.log("Child !");
    const handleClick = () => {
        // props.handleClickFromChild(Math.random())
        props.handleClickFromChildMemoized(Math.random())
    }
    return (
        <div style={{
            outline: '1px solid green', margin: '30px', padding: '40px'
        }}>
            <h4>Child Content: {childLocalVar}</h4>
            <h5>Received from parent : {props.childVar}</h5>
            {false && <button onChange={() => setChildLocalVar(childLocalVar + 1)}>Click to change child value</button>}
            <button onClick={handleClick}>Click to change value received from parent</button>

        </div>
    )
}
export default memo(Child, isEqual);
// export default (Child);
