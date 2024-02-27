import React from "react"
const CountryCard = ({ countryData }) => {
    console.log(countryData)
    return (
        <div className='card gap-5 flex flex-col  bg-white rounded-md shadow-md'>
            <img className='rounded-t-md' src={countryData.flags.png} alt="" />
            <h3 className='font-bold pl-6 pb-6'>{countryData.name.common}</h3>
        </div>
    )
}

export default CountryCard