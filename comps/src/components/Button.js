
import className from "classnames";


function Button({
    children,
    success,
    primary,
    secondary,
    warning,
    danger,
    outlined,
    rounded,
   ...rest

}){

 


    const classes = className(rest.className,'flex item-center px-3 py-1.5 border',{
        'bg-blue-500':primary,
        'border-yellow-500':warning,        
        'border-red-500':danger,
        'border-green-500':success,
        'border-gray-500':secondary,
        'rounded-full':rounded,
        'bg-white':outlined,
        'text-blue-500':outlined && primary,
        'text-yellow-500':outlined && warning,
        'text-red-500':outlined && danger,
        'text-green-500':outlined && success,
        'text-gray-500':outlined && secondary    
    });

    return (<button {...rest} className={classes}>{children}</button>);

}


export default Button;