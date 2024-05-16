import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header(){
  return(
    <div className='header'>
      <h1>My Todo List</h1>
    </div>
  )
}


function App() {
  const initialState = [
    {id:0, todoTitle: "", todoContent: "", isDone: false}
  ]
  
  const [todo, setTodo]= useState([])
  const [todoTitle, setTodoTitle] = useState("")
  const [todoContent, setTodoContent] = useState("")

  const addContent = (e)=>{
    e.preventDefault()
    if(!todoTitle || !todoContent){
      alert("제목과 내용 모두 입력해주세요")
      return;
    }
    setTodo([...todo, {id: Date.now(), todoTitle, todoContent, isDone : false}]);
    setTodoTitle("")
    setTodoContent("")
  }

  const removeContent = (id)=>{
    setTodo(todo.filter((e)=> e.id !== id))
  }


  const finishOrNot=(id)=>{
    setTodo(
      todo.map((item)=> item.id === id ? {...item, isDone: !item.isDone} : item)
      )}
  

  return (
  <>
    <Header></Header>
    <div className='input_area'>
        <form onSubmit={addContent}>
          <label>제목: </label>
          <input type="text" 
          placeholder="제목" 
          value={todoTitle} 
          onChange={(event)=>setTodoTitle(event.target.value)} />

          <label>내용: </label>
          <input type="text" 
          placeholder="내용" 
          value={todoContent} 
          onChange={(event)=>setTodoContent(event.target.value)}/>
          <button type='submit'>추가</button>
        </form>
    </div>



    <h2 className='sub_title'>on going..⏱</h2>
    <div className='card_container'> 
      {todo
      .filter((e)=>!e.isDone)
      .map(({id,todoTitle, todoContent,isDone})=>(
          <div key={id} className='on_going_card'>
            <h2>{todoTitle}</h2>
            <h3>{todoContent}</h3>
          <div className='on_going_button'>
            <button onClick={()=>removeContent(id)}>삭제</button>
            <button onClick={()=>finishOrNot(id)}>완료</button>
          </div>
      </div>
        )
      )}
    </div>
    <h2 className='sub_title'>Done !🎉</h2>
    <div className='card_container'> 
    {todo
      .filter((e)=>e.isDone)
      .map(({id,todoTitle, todoContent,isDone})=>(
          <div key={id} className='on_going_card'>
            <h2>{todoTitle}</h2>
            <h3>{todoContent}</h3>
          <div className='on_going_button'>
            <button onClick={()=>removeContent(id)}>삭제</button>
            <button onClick={()=>finishOrNot(id)}>완료 취소</button>
          </div>
      </div>
        )
      )}
    </div>
  </>
  )
}



export default App
