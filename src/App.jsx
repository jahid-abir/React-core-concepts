import './App.css'
import Counter from './counter'
import Photos from './Photos'
import Team from './Team'

function App() {
  function handleClick(){
    alert('1st button clicked')
  }
  const handleClick2 =() =>{
    alert('2nd button clicked')
  }
  const handleClick3 =(num) =>{
    alert(`button clicked ${num}`)
  }
  return (
    <>
      <Photos></Photos>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>first button</button>
      <button onClick={handleClick2}>second</button>
      <button onClick={()=>alert('3rd button clicked')}>third</button>
      <button onClick={() => handleClick3(4)}>fourth</button>
      <h3>React Core concepts part2</h3>
    </>
  )
}

export default App
