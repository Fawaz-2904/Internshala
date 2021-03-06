import React , {useState} from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [inputData, setInputData] = useState("");
  const handleAddItem = () => {
    const newList = [...list, {title: inputData}]
    setList(newList);
    setInputData("");
  }
  const handleRemoveItem = (index) => {
    const newList = [];
    for (let i=0; i<list.length; i++){
      if (index != i){
        newList.push(list[i]);
      }
    }
    setList(newList);
  }
  return (
    <div className="App">
      <h2>Grocery List</h2>
      <div className='input'>
        <input type="text" value={inputData} onChange={(event) => setInputData(event.target.value)} />
        < input type="button" value="ADD" onClick={() => handleAddItem()} />
      </div>
      <div className='list'>
        {list.map((item, index) => {
          return(
            <div>
              <p onClick={() => handleRemoveItem(index)}>{item.title}</p>
              </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
