import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center w-screen h-screen bg-[#121212]'>
        <div className='w-[90%] h-[80%] bg-[#1B1B1B] rounded-md py-10 px-7'>

          {/* Heading  */}
          <div>
            <h2 className='text-white text-xl'>Transactions</h2>
            <p className='text-gray-400 text-sm'>A list of transactions on Starknet</p>
          </div>

          {/* Tabs  */}
          <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select your country</label>
    <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>All</option>
        <option>declare</option>
        <option>deploy</option>
        <option>deploy_ccount</option>
        <option>invoke</option>
        <option>I1_handler</option>
    </select>
</div>
<ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
    <li class="w-4/5 focus-within:z-10">
        <a href="#" class="inline-block w-4/5 p-1 text-gray-900 border border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:text-white">All</a>
    </li>
    <li class="w-4/5 focus-within:z-10">
        <a href="#" class="inline-block w-4/5 p-1 border border-gray-200 dark:border-gray-700 hover:text-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:text-white">declare</a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-4/5 p-1 border border-gray-200 dark:border-gray-700 hover:text-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:text-white">deploy</a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-4/5 p-1 border border-gray-200 dark:border-gray-700 hover:text-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:text-white">deploy_ccount</a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-4/5 p-1 border border-gray-200 dark:border-gray-700 hover:text-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:text-white">invoke</a>
    </li>
    <li class="w-full focus-within:z-10">
        <a href="#" class="inline-block w-4/5 p-1 border border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 focus:ring-4 focus:outline-none dark:text-white">I1_handler</a>
    </li>
</ul>



        </div>
      </div>

    </>
  )
}

export default App
