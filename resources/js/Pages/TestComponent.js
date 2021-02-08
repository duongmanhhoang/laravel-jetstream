import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react';
import Layout from './Layout';
import NestedLayout from './NestedLayout';
import { Inertia } from '@inertiajs/inertia';

const TestComponent = (props) => {
    const onClickBtn = () => {
        console.log(123123);
        return Inertia.get('/test2');
    };

    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={onClickBtn}> asdasd</button>
           
        </div>
        
    )
}

TestComponent.layout = page => (
    <Layout title="Welcome">
      <NestedLayout children={page} />
    </Layout>
  )

export default TestComponent;
