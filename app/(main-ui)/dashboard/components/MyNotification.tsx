'use client'

import { Notification } from '@/components/Notification/Notification'
import appContext from '@/context/appContext'
import React, { useContext } from 'react'

export const MyNotification = () => 
{
  const{showNoti,setShowNoti}=useContext(appContext)

  return (
    <Notification noti={showNoti} setNoti={setShowNoti} />
  )
}
