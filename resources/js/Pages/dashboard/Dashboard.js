import React from 'react'
import Layout from 'Shared/Components/Layout';

const Dashboard = (props) => {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

Dashboard.layout = page => (<Layout children={page} />);

export default Dashboard;
