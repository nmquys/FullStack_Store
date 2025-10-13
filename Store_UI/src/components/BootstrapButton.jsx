import React from 'react'

export default function BootstrapButton({ text, type }) 
{
  return (
    <button className={`btn btn-${primary}`}>{text}</button>
  )
}
