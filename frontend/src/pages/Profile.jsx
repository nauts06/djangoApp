import React, { useEffect } from 'react'

import api from '../api/axios'

const Profile = () => {


const getProfile = async () =>{

    const response = await api.get("/profile/")

    console.log(response.data  )
}

useEffect(() => {
  getProfile()
}, [])


  return (
    <div>Profile</div>
  )
}

export default Profile