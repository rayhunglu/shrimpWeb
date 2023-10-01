import React from 'react';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Awards from '../components/Awards';
import Products from '../components/Products';
import ContactInfo from '../components/ContactInfo';

export default function Main() {
  return (
    <div className="">
      <Welcome/>
      <About/>
      <Awards/>
      <Products/>
      <ContactInfo/>
    </div>

  );
}
