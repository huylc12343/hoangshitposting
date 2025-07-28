import montauk from "../assets/montauk.png"
export default function Event_HeroSection3() {
  return (
    <section className="w-full text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-left mb-6">
        THỜI GIAN & ĐỊA ĐIỂM
      </h2>

      <p className="mb-4 text-lg md:text-xl">
        Cover Show "CÓ CẦN PHẢI CÓ LÝ KHÔNG":
        <br />► <strong>Thời gian:</strong> 19H - 22H 17/05/2025
        <br />► <strong>Địa điểm:</strong> Hanoi Rock City – 27/52 Đ. Tô Ngọc Vân, Quảng An, Tây Hồ, Hà Nội
      </p>

      <div className="w-full mt-6 p-4 rounded-xl bg-white/10 shadow-xl">
        <p className="text-lg font-semibold mb-2">📍 Địa điểm: MONTAUK BY LP CLUB</p>
        <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
          <iframe
            title="Google Maps - MONTAUK BY LP CLUB"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.070134139266!2d105.82081747462189!3d21.06986088058982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aaf736329307%3A0xed34bfa74dbfe984!2sHanoi%20Rock%20City!5e0!3m2!1sen!2s!4v1753244229904!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
              <p className="font-Averta-CY text-base">
          <b>Hoang Shitposting</b> xin chân thành cảm ơn!
        </p>
        <br/>
        <p>Special thank to</p>
        <p>MONTAUK BY LP CLUB</p>
        
          <div className="w-[325px] h-[100px] mx-auto mt-10">
            <img
              src={montauk}
              alt="Ảnh 1"
              className="w-full h-full shadow-lg object-contain"
            />
          </div>
    </section>
  );
}
