import React, {useEffect, useState} from 'react'

function App() {

  const [bedata, setbedata] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      res => res.json()
    ).then(
      data => {
        setbedata(data)
      }
    )
  }, [])

  return (
    <div>
      <h1>P</h1>

      <pre>
      </pre>

      {(typeof bedata.users === 'undefined') ? (
        <p>Loding....</p>
      ): (
        bedata.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}

export default App