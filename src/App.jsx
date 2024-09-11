import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState("");
  // console.log(num)

  const symb = [
    {
      id: 1,
      btn: "=",
      bgcolor: "bg-[#F5F7FF]",
      white: false
    },
    {
      id: 2,
      btn: "⌫",
      bgcolor: "bg-[#F5F7FF]",
      white: false
    },

    {
      id: 3,
      btn: "CE",
      bgcolor: "bg-[#F5F7FF]",
      white: false
    },

    {
      id: 4,
      btn: "C",
      bgcolor: "bg-[#1F2B54]",
      white: true
    },
    {
      id: 5,
      btn: "7",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 6,
      btn: "8",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 7,
      btn: "9",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 8,
      btn: "-",
      bgcolor: "bg-[#FF445A]",
      white: true
    },
    {
      id: 9,
      btn: "4",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 10,
      btn: "5",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 11,
      btn: "6",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 12,
      btn: "/",
      bgcolor: "bg-[#2388FF]",
      white: true
    },
    {
      id: 13,
      btn: "1",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 14,
      btn: "2",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 15,
      btn: "3",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 16,
      btn: "*",
      bgcolor: "bg-[#FFC804]",
      white: true
    },
    {
      id: 17,
      btn: ".",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 18,
      btn: "0",
      bgcolor: "bg-[#D8DDF0]",
      white: false
    },
    {
      id: 19,
      btn: "00",
      bgcolor: "bg-[#F5F7FF]",
      white: false
    },
    {
      id: 20,
      btn: "+",
      bgcolor: "bg-[#63DE77]",
      white: true
    }]
  const handleClick = (btn) => {
    try {
      if(btn==="C"||btn==="CE"){
        setNum("")
     }else if(btn==='⌫'){
      const newNum =  num.slice(0,-1)
      setNum(newNum)
     }else if(btn==="="){
       if(num){
         const rs = { eval }
       const result = rs.eval(num)
       setNum(result)
       }
     }else{
       setNum(num+btn)
     }
    } catch (error) {
      alert("please enter a vail Number")
    }
    
  }

  const handleChange = (e) => {
    const val = e.target.value
    const regex = /^[0-9+\-*/.]+$/
    if (regex.test(val)) {
      setNum(val)
      console.log(num)
    }
    console.log(e.key, val)
  }
  const handleKey = (e) => {
    // console.log(e.key)
    if (e.key === "Enter") {
      const math = { eval }
      const result = math.eval(num)
      setNum(result)
      // console.log(result)
    }
  }
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#F5F7FF]'>

      <div className='w-[300px] bg-[#FFFFFF] shadow-xl py-4 px-4 rounded-2xl flex flex-col items-center' >
        <input
          className='bg-[#2388FF] text-[#FFFFFF] outline-none rounded-full px-3 py-2 text-2xl
         font-bold w-[260px] text-right'
          value={num}
          onInput={(e) => handleChange(e)}
          onKeyDown={(e) => handleKey(e)}
          type="text" placeholder='0' />

        <ul className=' grid grid-cols-4 w-full h-3/4 mt-10 gap-4 '>
          {symb && symb.map(({ id, bgcolor, btn, white }) => (
            <li
              key={id}
              onClick={() => handleClick(btn)}
              className={`${bgcolor}  h-14 w-14 rounded-full ${white ? "text-white" : "text-[#6E7691]"}
               font-bold text-2xl  cursor-pointer flex justify-center items-center shadow-lg select-none 
                transition duration-200 ease-in-out transform  active:scale-95`}
            >
              {btn}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default App
