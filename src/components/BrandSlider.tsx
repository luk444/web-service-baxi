import React, { useEffect, useRef } from 'react';
import BaxiLogo from '../../dist/assets/baxilogo.webp';
import PeisaLogo from '../../dist/assets/peisalogo.webp';
import AristonLogo from '../../dist/assets/aristonlogo.webp';
import EutermaLogo from '../../dist/assets/eutermalogo.webp';
import CaldaiaLogo from '../../dist/assets/caldaialogo.webp';

const brands = [
  { name: 'Baxi', logo: BaxiLogo },
  { name: 'Peisa', logo: PeisaLogo },
  { name: 'Baxi', logo: BaxiLogo },
  { name: 'Ariston', logo: AristonLogo },
  { name: 'Baxi', logo: BaxiLogo },
  { name: 'Euterma', logo: EutermaLogo },
  { name: 'Baxi', logo: BaxiLogo },
  { name: 'Caldaia', logo: CaldaiaLogo },
];

const BrandSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scroll = () => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-md py-2 rounded-xl">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
        <div
          ref={sliderRef}
          className="flex overflow-hidden space-x-8"
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-none w-[136px] h-[96px] backdrop-blur rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                width={136}
                height={96}
                className="w-full h-full object-cover rounded-[1rem]"
                loading="lazy" // Carga diferida
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
