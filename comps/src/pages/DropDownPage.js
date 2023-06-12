import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropDownPage(){

const [selection,setSelection]= useState(null);

const handleSelect = (option)=>{
    setSelection(option)
};

const options = 
    [
        {label :'Red' ,value:'red' },
        {label :'Green' ,value:'green' },
        {label :'Yellow' ,value:'yellow' }
];


return <Dropdown options={options} value={selection} onChange={handleSelect}/>;
   
}

export default DropDownPage;