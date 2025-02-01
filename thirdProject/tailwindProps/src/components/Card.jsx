import React from 'react'

function Card({username,btntxt="click me"}) {
    
    
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mb-4">
        <img
          src="https://blog.logrocket.com/wp-content/uploads/2022/04/adding-custom-fonts-react-native.png"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200 "
          >
             {btntxt} 
          </button>
        </div>
      </div>
  )
}

export default Card