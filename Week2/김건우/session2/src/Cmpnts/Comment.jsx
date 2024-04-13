import React from 'react';

function Comment(props){
    return(
      <div>
      {
        props.cmt.map((cmt, idx)=>{
          return (
            <div className='cmt-box' key={idx}>
              <div className = 'cmt' >
                <p></p>
                <b>{cmt.id} </b><p></p>
                {cmt.body}<p></p>
              </div>
              <div>
                <button onClick={()=>{props.pushLike(idx)}}>👍</button>
                <b>{props.likes[idx]}</b>
                <button onClick={()=>{
                  props.openModal()
                }}>edit</button>
              </div>
            </div>
          )
        })
      }
      </div>
    )
}
export default Comment;