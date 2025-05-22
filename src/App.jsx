import { useState } from 'react'
function App() {
  const [color, setColor] = useState('linen')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className='cursor-pointer outline-none px-4 py-1 rounded-md shadow-lg text-black' style={{backgroundColor: 'linen'}} onClick={() => setColor('linen')}>Linen</button>
          <button className='cursor-pointer outline-none px-4 py-1 rounded-md shadow-lg text-black' style={{backgroundColor: 'cyan'}} onClick={() => setColor('cyan')}>Cyan</button>
          <button className='cursor-pointer outline-none px-4 py-1 rounded-md shadow-lg text-white' style={{backgroundColor: 'green'}} onClick={() => setColor('green')}>Green</button>
          <button className='cursor-pointer outline-none px-4 py-1 rounded-md shadow-lg text-white' style={{backgroundColor: 'black'}} onClick={() => setColor('black')}>Black</button>
          <button className='cursor-pointer outline-none px-4 py-1 rounded-md shadow-lg text-white' style={{backgroundColor: 'purple'}} onClick={() => setColor('purple')}>Purple</button>
          <button className='cursor-pointer outline-none px-4 py-1 rounded-md shadow-lg text-white' style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}>blue</button>
          <button className='cursor-pointer outline-none px-4 py-1 rounded-md shadow-lg text-white' style={{backgroundColor: 'red'}} onClick={() => setColor('red')}>Red</button>
          <button className='cursor-pointer outline-none px-4 py-1 rounded-md shadow-lg text-black' style={{backgroundColor: 'pink'}} onClick={() => setColor('pink')}>Pink</button>
          <button className='cursor-pointer outline-none px-4 py-1 rounded-md shadow-lg text-black' style={{backgroundColor: 'violet'}} onClick={() => setColor('violet')}>Violet</button>
          <button className='cursor-pointer outline-none px-4 py-1 rounded-md shadow-lg text-black' style={{backgroundColor: 'yellow'}} onClick={() => setColor('yellow')}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
