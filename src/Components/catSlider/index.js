import React from 'react';
import ad1 from '../../assets/images/ad1.jpg';
import ad2 from '../../assets/images/ad2.jpg';
import ad3 from '../../assets/images/ad3.jpg';
import ad4 from '../../assets/images/ad4.jpg';
import ad5 from '../../assets/images/ad5.jpg';
import '../catSlider/style.css'; // your CSS file

const AdBanner = () => {
  return (
    <>
            <h2 className='mb-4 container-fluid py-4'>Featured</h2>
    <section className="ads-row">
      <div className='container-fluid'>
      <img src={ad1} alt="Ad 1" className="ad-img" />
      <img src={ad2} alt="Ad 2" className="ad-img" />
      {/* <img src={ad3} alt="Ad 3" className="ad-img" /> */}
      <img src={ad4} alt="Ad 4" className="ad-img" />
      <img src={ad5} alt="Ad 5" className="ad-img" />
      </div>
    </section>
    </>
  );
};

export default AdBanner;
