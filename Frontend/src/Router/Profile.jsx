import React from 'react'
import SearchResult from '../components/Plans/SearchResult'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Profile = () => {
  const [data, setData] = useState({email: ''})

  const navigate = useNavigate()


  return (
    <>
    <SearchResult />
    </>
  )
}

export default React.memo(Profile)