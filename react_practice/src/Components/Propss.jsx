import React from 'react'

// export default function Propss(props) {     props.name   props.price   --> one way data binding from App to Component
// export default function Propss({name, price})  // destructuring props
//     const handleProps = () => {
//         alert("Movie Booked");
//     }
//     return (
//         <div>
//             <h1>Movie Name : {name} </h1>
//             <h2>Movie Price : {price}</h2>
//             <button onClick={handleProps}>Buy Now</button>
//         </div>
//     );
// }

export default function Propss({name, price, handleProps}){    // trick--> from component to App
    return(
        <div>
            <h1> Movie Name : {name}</h1>
            <h2> Movie Peice : {price}</h2>
            <button onClick={() => handleProps("Mani")}>Buy Now</button>
        </div>
    );
}

