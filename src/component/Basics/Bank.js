import React, { useState } from 'react'
import"./style.css";
import Menu from './menuApi';
import MenuCard from "./MenuCard";



const uniqueList = [
  ...new Set(
    Menu.map((curElem) =>{
      return curElem.category;
    }
    )
  ),
];

console.log(uniqueList);








const Bank = () => {

    const [menuData, setMenuData] = useState(Menu);
    
    const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
    }
    );
    setMenuData(updatedList);
};







  return (
    <>
      
      <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item' onClick={() => setMenuData(Menu)}>Home</button>
            <button className='btn-group__item' onClick={() => filterItem("Personel")}>Personal</button>
            <button className='btn-group__item'onClick={() => filterItem("Business")}>Business</button>
            <button className='btn-group__item' onClick={() => filterItem("Loans")}>Loans</button>
            <button className='btn-group__item'onClick={() => filterItem("NRI")}>NRI</button>
            <button className='btn-group__item' onClick={() => filterItem("About us")}>About us</button>
            <button className='btn-group__item' onClick={() => filterItem("Support")}>Support</button>
            <button className='btn-group__item'>Dil Se Open</button>
        </div>
      </nav>





     <MenuCard menuData={menuData} />

    </>
  )
}

export default Bank
