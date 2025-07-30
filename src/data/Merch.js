import product1 from '../assets/combo1-min.jpg';
import product2 from '../assets/combo2-min.jpg';
import product3 from '../assets/combo3-min.jpg';
import product4 from '../assets/combo4-min.jpg';

const merchCombos = [
  {
    name: 'Landyard CCPCLK',
    image: product1,
    description: ["Dây đeo thẻ với kích thước 1.5x85cm, là phiên bản với tone đen – trắng tối giản, được tô điểm bởi những hoạ tiết biểu tượng đặc trưng của Cá Hồi Hoang. Phụ kiện nhỏ mà chất, dành cho những người thích mang theo một phần "Lý" lẽ của âm nhạc bên mình."],
    price: '49.000đ',
    hasShirt: false, // không có áo

  },
  {
    name: 'Áo phông Gấp Gap',
    image: product2,
    description: ['Áo phông unisex màu đen hoặc trắng, form rộng dễ mặc, in hình chú cá nhỏ ở ngực trái thể hiện thông điệp "Cá Hồi Hoang là cái gì đó mãi mãi"'],
    price: '250.000đ',
    hasShirt: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Trắng', 'Đen'],
  },
  {
    name: 'Khăn Gấp Gap',
    image: product3,
    description: ["Chiếc khăn lụa mềm mại, mang sắc xanh đậm với họa tiết xoáy nước, như một dòng chảy nghệ thuật sâu lắng và đầy ám ảnh. Lý tưởng để quấn cổ, cột túi, hay đơn giản là giữ lại như một kỷ niệm đẹp."],
    price: '179.000đ',
    hasShirt: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Trắng', 'Đen'],
  },
  {
    name: 'Khăn tìm vàng',
    image: product4,
    description: ["Một trong hai thiết kế khăn mới chỉ xuất hiện trong lần mở bán này. Sắc vàng rực rỡ, chuyển động mạnh mẽ của gam màu tạo nên một tinh thần tìm kiếm – thử thách – và tỏa sáng."],
    price: '199.000đ',
    hasShirt: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Trắng', 'Đen']
  },
    {
    name: 'Khăn tự do',
    image: product4,
    description: ["Chiếc khăn mang hơi thở của tự do, nổi loạn và bản năng nghệ sĩ. Màu tím và xanh chuyển động như bầu trời sau cơn mưa. Tác phẩm dành riêng cho những tâm hồn không ngừng khát khao khám phá bản ngã."],
    price: '199.000đ',
    hasShirt: false, // không có áo
  },
  {
    name: 'Set pick Gấp Gap (bộ 3 cái)',
    image: product4,
    description: ["Bộ pick đàn gồm 3 chiếc, màu xanh biển hoặc xanh lá cây được giao ngẫu nhiên – như một hộp nhạc cụ mini dành cho các fan yêu guitar và mong muốn giữ một phần “chạm dây” của Cá Hồi Hoang bên mình."],
    price: '50.000đ',
    hasShirt: false, // không có áo
  },
  {
    name: 'Set card fanart album',
    image: product4,
    description: ["Set 7 card fanart độc quyền, được minh hoạ bằng nét vẽ cảm xúc, tượng trưng cho 7 album và bài hát mang dấu ấn mạnh mẽ nhất trong hành trình của Cá Hồi Hoang: Xúc Cảm Bộ Máy Giấy Mơ Giấy Chương II Ngày Ấy Và Sau Này Tầng Thượng 102 Hiệu Ứng Trốn Chạy và Điền Vào Ô Trống Mỗi tấm card là một lát cắt ký ức, tái hiện những cung bậc cảm xúc khác nhau: từ lạc lõng, nổi loạn đến bình yên và dịu dàng. Dành cho những người vẫn luôn mang âm nhạc của Cá Hồi Hoang trong từng ngăn tim."],
    price: '50.000đ',
    hasShirt: false, // không có áo
  },
];

export default merchCombos;
