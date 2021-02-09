import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Header = (props) => {
    return (
        <>
            <div className="w-full flex flex-wrap h-12 bg-white text-metronic-content pl-8 content-center space-x-4 border-b-2 border-fuchsia-600">
                <div>
                    <InertiaLink href=''>
                        Dashboard
                    </InertiaLink>
                </div>
                <div>Documentaions</div>
                <div>Policy</div>
            </div>
        </>
    )
}

export default Header;
