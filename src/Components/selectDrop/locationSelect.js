import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../selectDrop/locationSelect.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationPinIcon from '@mui/icons-material/LocationOnOutlined';

const LocationSelect = () => {
  const [countries, setCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Your Location');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/');
        if (response.data?.data) {
          setCountries(response.data.data.map((country) => country.country));
        }
      } catch (error) {
        console.error('Failed to fetch countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="locationSelect">
      <div className="locationselectDrop d-flex align-items-center" onClick={toggleDropdown}>
        <LocationPinIcon className="locationIcon" />
  {selectedCountry}
  <KeyboardArrowDownIcon className="arrowIcon ms-1" />
</div>

      {isOpen && (
        <ul className="dropdownContent">
          {countries.map((country, idx) => (
            <li key={idx} onClick={() => handleSelect(country)}>
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSelect;
