import React from 'react'

export const Table = ({data, loading}) => {
  if(loading) {
    return <h2>Loading...</h2>
  }
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">index</th>
          <th scope="col">name</th>
          <th scope="col">picture</th>
          <th scope="col">tags</th>
          <th scope="col">isActive</th>

        </tr>
      </thead>
      <tbody>
        {data.map(d => {
         return <tr key={d._id}>
            <td>{d.index}</td>
            <td>{d.name}</td>
            <td>{d.picture}</td>
            <td>{d.tags[0]}, {d.tags[1]}</td>
            <td>{String(d.isActive)}</td>
          </tr>
        })}
      </tbody>     
    </table>
  )
}
