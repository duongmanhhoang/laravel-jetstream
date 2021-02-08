import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const NestedLayout = (props) => {
    console.log('nested: ' + props);
    return (
        <div>
            Nested
            <article>{props.children}</article>
        </div>
    )
}

export default NestedLayout;
