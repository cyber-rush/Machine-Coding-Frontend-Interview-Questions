import React, { useEffect, useState } from 'react'
import { URL } from './data'

const App = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        const sortedData = data.data.sort((a, b) => a.first_name.localeCompare(b.first_name))
        setTableData(sortedData)
      })
      .catch(err => console.log(err))

  }, [])

  return (
    <div>
      <table>
        <thead></thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        <tbody>

          {
            tableData.map(({ first_name, last_name, email, id }) => (
              <tr key={id}>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default App
