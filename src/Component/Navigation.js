import React from 'react'
import '../Style/Navigation.css'

function Navigation() {
    return (
        <div class="nav_bar_container">
        <ul>
            <li class="nav_items"><i class="fa fa-list" aria-hidden="true"></i>Nanigation</li>
            <li class="nav_items"><i class="fa fa-home" aria-hidden="true"></i>Home</li>
            <li class="nav_items"><i class="fa fa-bell" aria-hidden="true"></i>Notifications</li>
            <li class="nav_items"><i class="fa fa-star" aria-hidden="true"></i>More</li>
            <li class="nav_items"><i class="fa fa-user-circle-o" aria-hidden="true"></i>User</li>
        </ul>
    </div>
    )
}

export default Navigation
