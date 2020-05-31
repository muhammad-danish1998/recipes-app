import React from 'react'

const RecipeItem = props => {
    const {name , image , ingredientLines} = props;
    return (
        
                        <div className='card py-2 text-center'>
                            <div className='card-body'>
                            <img src = {image} 
                            className='img-fluif w-50 mx-auto rounded-circle'/>
                            <h5>{name}</h5>
                            </div>
                            <ul className='list-group list-group-flush'>
                                {ingredientLines.map(ingredient =>(
                                    <li className='list-group-item'>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    
    )
}

export default RecipeItem
