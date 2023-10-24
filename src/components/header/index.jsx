import './style.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addIsViewClass } from '../../store/reducers/tittleSlice'

export const Header = () => {

    let [isView , setIsView] = useState(false)

    const dispatch = useDispatch()

     function handleClick (){
        setIsView(isView = true)
        dispatch(addIsViewClass(isView))
     }

    return (
        <div className='header'>
            <ul>
                <li>
                    <NavLink to={'/'}>Form Constructor</NavLink>
                </li>
                <li onClick={handleClick}>
                    <NavLink to={'/page_details'}>Form Details</NavLink>
                </li>
            </ul>
        </div>
    )
}