import product1 from '../assets/combo1-min.jpg';
import product2 from '../assets/combo2-min.jpg';
import product3 from '../assets/combo3-min.jpg';
import product4 from '../assets/combo4-min.jpg';
import maimai from '../assets/combo4-min.jpg';
import tudo from '../assets/combo4-min.jpg';
import setCard from '../assets/combo4-min.jpg';
import nguoitimvang from '../assets/combo4-min.jpg';
import pickPic from '../assets/guirat_pick_mockup_03 tim_min.png';
import lanyardCCPCLK from '../assets/lanyard_ccpclk_min.jpg';
import aoGG from '../assets/ao_gap_gap_min.jpg';
import cahoihop from '../assets/ca_hoi_hop_min.jpg';
import bandanaGapGap from '../assets/khan_gap_gap_min.jpg';
import batlua_cahoi from '../assets/bat_lua_ca_hoi.png';
import khan_nguoi_tim_vang from '../assets/khan_nguoi_tim_vang.jpg';
import khan_tudo from '../assets/khan_tu_do.jpg';
import tat_cahoi from '../assets/tat_ca_hoi.jpg';

const Merch = [
  {
    id:1,
    name: 'Landyard CCPCLK',
    image: lanyardCCPCLK,
    description: [`Dây đeo thẻ với kích thước 1.5x85cm, là phiên bản với tone đen – trắng tối giản, được tô điểm bởi những hoạ tiết biểu tượng đặc trưng của Cá Hồi Hoang. Phụ kiện nhỏ mà chất, dành cho những người thích mang theo một phần "Lý" lẽ của âm nhạc bên mình.`],
    price: '49.000đ',
    isCombo: false,
  },
  {
    id:2,
    name: 'Áo phông Gấp Gap',
    image: aoGG,
    description: ['Áo phông unisex màu đen hoặc trắng, form rộng dễ mặc, in hình chú cá nhỏ ở ngực trái thể hiện thông điệp "Cá Hồi Hoang là cái gì đó mãi mãi"'],
    price: '250.000đ',
    isCombo: false,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Trắng', 'Đen'],
  },
  {
    id:3,
    name: 'Khăn Gấp Gap',
    image: bandanaGapGap,
    description: ["Chiếc khăn lụa mềm mại, mang sắc xanh đậm với họa tiết xoáy nước, như một dòng chảy nghệ thuật sâu lắng và đầy ám ảnh. Lý tưởng để quấn cổ, cột túi, hay đơn giản là giữ lại như một kỷ niệm đẹp."],
    price: '179.000đ',
    isCombo: false,
  },
  {
    id:4,
    name: 'Khăn tìm vàng',
    image: khan_nguoi_tim_vang,
    description: ["Một trong hai thiết kế khăn mới chỉ xuất hiện trong lần mở bán này. Sắc vàng rực rỡ, chuyển động mạnh mẽ của gam màu tạo nên một tinh thần tìm kiếm – thử thách – và tỏa sáng."],
    price: '199.000đ',
    isCombo: false,
  },
    {
    id:5,
      name: 'Khăn tự do',
    image: khan_tudo,
    description: ["Chiếc khăn mang hơi thở của tự do, nổi loạn và bản năng nghệ sĩ. Màu tím và xanh chuyển động như bầu trời sau cơn mưa. Tác phẩm dành riêng cho những tâm hồn không ngừng khát khao khám phá bản ngã."],
    price: '199.000đ',
    isCombo: false,
  },
  {
    id:6,
    name: 'Set pick Gấp Gap (bộ 3 cái)',
    image: pickPic,
    description: ["Bộ pick đàn gồm 3 chiếc, màu xanh biển hoặc xanh lá cây được giao ngẫu nhiên – như một hộp nhạc cụ mini dành cho các fan yêu guitar và mong muốn giữ một phần “chạm dây” của Cá Hồi Hoang bên mình."],
    price: '50.000đ',
    isCombo: false,
  },
  {
    id:7,
    name: 'Set card fanart album',
    image: setCard,
    description: ["Set 7 card fanart độc quyền, được minh hoạ bằng nét vẽ cảm xúc, tượng trưng cho 7 album và bài hát mang dấu ấn mạnh mẽ nhất trong hành trình của Cá Hồi Hoang: Xúc Cảm Bộ Máy Giấy Mơ Giấy Chương II Ngày Ấy Và Sau Này Tầng Thượng 102 Hiệu Ứng Trốn Chạy và Điền Vào Ô Trống Mỗi tấm card là một lát cắt ký ức, tái hiện những cung bậc cảm xúc khác nhau: từ lạc lõng, nổi loạn đến bình yên và dịu dàng. Dành cho những người vẫn luôn mang âm nhạc của Cá Hồi Hoang trong từng ngăn tim."],
    price: '50.000đ',
    isCombo: false,
  },
    {
    id:8,
      name: 'Bật lửa Cá Hồi',
    image: batlua_cahoi,
    description: ["Thiết kế bật lửa độc đáo với hình ảnh chú cá hồi rực lửa, gợi liên tưởng đến nỗi khát khao và đam mê âm nhạc mãnh liệt. Một món đồ sưu tầm vừa ngầu vừa nghệ."],
    price: '40.000đ',
    isCombo: false,
    type: ['1','2','3','4','5','6','7','8','9','10','11'],
  },
  {
    id:9,
    name: 'Tất',
    image: tat_cahoi,
    description: ["Một món phụ kiện tối giản nhưng đậm chất riêng. \nĐôi tất có logo hình cá hồi cách điệu thành biểu tượng vô cực, tượng trưng cho sự bền bỉ, dịu dàng và khát khao. \nChất liệu dày dặn, co giãn tốt, dễ phối cùng giày sneaker hoặc sandal."],
    price: '49.000đ',
    isCombo: false,
  },
  {
    id:10,
    name: 'Combo Cá Hồi Hộp',
    image: cahoihop,
    description: [`Bao gồm: \nPhone chain\nMóc khóa \nSticker \nCard \nPick \nPin cài \n📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  \nMột hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. \nThiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang.`],
    price: '102.000đ',
    isCombo: true,

  },
  {
    id:11,
    name: 'Combo Cá',
    image: product1,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    price: '549.000đ',
    isCombo: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Trắng', 'Đen'],
  },
  {
    id:12,
    name: 'Combo Hồi',
    image: product2,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    price: '459.000đ',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isCombo: true,
    colors: ['Trắng', 'Đen'],
  },
  {
    id:13,
    name: 'Combo Hoang',
    image: product3,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    price: '369.000đ',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isCombo: true,
    colors: ['Trắng', 'Đen']
  },
    {
    id:14,
      name: 'Combo Tự Do',
    image: tudo,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    isCombo: true,
    price: '369.000đ',
  },
  {
    id:15,
    name: 'Combo Người Tìm Vàng',
    image: nguoitimvang,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    isCombo: true,
    price: '369.000đ',
  },
  {
    id:16,
    name: 'Combo Mãi Mãi',
    image: maimai,
    description: ["Bao gồm: Phone chain Móc khóa Sticker Card Pick Pin cài 📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  Một hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Combo bao gồm phone chain, móc khóa, sticker, card, pick và pin cài, tất cả đều mang màu sắc đặc trưng của Cá Hồi Hoang. Thiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang."],
    isCombo: true,
    price: '369.000đ',
  },
];

export default Merch;
