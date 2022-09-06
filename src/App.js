import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import DisplayList from './components/DisplayList';

function App() {
  const [todoName,setTodoName]=useState("")
  const [todoList,setList]=useState([])
  const [update,setUpdate]=useState(false)
  const [name,setName]=useState("")
  const [key,setKey]=useState("")
  useEffect(()=>{
<DisplayList list={todoList} deleteItem={deleteItem} updateItem={updateItem}></DisplayList>
  },[])
  function changeInp(e){
    setTodoName(e.target.value)
  }
  function addList(e){
    if(update){
      
      setList(todoList.map((v)=>{
        var temp = Object.assign({}, v);
        if(temp.name==name){
          temp.name=todoName
        }
        return temp
      }))
  ß
    setUpdate(false)
    setName("")
    
    }
    else{
      setList([...todoList,{name:todoName , key:todoList.length}])
    }
    
    
    setTodoName("")
  }
  function deleteItem(val){
    setList(todoList.filter(function(value){
      return value.name!=val
  }))
  
  }
  function updateItem(val,key){
    
    setName(val)
    setUpdate(true)
    setKey(key)
    
    setTodoName("")

  }
  return (
    <div data-testid="mainDiv">
      <h1>Todo App</h1>
      <label  >Enter todo:</label>
      <input data-testid="input" type="text" id="totdoinp" onChange={changeInp} value={todoName}></input>
      <button onClick={addList} data-testid="add"> Add</button>
      <DisplayList list={todoList} deleteItem={deleteItem} updateItem={updateItem}></DisplayList>
    </div>
  );
}

export default App;
