import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <div className='bg-metronic-sidebar-title text-white font-black text-lg pt-4 pb-3 pl-8'>
                Management
           </div>
            <div className='sidebar__list pl-8 text-metronic-white mt-8 w-full'>
                <div>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="sidebar__list--item">
                        <InertiaLink to='/'>User management</InertiaLink>
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar;
