import React from 'react';

import img from './images/image-qr-code.png'

const QRCodeComponent = () => {
  return (
    <>
     <div class="container">
      <img src={img} alt="" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>

    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="https://kevorklepedjian.vercel.app/">Kevork Lepedjian</a>.
    </div>
    </>
  );
};

export default QRCodeComponent;
