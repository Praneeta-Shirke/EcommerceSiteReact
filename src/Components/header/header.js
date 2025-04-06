import React, { useState, useRef, useEffect } from 'react';
import '../header/header.css';

import Logo from '../../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Select from '../selectDrop/select';
import { Padding } from '@mui/icons-material';

const Header =()=>{
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
    return(
        <>
        <header>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-sm-2'>
                        <img src={Logo} alt="Logo"  style={{ maxWidth: '100%', maxHeight: '70%', objectFit: 'contain' }} />
                    </div>
                    {/*Header Search starts in this div*/}
                    <div className='col-sm-5'>
                        <div className='headerSearch d-flex align-items-center  position-relative'>
                        <div ref={dropdownRef} className="dropdownWrapper position-relative">
                            <div className='selectDrop cursor' 
                            onClick={() => setShowDropdown(prev => !prev)}>
                                 All Categories         
                                 <KeyboardArrowDownIcon className="arrowIcon"/>
                            </div>
                            {showDropdown && <Select />}
                        </div>
                            <div className="search">
                                <input type='text' placeholder="Search for items.."/>
                                <SearchIcon className="searchIcon cursor"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )

}

export default Header;
