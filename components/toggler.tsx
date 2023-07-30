// components/toggler.tsx
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//import { useTheme } from '../src/Context/themeContext'; // Adjust the import path based on your project structure
import Switch from 'react-switch';
const Toggler = (props:any) => {
    const [checked, setChecked] = useState(true);
    const handleChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setChecked(checked);
        props.callback(checked);
      };

      

  return (
    <div className='mt-4 d-flex'>
    <Switch onChange={handleChange} checked={checked} />
    <p className={`fs-12 mt-1 ml-2 ${checked? "text-light": "text-dark"}`}> {checked ? 'dark Mode' : 'light Mode'}</p> 
  </div>
  );
}; 

export default Toggler;
