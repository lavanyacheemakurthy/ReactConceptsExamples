import React, { Profiler, useState } from 'react';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }
  handletextChange(event) {
    console.log({ 'event target': event.target.value });
  }
  callback1(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    );
  }
  render() {
    return (
      <Profiler id="Panel" onRender={this.callback1}>
        <form onSubmit={this.handleSubmit} style={{ margin: '20px' }}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <label>
            Enter value
            <input type="text" onChange={this.handletextChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </Profiler>
    );
  }
}
export function ProfilerExample() {
  let [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1>Hello </h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'Hide content' : 'Display content'}
      </button>
      {toggle && <FileInput />}
    </div>
  );
}
