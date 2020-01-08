import React from 'react';
import './App.css';

import Jobs from './Jobs'

const JOB_API_URL = 'http://localhost:3001/jobs'

// const mockJobs = [
//   {title: 'SWE1', company: 'Google'},
//   {title: 'SWE1', company: 'Facebook'},
//   {title: 'SWE1', company: 'Apple'},
  
// ]

async function fetchJobs(updateCb){
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);

  // console.log({json});
}

function App() {

  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])
  
  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
