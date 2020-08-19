import React from 'react'

export default function TeamMembers(props) {
  const { details } = props

  if (!details) {
    return <h3>Loading..</h3>
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}
