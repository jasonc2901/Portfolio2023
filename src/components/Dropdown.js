import { React, useState } from 'react'
import { DropdownItems } from '../data/DropdownItems'
import { Link } from 'react-router-dom';
import '../styles/components.styles.css';

export default function Dropdown() {
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const handleDropdownClick = () => setDropdownClicked(!dropdownClicked);

  return (
    <>
        <ul onClick={handleDropdownClick} className={dropdownClicked ? 'dropdown__menu active' : 'dropdown__menu'}>
            {DropdownItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.class} to={item.path} onClick={() => setDropdownClicked(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </>
  )
}