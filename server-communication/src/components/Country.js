import { useEffect } from 'react'
import axios from 'axios'

const Country = ({countries, setCountries}) => {

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                console.log(response.data)  
                setCountries(response.data)
            })
    })
    console.log(countries)
    return (
        <div>
          <ul>
            {countries.map(country =>
              <li key={country.id}>{country.name}</li>
            )}
          </ul>
        </div>
      )
}

export default Country