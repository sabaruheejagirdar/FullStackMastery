import axios from 'axios';
import React, {useState, useEffect} from "react";

const App = (props) =>{

  const [ APIlist, setAPIlist] = useState();

  // useEffect- Invoke during onload
  useEffect(() => 
  {
    let url = "https://api.publicapis.org/entries?category=Animals";
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    }).then(
      resp => {
        let listOfEntries = resp.data.entries;
        let listOfEntriesAsArray = Object.entries(listOfEntries);
        let i = 1
        console.log("----", listOfEntries)
        console.log("+++", listOfEntriesAsArray)
        let entryDetails = listOfEntriesAsArray.map((entryDetails)=>{
          return(
            
            <tr >
              {/* <a href={entryDetails[1]["Link"]} target='_blank' rel='noreferrer'>{entryDetails[1]["API"]}</a> */}
              <td style={{color: 'red', border:'1px solid black'}}>{entryDetails[1]["API"]}</td>
              <td style={{color: 'red', border:'1px solid black'}}>{entryDetails[1]["Link"]}</td>
            </tr>
          )
        })
        console.log("EntryDetails", entryDetails)
        setAPIlist(entryDetails);
      }).catch(
        err =>{
          console.log(err.toString())
        });
  }, []);

  const colorStyle = {
    color:props['color'],
    fontSize:props['size']
  }
  
  return(
    <div>
      <h4>Learn: API Call, Functional component, API call using Axios, useState, useEffect</h4>
      <h2> API List</h2>

      <br/>
      <div style={colorStyle}>
        <ul>{APIlist}</ul>
      </div>
    </div>
  )
}
export default App;