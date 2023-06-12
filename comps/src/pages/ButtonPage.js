
import {GoAlert,GoArchive,GoArrowSmallLeft,GoArrowSmallDown,GoBeaker} from 'react-icons/go'


import Button from "../components/Button";


function ButtonPage(){


    const handleClick = ()=>{
        console.log("Click !!");
    }

    return <div>
        <div>
            <Button primary  outlined rounded className="mb-5" onClick={handleClick} >
            <GoAlert/>Click me</Button>
        </div>
        
        <div>
            <Button warning  outlined rounded onMouseEnter={handleClick}>
            <GoArchive/>See deals</Button>
        </div>
        
        <div>
            <Button success  outlined rounded>
                <GoArrowSmallLeft/>hide ads</Button>
        </div>
        
        <div>
            <Button danger  outlined rounded>
                <GoArrowSmallDown/>work on</Button>
        </div>
        
        <div>
            <Button secondary  outlined rounded>
                <GoBeaker/>go back</Button>
        </div>
    </div>
}

export default ButtonPage;