import React from 'react'

export default function ArrowLeft(props) {
  return (
    <img className='w-5 h-5 p-1 bg-slate-200 rotate-180 rounded-lg cursor-pointer' src="../public/images/Flecha.svg" alt=""  onClick={props.onClick}/>
  )
}
