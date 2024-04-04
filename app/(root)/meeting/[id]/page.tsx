import React from 'react'

function Meeting({ params }: { params: { id: string } }) {
  return (
    <div>
      Metting Room: #{params.id}
    </div>
  )
}

export default Meeting
