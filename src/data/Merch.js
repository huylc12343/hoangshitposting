import comboCa from "../assets/comboca_min.jpg";
import comboHoi from "../assets/combohoi_min.jpg";
import comboHoang from "../assets/combohoang_min.jpg";
import comboMaiMai from "../assets/combotudo_min.jpg";
import comboGapGap from "../assets/combogapgap_min.jpg";
import comboTudo from "../assets/combotudo_min.jpg";
import setCard from "../assets/setcard_min.jpg";
import comboTimVang from "../assets/combotimvang2_min.jpg";
import pickPic from "../assets/picthumb_min.jpg";
import lanyardCCPCLK from "../assets/landyard_min.jpg";
import aoGG from "../assets/2ao_min.jpg";
import cahoihop from "../assets/cahoihop_ofc_min.jpg";
import bandanaGapGap from "../assets/khangapgap_min.jpg";
import batlua_cahoi from "../assets/batlua_min.jpg";
import khan_nguoi_tim_vang from "../assets/khantimvang_min.jpg"
import khan_tudo from "../assets/khantudo_min.jpg";
import tat_cahoi from "../assets/tat_min.jpg";

import aoden from "../assets/aoden_min.jpg";
import aotrang from "../assets/aotrang_min.jpg";

import batlua_1 from "../assets/blua_do_min.png";
import batlua_2 from "../assets/bluaxanhdam_min.png";
import batlua_3 from "../assets/bluasuongxam_min.png";
import batlua_4 from "../assets/bluadentrang_min.png";
import batlua_5 from "../assets/bluadendo_min.png";
import batlua_6 from "../assets/batluaxanhngoc_min.png";
import batlua_7 from "../assets/blua_trangden_min.png";
import batlua_8 from "../assets/blua_trangdo_min.png";
// import batlua_9 from "../assets/bat_lua3.png";
// import batlua_10 from "../assets/bat_lua3.png";
// import batlua_11 from "../assets/bat_lua3.png";
const Merch = [
  {
    id: 1,
    name: "Landyard CCPCLK",
    image: lanyardCCPCLK,
    description: [
      `Dây đeo thẻ với kích thước 1.5x85cm có tone đen và trắng tối giản, được tô điểm bởi những hoạ tiết đặc trưng của Cá Hồi Hoang. Phụ kiện nhỏ dành cho những người thích mang theo một phần "Lý" lẽ của âm nhạc bên mình.`,
    ],
    price: 49000,
    isCombo: false,
  },
  {
    id: 2,
    name: "Áo phông Gấp Gap",
    image: aoGG,
    imagesByType: {
    "Trắng": aotrang,
    "Đen": aoden,
  },
    description: [
      'Áo phông unisex form rộng, có hai màu đen hoặc trắng, form rộng dễ mặc. Điểm nhấn là hình chú cá nhỏ in ở ngực trái, biểu tượng cho thông điệp “Cá Hồi Hoang là cái gì đó mãi mãi”.',
    ],
    price: 250000,
    isCombo: false,
    sizes: ["S", "M", "L", "XL", "XXL","3XL","4XL"],
    colors: ["Trắng", "Đen"],
  },
  {
    id: 3,
    name: "Khăn Gấp Gap",
    image: bandanaGapGap,
    description: [
      "Khăn lụa xanh đậm với họa tiết xoáy nước đặc trưng, chất vải mềm nhẹ, dễ sử dụng để quàng cổ, cột túi hoặc đơn giản là giữ làm kỷ niệm. Một món phụ kiện vừa đẹp vừa mang dấu ấn riêng.",
    ],
    price: 179000,
    isCombo: false,
  },
  {
    id: 4,
    name: "Khăn tìm vàng",
    image: khan_nguoi_tim_vang,
    description: [
      "Một trong hai thiết kế khăn chỉ xuất hiện duy nhất trong lần mở bán này. Tông vàng rực rỡ cùng bố cục chuyển động tạo cảm giác tràn đầy năng lượng - gợi lên tinh thần thử sức, vượt giới hạn và toả sáng.\n\nThiết kế độc quyền cho sự kiện “Gấp Gap - Có Cần Phải Có Lý Không?” Sài Gòn",
    ],
    price: 199000,
    isCombo: false,
  },
  {
    id: 5,
    name: "Khăn tự do",
    image: khan_tudo,
    description: [
      'Chiếc khăn với sắc tím và xanh chuyển động hài hoà nhưng vẫn đậm nét cá tính. Thiết kế dành riêng cho những tâm hồn không ngừng khát khao khám phá bản ngã.\n\nThiết kế độc quyền cho sự kiện "Gấp Gap - Có Cần Phải Có Lý Không?" Sài Gòn',
    ],
    price: 199000,
    isCombo: false,
  },
  {
    id: 6,
    name: "Set pick Gấp Gap (bộ 3 cái)",
    image: pickPic,
    description: [
      "Bộ pick đàn gồm 3 chiếc random màu xanh biển hoặc xanh lá cây được giao ngẫu nhiên như một hộp nhạc cụ mini dành cho các fan yêu guitar và mong muốn giữ một phần “chạm dây” của Cá Hồi Hoang bên mình.",
    ],
    price: 50000,
    isCombo: false,
  },
  {
    id: 7,
    name: "Set card fanart album",
    image: setCard,
    description: [
      "Set 7 card Fanart độc quyền tượng trưng cho 7 Album và bài hát mang dấu ấn mạnh mẽ nhất trong hành trình của Cá Hồi Hoang: Xúc Cảm Bộ Máy, Giấy Mơ Giấy, Chương II, Ngày Ấy Và Sau Này, Tầng Thượng 102, Hiệu Ứng Trốn Chạy, và Điền Vào Ô Trống. \nMỗi tấm card là một lát cắt cảm xúc - có lạc lõng, có nổi loạn, có cả những giây phút dịu dàng. Dành cho những người vẫn luôn mang âm nhạc của Cá Hồi Hoang trong từng ngăn tim.",
    ],
    price: 50000,
    isCombo: false,
  },
// {
//   id: 8,
//   name: "Bật lửa Cá Hồi",
//   image: batlua_cahoi,
//   imagesByType: {
//     "1": batlua_1,
//     "2": batlua_2,
//     "3": batlua_3,
//     "4": batlua_4,
//     "5": batlua_5,
//     "6": batlua_6,
//     "7": batlua_7,
//     "8": batlua_8,
//   },
//   description: [
//     'Thiết kế bật lửa độc đáo với hình ảnh chú cá hồi rực lửa, gợi liên tưởng đến nỗi khát khao và đam mê âm nhạc mãnh liệt - một món đồ sưu tầm vừa ngầu vừa nghệ.\n\nThiết kế độc quyền cho sự kiện "Gấp Gap - Có Cần Phải Có Lý Không?" Sài Gòn',
//   ],
//   price: 40000,
//   isCombo: false,
//   colors: ["1", "2", "3", "4", "5", "6", "7", "8"],
// },
  {
    id: 9,
    name: "Tất",
    image: tat_cahoi,
    description: [
      "Một món phụ kiện tối giản nhưng đậm chất riêng.\nĐôi tất có logo hình 'cá hồi' cách điệu thành biểu tượng vô cực, tượng trưng cho sự bền bỉ, dịu dàng và khát khao.\nChất liệu dày dặn, co giãn tốt, dễ phối cùng giày sneaker hoặc sandal.",
    ],
    price: 49000,
    isCombo: false,
    colors: ["Trắng", "Đen"],
  },
  {
    id: 10,
    name: "Combo Cá Hồi Hộp",
    image: cahoihop,
    description: [
      `Bao gồm: Phone chain + Móc khóa + Sticker + Card + Pick + Pin cài\n Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên. \n\nMột hộp quà nhỏ nhưng đầy bất ngờ - dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. Thiết kế được chọn ngẫu nhiên - như chính âm nhạc mang đầy cảm hứng của Cá Hồi Hoang.`,],
    price: 102000,
    isCombo: true,
  },
  {
    id: 11,
    name: "Combo Cá",
    image: comboCa,
    description: [
      "Bao gồm: Áo phông (được chọn size từ S đến 4XL và màu trắng hoặc đen) + Dây đeo thẻ\n\n🎁 Tặng kèm: 1 móc khóa + 1 sticker\n\nMột lựa chọn tinh gọn nhưng vẫn đủ “đậm chất Cá”. Combo gồm áo phông (chọn size từ S đến 4XL, màu trắng hoặc đen) và dây đeo thẻ - để bạn mang theo tinh thần Cá Hồi Hoang trong mọi khoảnh khắc thường nhật. ",
    ],
    price: 549000,
    isCombo: true,
    sizes: ["S", "M", "L", "XL", "XXL","3XL","4XL"],
    colors: ["Trắng", "Đen"],
  },
  {
    id: 12,
    name: "Combo Hồi",
    image: comboHoi,
    description: [
      "Bao gồm: Khăn Gấp Gap + Cá Hồi Hộp \n\n🎁 Tặng kèm: 1 sticker + 1 móc khoá \n\nKhông chỉ là vật phẩm lưu niệm, đây còn là lời tri ân dịu dàng gửi đến hành trình âm nhạc mà Cá Hồi Hoang và người nghe đã cùng nhau viết nên - lặng lẽ, chân thành, và không dễ phai mờ.",
    ],
    price: 459000,
    // sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isCombo: true,
    //colors: ['Trắng', 'Đen'],
  },
  {
    id: 13,
    name: "Combo Hoang",
    image: comboHoang,
    description: [
      "Bao gồm: Khăn + Áo phông (được chọn size từ S đến 4XL và màu trắng hoặc đen)\n\n🎁 Tặng kèm: 1 sticker + 1 phone chain\n\nCombo mang đậm phong cách “hoang dã” nhưng vẫn đầy chất thơ. Mỗi chi tiết đều được chăm chút kỹ lưỡng, từ chất vải đến thiết kế, thể hiện tinh thần tự do, sâu lắng đúng với tinh thần âm nhạc từ Cá Hồi Hoang.",
    ],
    price: 369000,
    sizes: ["S", "M", "L", "XL", "XXL","3XL","4XL"],
    isCombo: true,
    colors: ["Trắng", "Đen"],
  },
  {
    id: 14,
    name: "Combo Tự Do",
    image: comboTudo,
    description: [
      'Bao gồm: Khăn Tự Do + Bật lửa Cá Hồi + Cá Hồi Hộp\n\n🎁 Tặng kèm: 1 sticker + 1 móc khoá \n\nLấy cảm hứng từ bài hát "Tự Do" của Cá Hồi Hoang, combo này kết hợp khăn Tự Do và Cá Hồi Hộp - hai sản phẩm được yêu thích nhất. Đi kèm là móc khóa và sticker như lời nhắn nhủ nhỏ bé nhưng đầy xúc động.',
    ],
    isCombo: true,
    price: 369000,
  },
  {
    id: 15,
    name: "Combo Tìm Vàng",
    image: comboTimVang,
    description: [
      "Bao gồm: Khăn Tìm Vàng + Bật lửa Cá Hồi + Cá Hồi Hộp\n\n🎁 Tặng kèm: 1 sticker + 1 móc khoá \n\nLấy cảm hứng từ tinh thần khám phá và bứt phá, combo kết hợp khăn Tìm Vàng, bật lửa Cá Hồi và Cá Hồi Hộp - một lựa chọn đậm cá tính. Món quà dành cho những tâm hồn luôn hướng về ánh sáng và hành trình không ngừng vươn xa.",
    ],
    isCombo: true,
    price: 369000,
  },
  // {
  //   id: 16,
  //   name: "Combo Mãi Mãi",
  //   image: comboMaiMai,
  //   description: [
  //     "Bao gồm: Tất + Áo phông (được chọn size từ S đến 4XL và màu trắng hoặc đen)\n\n🎁 Tặng kèm: 1 sticker + 1 móc khoá \n\nCombo “MÃI MÃI” là lời nhắn nhủ dịu dàng đến những trái tim còn giữ tình cảm nguyên vẹn với Cá Hồi Hoang - và với một phần tuổi trẻ của chính mình.",
  //   ],
  //   isCombo: true,
  //   price: 369000,
  //   sizes: ["S", "M", "L", "XL", "XXL","3XL","4XL"],
  //   colors: ["Trắng", "Đen"],
  // },
    {
    id: 17,
    name: "Combo GapGap",
    image: comboGapGap,
    description: [
      "Bao gồm: Khăn + Áo phông (được chọn size từ S đến 4XL và màu trắng hoặc đen)\n\n🎁 Tặng kèm: 1 sticker + 1 phone chain\n\nCombo mang đậm phong cách “hoang dã” nhưng vẫn đầy chất thơ. Mỗi chi tiết đều được chăm chút kỹ lưỡng, từ chất vải đến thiết kế, thể hiện tinh thần tự do, sâu lắng đúng với tinh thần âm nhạc từ Cá Hồi Hoang.",
    ],
    isCombo: true,
    price: 369000,
    sizes: ["S", "M", "L", "XL", "XXL","3XL","4XL"],
    colors: ["Trắng", "Đen"],
  },
];

export default Merch;
