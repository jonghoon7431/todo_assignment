function Done(item,removeContent, finishOrNot){
    <div key={item.id} className='done_card'>
    <h2>{todoTitle}</h2>
    <h3>{todoContent}</h3>
    <div className='done_button'>
      <button onClick={()=>removeContent(item.id)}>삭제</button>
      <button onClick={()=>finishOrNot(item.id)}>완료 취소</button>
    </div>
  </div>
}

export default Done;