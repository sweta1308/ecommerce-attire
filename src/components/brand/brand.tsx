import React from 'react';
import { useNavigate } from 'react-router';
import { useFilters } from '../../context/filterContext';
import './brand.css';

import {
  hm,
  sassafras,
  levis,
  urbanic,
  zara,
  dolce,
  roadster,
  tokyoTalkies,
} from '../../assets';

const Brand = () => {
  const { filterDispatch }: any = useFilters();
  const navigate = useNavigate();

  const handleBrandClick = (brand: string) => {
    filterDispatch({ type: 'clear_filters' });
    filterDispatch({ type: 'filter_by_brands', payload: brand });
    navigate('/products');
  };

  return (
    <>
      <h2>Brands ✨</h2>

      <div className="brand">
        <img src={hm} alt="hm" onClick={() => handleBrandClick('H&M')} />
        <img
          src={sassafras}
          alt="sassafras"
          onClick={() => handleBrandClick('Sassafras')}
        />
        <img
          src={levis}
          alt="levis"
          onClick={() => handleBrandClick('Levis')}
        />
        <img
          src={urbanic}
          alt="urbanic"
          onClick={() => handleBrandClick('Urbanic')}
        />
        <img src={zara} alt="zara" onClick={() => handleBrandClick('Zara')} />
        <img
          src={dolce}
          alt="dolce"
          onClick={() => handleBrandClick('Dolce & Gabbana')}
        />
        <img
          src={roadster}
          alt="roadster"
          onClick={() => handleBrandClick('Roadster')}
        />
        <img
          src={tokyoTalkies}
          alt="tokyoTalkies"
          onClick={() => handleBrandClick('Tokyo Talkies')}
        />
      </div>
    </>
  );
};

export default Brand;
