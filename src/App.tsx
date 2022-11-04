import { Screen } from './Components/Screen';
import { Keyboard } from './Components/Keyboard';
import {NumberProvider } from './Contexts/NumberContext';


function App() {
  return (
    <NumberProvider>
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <Screen/>
      <Keyboard/>
    </div>
    </NumberProvider>
  )
}

export default App
