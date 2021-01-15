import React from 'react';

const Child = (Props) =>{

    return (
        <div>
            {
                Props.value.map((text) => {
                    return (
                        <li className="my-text">
                            {text}
                        </li>
                    )

                })
            }
        </div>
    )

}

export default Child




