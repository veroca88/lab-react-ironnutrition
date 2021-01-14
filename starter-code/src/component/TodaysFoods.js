import React from 'react'

const TodaysFoods = ({name, cal, quantity, id, deleteIngredient}) => {
    return <li>{quantity} {name} = {cal} calories
    <span onClick={deleteIngredient} id={id}><i className="fas fa-trash"></i></span>
     </li>
}

export default TodaysFoods