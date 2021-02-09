import React from 'react'
import Layout from 'Shared/Components/Layout';

const UserAdd = (props) => {
    return (
        <div>
            <div className='content-card'>
                <div className='content-card__header'>
                    Add new user
            </div>
                <div className='content-card__main'>
                    asdasdasdasdasd
            </div>
            </div>
        </div>

    )
}

UserAdd.layout = page => (<Layout children={page} />);

export default UserAdd;
