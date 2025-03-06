import React from 'react'
import { useEffect } from 'react'

const Update = () => {

    useEffect(() => {
        document.title = "Update-document"
    }, [])

  return (
    <div>Update-document</div>
  )
}

export default Update