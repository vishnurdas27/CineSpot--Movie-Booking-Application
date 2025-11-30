import React from 'react'
import { assets } from '../../assets/assets'
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'

const AdminSidebar = () => {

    const user = {
        firstName: 'Admin',
        lastName: 'User',
        imageUrl: assets.profile
    }

    const adminNavlinks = [
        {name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon},
        {naem: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon},
        {name: 'ListShows', path: '/admin/list-shows', icon: ListIcon},
        {name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon}
    ]

  return (
    <div>
      
    </div>
  )
}

export default AdminSidebar
