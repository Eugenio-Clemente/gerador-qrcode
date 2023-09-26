import { useState } from "react";
import QRCode from "qrcode.react";

const GeradorQRCode = () => {
  const [text, setText] = useState("");

  const handleDowloand = () => {
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const ancora = document.createElement("a");
    ancora.href = url;
    ancora.download = "qrcode.png";
    ancora.click();
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Gerador de QRCode</h1>
          <input
            className="input"
            placeholder="Digite um text ou url"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {text && (
            <div className="download">
              <QRCode value={text} size={250} />
              <button className="button" onClick={handleDowloand}>
                Download QR Code
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { GeradorQRCode };
