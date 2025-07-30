import montauk from "../assets/montauk.png"
export default function Event_HeroSection3() {
  return (
    <section className="w-full text-white">
      <h2 className="text-4xl md:text-4xl font-bold text-left mb-6 font-imbue">
        THỜI GIAN & ĐỊA ĐIỂM
      </h2>
      <p className="mb-4 text-lg md:text-xl">
        Trưng bày "GẤP GAP":
        <br />► Thời gian: 23 - 26/05/2025
        <br />► Địa điểm: MONTAUK BY LP CLUB - 174 Kim Mã, Ba Đình, Hà Nội
      </p>

<div className="w-full mt-14 p-4 rounded-xl bg-white/10 shadow-xl">
  <p className="text-4xl font-bold font-imbue mb-2">Địa điểm: MONTAUK BY LP CLUB</p>
    <div className="w-full h-[300px] md:h-[400px] overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0182595407673!2d105.8228474746207!3d21.031955380618125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3e20f52599%3A0x5f918520a6a26fa!2sMontauk%20by%20LP%20Club!5e0!3m2!1sen!2s!4v1753703159428!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  </div>

        <p className="font-Averta-CY text-base">
          <br/>
          <b>Hoang Shitposting</b> xin chân thành cảm ơn!
        </p>
        <br/>
        <p>Special Thanks to</p>
        <strong><p>MONTAUK BY LP CLUB</p></strong>
        
          <div className="w-[325px] h-[100px] mt-10 items-start">
            <img
              src={montauk}
              alt="Ảnh 1"
              className="w-full h-full shadow-lg object-contain"
            />
          </div>
    </section>
  );
}
