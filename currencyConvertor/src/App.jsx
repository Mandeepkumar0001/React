import { useState } from 'react'
import {InputBox} from './components'
import { useCurrencyInfo } from '/src/hooks/useCurrencyInHooks.js';

import './App.css'

function App() {
  const [amount , setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount]= useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  
  return (
    <div 
    className='flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover'
    style={
      {
        // backgroundImage: `url('${BackgroundImage}')`,
      }
    }
    >
      <div className='w-full'>
        <div 
          className='w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30'>
          <form 
          onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
          >
            <div className='w-full mb-1'>
              <InputBox 
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              type='button'
              className='absolute px-2 text-white -translate-x-1/2 translate-y-1/2 bg-blue-600 border-2 border-white rounded-md py-0.5 left-1/2'
              onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mb-4 mt-t'>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency)=>setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button type="submit"
            className='w-full px-4 py-3 text-white bg-blue-600 rounded-lg'
            >
              convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
