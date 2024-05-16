function OnGoing({item,removeContent, finishOrNot, }){
    return(
        <div key={item.id} className='on_going_card'>
        <h2>{todoTitle}</h2>
        <h3>{todoContent}</h3>
        <div className='on_going_button'>
          <button onClick={()=>removeContent(item.id)}>삭제</button>
          <button onClick={()=>finishOrNot(item.id)}>완료</button>
        </div>
      </div>
    )
}

export default OnGoing;