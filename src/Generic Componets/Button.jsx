import React from 'react'

const Button = ({identifire}) => {
  return (
    <div>
        <div className="submit text-center my-6 bg-indigo-500 hover:bg-indigo-600 cursor-pointer rounded text-slate-50 shadow ">
          <input type="submit" value={identifire} className="p-2 cursor-pointer tracking-wider block w-full" />
        </div>
    </div>
  )
}

export default Button