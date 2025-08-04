import golden_bird from "../assets/golden_bird.png";
export default function Event_HeroSection3() {
  return (
    <section className="w-full text-white">
      <h2 className="text-4xl md:text-4xl font-bold text-left mb-6 font-imbue">
        THỜI GIAN & ĐỊA ĐIỂM
      </h2>

      <p className="mb-4 text-lg font-Averta-CY">
        🐟 Cover Show "CÓ CẦN PHẢI CÓ LÝ KHÔNG?"
        <br />► Thời gian: 19h - 22h 13/09/2025
        <br />► Địa điểm: Golden Bird's Event Space - 142 Đường Trần Não, Phường Bình An, Quận 2, Thành phố Thủ Đức, Hồ Chí Minh
      </p>

      <div className="w-full mt-6 p-4 rounded-xl bg-white/10 shadow-xl">
        <p className="text-4xl font-semibold mb-2">Địa điểm: Golden Bird's Event Space </p>
          <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2417089384703!2d106.72784657437282!3d10.792790589357004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527010dd2b733%3A0x4ca0b4c989fa180c!2sGolden%20Bird&#39;s%20Event%20%26%20Coffee!5e0!3m2!1sen!2s!4v1753704265817!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>
        <p className="font-Averta-CY text-base mt-5">
          <b>Hoang Shitposting</b> xin chân thành cảm ơn!
        </p>
        <br/>
        <p>Special Thanks to</p>
        <p>Golden Bird's Event Space</p>
        
        <div className=" w-auto md:w-[325px] h-[180px] items-start mt-4">
          <img
            src={golden_bird}
            alt="Ảnh 1"
            className="w-full h-full shadow-lg object-contain"
          />
        </div>

    </section>
  );
}
