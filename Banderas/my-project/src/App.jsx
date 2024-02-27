import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { IoMoonOutline } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import CountryCard from '../Components/CountryCard';
import dbCountries from '../../../rest-countries-api-with-color-theme-switcher-master/data.json'

// const flags = ["Germany", "United States of America","Brazil", "Iceland"]
function App() {

  const [count, setCount] = useState(0)
  const [region, setRegion] = useState()
  const [countries, setCountries] = useState([])

  const handleRegion = (e) => {
    setRegion(e.target.value)
  }
  console.log(dbCountries)
  const keysArray = Object.keys(dbCountries)
  console.log(keysArray)
  console.log(dbCountries[2])

  const countriesArray = Object.keys(dbCountries).map((key) => {
    return { ...dbCountries[key], key }
  })
  console.log(countriesArray)

  return (
    <>
      <header className="flex px-2 py-4 m-0 justify-between font-bold border border-solid">
        <h1 className='text-xl px-4'>Where in the world?</h1>
        <button className='flex px-4 gap-2 items-center'> <IoMoonOutline />
          Dark Mode</button>
      </header >

      <div className='bg-[#fafafa]'>
        <div className='flex justify-between px-20 py-8'>
          <div className='flex items-center bg-white pl-6 pr-60 shadow-md gap-5 rounded-sm'>

            <HiMagnifyingGlass />
            <input className='h-full' type="text" name="" id="" placeholder='Search for a country...' />
          </div>


          <select className='p-4 rounded-sm bg-grey-500' name="dropdown" id="dropdown" value="Region" onChange={handleRegion}>
            <option className='p-2' >Filter by Region</option>
            <option className='p-2' value="Africa">Africa</option>
            <option className='p-2' value="America">America</option>
            <option className='p-2' value="Asia">Asia</option>
            <option className='p-2' value="Europe">Europe</option>
            <option className='p-2' value="Oceania">Oceania</option>

          </select>

        </div>
        <section className='countryCards bg-[#fafafa] grid grid-cols-4 rounded-md gap-20 px-20'>
          {dbCountries.map((countryData) => {


            <CountryCard country={countryData} />
          })}


        </section>
      </div>

    </>
  )
}

export default App
