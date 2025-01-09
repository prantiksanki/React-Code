import { useState , useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [noAllowed , setNoAllowed] = useState(false) ; 
  const [charAllowed , setCharAllowed] = useState(false) ; 
  const [password , setPassword] = useState("") ;

  //  SYNTAX -----------     const passwordGenerator = useCallback(fn , [length , noAllowed , setLength , charAllowed , setPassword])
  
  const passwordRef = useRef(null) ; 

  const passwordGenerator = useCallback(() =>
    {
      let pass = "" ; 
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
      
      if(noAllowed) 
      {
        str += "0123456789" ; 
      }
      if(charAllowed)
      {
        str+= "!@#$%^&*()_+<>{}[]:;|\?/" ;
      }

      for(let i = 1 ; i<= length ; i++)
      {
        let char = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(char) ;
      }
      setPassword(pass) ;

    } , [length , noAllowed , setLength , charAllowed , setPassword])
 

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select() ;
      passwordRef.current?.setSelectionRange(0,length) ;
      window.navigator.clipboard.writeText(password)
    } ,  [password])

    useEffect(() =>{
      passwordGenerator() ;
    } , [length , noAllowed , charAllowed , passwordGenerator])





  return (
    <>
      <h1 className="text-4xl text-center text-white font-bold my-6">Password Generator</h1>
      <div className="w-full max-w-md mx-auto bg-gray-800 shadow-lg rounded-lg p-6 text-orange-500">
      <div className="flex items-center bg-gray-700 rounded-lg shadow-inner overflow-hidden mb-6">
      <input 
      type="text" 
      value={password} 
      className="outline-none w-full py-2 px-4 bg-transparent text-white placeholder-gray-400" 
      placeholder="Your Password" 
      readOnly 
      ref={passwordRef}
       />

      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>

      </div>

      <div className='flex text-sm gap-x-2'>
          <div className="flex text-sm gap-x-2 items-center mb-4">
          <label className="text-white">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="flex text-sm gap-x-2 items-center mb-4">
          <label className="text-white">Number</label>
          <input
            type="checkbox"
            defaultChecked={noAllowed}
            id='noInput'
            className="cursor-pointer w-full"
            onChange={() => setNoAllowed((prev) => !prev)}
          />
        </div>

        <div className="flex text-sm gap-x-2 items-center mb-4">
          <label className="text-white">Characters</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            className="cursor-pointer w-full"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
        </div>

      </div>
      </div>

    </>
  )
}

export default App
