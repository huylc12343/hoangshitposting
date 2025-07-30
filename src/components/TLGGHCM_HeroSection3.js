import hoi from "../assets/logo_hoi.png"
export default function Event_HeroSection3() {
  return (
    <section className="w-full text-white">
      <h2 className="text-4xl md:text-4xl font-bold text-left mb-6 font-imbue">
        THỜI GIAN & ĐỊA ĐIỂM
      </h2>

      <p className="mb-4 text-lg md:text-xl">
        🐟 Triển lãm "GẤP GAP"
        <br />► Thời gian: 12-14/09/2025
        <br />► Giờ mở cửa: 9h - 21h
        <br />► Địa điểm: Hội Tụ Hội – 31/40C Ung Văn Khiêm, P.25, Bình Thạnh, TP.HCM
      </p>

      <div className="w-full mt-6 p-4 rounded-xl bg-white/10 shadow-xl">
          <p className="text-4xl font-bold font-imbue mb-2">Địa điểm: HỘI TỤ HỘI</p>
        <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0185006380334!2d106.71255197437307!3d10.80989468934088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a278176d6b%3A0xbb17a323452074bf!2zSOG7mWkgVOG7pSBI4buZaQ!5e0!3m2!1sen!2s!4v1753703872132!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
          <p className="font-Averta-CY text-base">
          <br/><b>Hoang Shitposting</b> xin chân thành cảm ơn!
        </p>
        <br/>
        <p>Special Thanks to</p>
        
          <div className="w-[150px] h-[150px] items-start mt-10">
            <img
              src={hoi}
              alt="Ảnh 1"
              className="w-full h-full shadow-lg object-contain"
            />
          </div>
    </section>
  );
}
