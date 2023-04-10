'use client'

import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"
import { redirect } from 'next/navigation';
import React from 'react'

export default function MainLayoutContent() 
{
    
    return redirect('/login')
}
