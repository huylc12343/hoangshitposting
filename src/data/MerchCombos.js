import product1 from '../assets/combo1-min.jpg';
import product2 from '../assets/combo2-min.jpg';
import product3 from '../assets/combo3-min.jpg';
import product4 from '../assets/combo4-min.jpg';

const merchCombos = [
  {
    name: 'Combo Cá Hồi Hộp',
    image: product1,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    price: '102.000đ',
    hasShirt: false, // không có áo

  },
  {
    name: 'Combo Cá',
    image: product2,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    price: '549.000đ',
    hasShirt: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Trắng', 'Đen'],
  },
  {
    name: 'Combo Hồi',
    image: product3,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    price: '459.000đ',
    hasShirt: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Trắng', 'Đen'],
  },
  {
    name: 'Combo Hoang',
    image: product4,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    price: '369.000đ',
    hasShirt: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Trắng', 'Đen']
  },
    {
    name: 'Combo Tự Do',
    image: product4,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    price: '369.000đ',
    hasShirt: false, // không có áo
  },
  {
    name: 'Combo Người Tìm Vàng',
    image: product4,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    price: '369.000đ',
    hasShirt: false, // không có áo
  },
  {
    name: 'Combo Mãi Mãi',
    image: product4,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    price: '369.000đ',
    hasShirt: false, // không có áo
  },
];

export default merchCombos;
