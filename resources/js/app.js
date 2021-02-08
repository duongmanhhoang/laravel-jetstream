import { App } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';
import 'tailwindcss/tailwind.css';

const el = document.getElementById('app')

render(
  <App
    initialPage={JSON.parse(el.dataset.page)}
    resolveComponent= {name => import(`./Pages/${name}`)
    .then(({ default: page }) => {
      page.layout = page.layout === undefined ? Layout : page.layout;
      return page
    })}
  />,
  el
)
