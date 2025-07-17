import React from 'react';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import g5 from '../assets/g5.png';
import g6 from '../assets/g6.png';
import g7 from '../assets/g7.png';
import g8 from '../assets/g8.png';
import g9 from '../assets/g9.png';
import g10 from '../assets/g10.png';
import g11 from '../assets/g11.png';
import g12 from '../assets/g12.png';
import g13 from '../assets/g13.png';
import g14 from '../assets/g14.png';

const MasonryGallery = () => {
  return (
    <div className="bg-black text-white px-4 py-6 space-y-8">

      {/* Hàng 1: 2 hình, 1 to 1 nhỏ */}
      <div className="grid grid-cols-12 gap-2">
        <img src={g1} alt="g1" className="col-span-8 w-full object-cover" />
        <img src={g2} alt="g2" className="col-span-4 h-full object-cover" />
      </div>

      {/* Hàng 2: 3 hình bằng nhau */}
      <div className="grid grid-cols-3 gap-2">
        <img src={g3} alt="g3" className="w-full object-cover" />
        <img src={g4} alt="g4" className="w-full object-cover" />
        <img src={g5} alt="g5" className="w-full object-cover" />
      </div>

      {/* Bố cục chia ngang 2/3 */}
      <div className="grid grid-cols-12 gap-4">
        {/* Bên trái: 8/12 */}
        <div className="col-span-8 space-y-4">
          {/* Hình lớn trên */}
          <img src={g6} alt="g6" className="w-full object-cover" />

          {/* 2 hàng, mỗi hàng 2 hình nhỏ */}
          <div className="grid grid-cols-2 gap-2">
            <img src={g7} alt="g7" className="w-full object-cover" />
            <img src={g8} alt="g8" className="w-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img src={g9} alt="g9" className="w-full object-cover" />
            <img src={g10} alt="g10" className="w-full object-cover" />
          </div>
        </div>

        {/* Bên phải: 4/12 - ảnh dọc */}
        <div className="col-span-4 space-y-2">
          <img src={g11} alt="g11" className="w-full object-cover" />
          <img src={g12} alt="g12" className="w-full object-cover" />
          <img src={g13} alt="g13" className="w-full object-cover" />
          <img src={g14} alt="g14" className="w-full object-cover" />
        </div>
      </div>

    </div>
  );
};

export default MasonryGallery;
