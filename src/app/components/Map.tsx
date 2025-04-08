'use client';

const Map = () => {
  return (
    <iframe
      className="rounded-3xl w-full h-full lg:w-2/3"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8764.801861347301!2d9.607176886628862!3d40.897507219607746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d93500487796d9%3A0x93d610537b1bc3ae!2sIstana%20Loft!5e1!3m2!1sfr!2sca!4v1728951774780!5m2!1sfr!2sca"
      referrerPolicy="no-referrer-when-downgrade"
      title="Map showing the location of Porto Istana beach"
      loading="lazy"
    />
  );
};

export default Map;
