import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/*import App from './App.jsx'*/
import Welcome from "./components/functional/index.jsx";
import Welcome_class  from './components/class/index.jsx';
import Props_in_compo from "./components/Props_in_compo/Index.jsx";
import Props_Dest from './components/Props_destructuring/Index.jsx';
import App from './components/children_props/App.jsx';
import App_Map from './components/Map_method/App_Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Welcome/>
    <Welcome_class/>
    <Props_in_compo name="Saikiran"/>
    <Props_Dest name="Sachin" age={22}/>
    <App/>
    <App_Map />
  </StrictMode>,
)
