import product1 from "../assets/combo1-min.jpg";
import product2 from "../assets/combo2-min.jpg";
import product3 from "../assets/combo3-min.jpg";
import product4 from "../assets/combo4-min.jpg";
import maimai from "../assets/combo4-min.jpg";
import tudo from "../assets/combo4-min.jpg";
import setCard from "../assets/combo4-min.jpg";
import nguoitimvang from "../assets/combo4-min.jpg";
import pickPic from "../assets/guirat_pick_mockup_03 tim_min.png";
import lanyardCCPCLK from "../assets/lanyard_ccpclk_min.jpg";
import aoGG from "../assets/ao_gap_gap_min.jpg";
import cahoihop from "../assets/ca_hoi_hop_min.jpg";
import bandanaGapGap from "../assets/khan_gap_gap_min.jpg";
import batlua_cahoi from "../assets/bat_lua_ca_hoi.png";
import khan_nguoi_tim_vang from "../assets/khan_nguoi_tim_vang.jpg";
import khan_tudo from "../assets/khan_tu_do.jpg";
import tat_cahoi from "../assets/tat_ca_hoi.jpg";

const Merch = [
  {
    id: 1,
    name: "Landyard CCPCLK",
    image: lanyardCCPCLK,
    description: [
      `Dây đeo thẻ với kích thước 1.5x85cm, là phiên bản với tone đen – trắng tối giản, được tô điểm bởi những hoạ tiết biểu tượng đặc trưng của Cá Hồi Hoang. Phụ kiện nhỏ mà chất, dành cho những người thích mang theo một phần "Lý" lẽ của âm nhạc bên mình.`,
    ],
    price: 49000,
    isCombo: false,
  },
  {
    id: 2,
    name: "Áo phông Gấp Gap",
    image: aoGG,
    description: [
      'Áo phông unisex màu đen hoặc trắng, form rộng dễ mặc, in hình chú cá nhỏ ở ngực trái thể hiện thông điệp "Cá Hồi Hoang là cái gì đó mãi mãi"',
    ],
    price: 250000,
    isCombo: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Trắng", "Đen"],
  },
  {
    id: 3,
    name: "Khăn Gấp Gap",
    image: bandanaGapGap,
    description: [
      "Chiếc khăn lụa mềm mại, mang sắc xanh đậm với họa tiết xoáy nước, như một dòng chảy nghệ thuật sâu lắng và đầy ám ảnh. Lý tưởng để quấn cổ, cột túi, hay đơn giản là giữ lại như một kỷ niệm đẹp.",
    ],
    price: 179000,
    isCombo: false,
  },
  {
    id: 4,
    name: "Khăn tìm vàng",
    image: khan_nguoi_tim_vang,
    description: [
      "Một trong hai thiết kế khăn mới chỉ xuất hiện trong lần mở bán này. Sắc vàng rực rỡ, chuyển động mạnh mẽ của gam màu tạo nên một tinh thần tìm kiếm – thử thách – và tỏa sáng.",
    ],
    price: 199000,
    isCombo: false,
  },
  {
    id: 5,
    name: "Khăn tự do",
    image: khan_tudo,
    description: [
      "Chiếc khăn mang hơi thở của tự do, nổi loạn và bản năng nghệ sĩ. Màu tím và xanh chuyển động như bầu trời sau cơn mưa. Tác phẩm dành riêng cho những tâm hồn không ngừng khát khao khám phá bản ngã.",
    ],
    price: 199000,
    isCombo: false,
  },
  {
    id: 6,
    name: "Set pick Gấp Gap (bộ 3 cái)",
    image: pickPic,
    description: [
      "Bộ pick đàn gồm 3 chiếc, màu xanh biển hoặc xanh lá cây được giao ngẫu nhiên – như một hộp nhạc cụ mini dành cho các fan yêu guitar và mong muốn giữ một phần “chạm dây” của Cá Hồi Hoang bên mình.",
    ],
    price: 50000,
    isCombo: false,
  },
  {
    id: 7,
    name: "Set card fanart album",
    image: setCard,
    description: [
      "Set 7 card fanart độc quyền, được minh hoạ bằng nét vẽ cảm xúc, tượng trưng cho 7 album và bài hát mang dấu ấn mạnh mẽ nhất trong hành trình của Cá Hồi Hoang: Xúc Cảm Bộ Máy Giấy Mơ Giấy Chương II Ngày Ấy Và Sau Này Tầng Thượng 102 Hiệu Ứng Trốn Chạy và Điền Vào Ô Trống Mỗi tấm card là một lát cắt ký ức, tái hiện những cung bậc cảm xúc khác nhau: từ lạc lõng, nổi loạn đến bình yên và dịu dàng. Dành cho những người vẫn luôn mang âm nhạc của Cá Hồi Hoang trong từng ngăn tim.",
    ],
    price: 50000,
    isCombo: false,
  },
  {
    id: 8,
    name: "Bật lửa Cá Hồi",
    image: batlua_cahoi,
    description: [
      "Thiết kế bật lửa độc đáo với hình ảnh chú cá hồi rực lửa, gợi liên tưởng đến nỗi khát khao và đam mê âm nhạc mãnh liệt. Một món đồ sưu tầm vừa ngầu vừa nghệ.",
    ],
    price: 40000,
    isCombo: false,
    type: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  },
  {
    id: 9,
    name: "Tất",
    image: tat_cahoi,
    description: [
      "Một món phụ kiện tối giản nhưng đậm chất riêng. \nĐôi tất có logo hình cá hồi cách điệu thành biểu tượng vô cực, tượng trưng cho sự bền bỉ, dịu dàng và khát khao. \nChất liệu dày dặn, co giãn tốt, dễ phối cùng giày sneaker hoặc sandal.",
    ],
    price: 49000,
    isCombo: false,
  },
  {
    id: 10,
    name: "Combo Cá Hồi Hộp",
    image: cahoihop,
    description: [
      `Bao gồm: \nPhone chain\nMóc khóa \nSticker \nCard \nPick \nPin cài \n📌 Lưu ý: Mỗi box “Cá Hồi Hộp” sẽ có thiết kế được chọn ngẫu nhiên.  \nMột hộp quà nhỏ nhưng đầy bất ngờ – dành cho những ai yêu thích cảm giác được “mở hộp” và khám phá. \nThiết kế được chọn ngẫu nhiên – như chính âm nhạc đầy cảm hứng của Cá Hồi Hoang.`,
    ],
    price: 102000,
    isCombo: true,
  },
  {
    id: 11,
    name: "Combo Cá",
    image: product1,
    description: [
      "Bao gồm:\nÁo phông (được chọn size từ S đến 4XL và màu trắng hoặc đen)\nDây đeo thẻ\n🎁 Tặng kèm: 1 móc khóa + 1 sticker\nMột lựa chọn tinh gọn nhưng vẫn đủ “đậm chất Cá”. Combo gồm áo phông (chọn size từ S đến 4XL, màu trắng hoặc đen) và dây đeo thẻ – món quà thiết thực để mang Cá Hồi Hoang theo bên mình. Đặc biệt tặng thêm móc khóa và sticker như lời tri ân nhỏ dành cho các Hồi Hoang.",
    ],
    price: 549000,
    isCombo: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Trắng", "Đen"],
  },
  {
    id: 12,
    name: "Combo Hồi",
    image: product2,
    description: [
      "Bao gồm:\nKhăn Gấp Gap\nCá Hồi Hộp \n🎁 Tặng kèm: 1 sticker + 1 móc khoá \nDành cho những ai yêu sự tinh tế và sâu lắng, gửi trọn tình cảm với thông điệp: “Chúng ta là điều gì đó mãi mãi.” Combo là món quà nhỏ nhưng đong đầy cảm xúc – từ chiếc khăn bandana, set Cá Hồi Hộp, đến những phụ kiện được thiết kế thủ mang đậm dấu ấn Cá Hồi Hoang. Không chỉ là vật phẩm lưu niệm, đây còn là lời tri ân dịu dàng gửi đến hành trình âm nhạc mà Cá Hồi Hoang và người nghe đã cùng nhau viết nên – lặng lẽ, chân thành, và không dễ phai mờ.",
    ],
    price: 459000,
    // sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isCombo: true,
    //colors: ['Trắng', 'Đen'],
  },
  {
    id: 13,
    name: "Combo Hoang",
    image: product3,
    description: [
      "Bao gồm:\nKhăn \nÁo phông (được chọn size từ S đến 4XL và màu trắng hoặc đen)\n🎁 Tặng kèm: 1 sticker + 1 phone chain\nCombo mang đậm phong cách “hoang dã” nhưng vẫn đầy chất thơ – gồm khăn + áo phông tự chọn. Mỗi chi tiết đều được chăm chút kỹ lưỡng, từ chất vải đến thiết kế, thể hiện tinh thần tự do, sâu lắng đúng với cảm hứng từ Cá Hồi Hoang.",
    ],
    price: 369000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    isCombo: true,
    colors: ["Trắng", "Đen"],
  },
  {
    id: 14,
    name: "Combo Tự Do",
    image: tudo,
    description: [
      "Bao gồm:\nKhăn tự do\nBật lửa Cá Hồi\nCá Hồi Hộp\n🎁 Tặng kèm: 1 sticker + 1 móc khoá \nLấy cảm hứng từ tinh thần “tự do” trong âm nhạc và cuộc sống, combo này kết hợp khăn Tự Do (chọn 1 trong 2 mẫu: tím hoặc vàng) và hộp Cá Hồi Hộp – hai sản phẩm được yêu thích nhất. Đi kèm là móc khóa và sticker như lời nhắn nhủ nhỏ bé nhưng đầy cảm xúc, dành cho những ai muốn giữ lại một phần Cá Hồi Hoang bên mình.",
    ],
    isCombo: true,
    price: 369000,
  },
  {
    id: 15,
    name: "Combo Người Tìm Vàng",
    image: nguoitimvang,
    description: [
      "Bao gồm:\nKhăn Tìm Vàng\nBật lửa Cá Hồi\nCá Hồi Hộp\n🎁 Tặng kèm: 1 sticker + 1 móc khoá \nLấy cảm hứng từ tinh thần “tự do” trong âm nhạc và cuộc sống, combo này kết hợp khăn Tự Do (chọn 1 trong 2 mẫu: tím hoặc vàng) và hộp Cá Hồi Hộp – hai sản phẩm được yêu thích nhất. Đi kèm là móc khóa và sticker như lời nhắn nhủ nhỏ bé nhưng đầy cảm xúc, dành cho những ai muốn giữ lại một phần Cá Hồi Hoang bên mình. Lưu ý: Mẫu bật lửa là ngẫu nhiên",
    ],
    isCombo: true,
    price: 369000,
  },
  {
    id: 16,
    name: "Combo Mãi Mãi",
    image: maimai,
    description: [
      "Bao gồm: \nTất \nÁo phông (được chọn size từ S đến 4XL và màu trắng hoặc đen)\n🎁 Tặng kèm: 1 sticker + 1 móc khoá \nCombo “MÃI MÃI” là lời nhắn nhủ dịu dàng đến những trái tim còn giữ tình cảm nguyên vẹn với Cá Hồi Hoang – và với một phiên bản thanh xuân của chính mình. MÃI MÃI – không hẳn là vĩnh cửu, nhưng là đủ lâu để trở thành một phần ký ức đẹp đẽ.",
    ],
    isCombo: true,
    price: 369000,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Trắng", "Đen"],
  },
];

export default Merch;
