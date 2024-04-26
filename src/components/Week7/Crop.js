import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function Crop() {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);
  const [preview, setPreview] = useState(null); // State for preview image URL

  const selectImage = (file) => {
    setSrc(URL.createObjectURL(file));
  };

  const cropImageNow = () => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // Converting to base64
    const base64Image = canvas.toDataURL("image/jpeg");
    setOutput(base64Image);

    // Update preview
    setPreview(URL.createObjectURL(canvas.toBlob()));
  };

  return (
    <div className="App">
      <center>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            selectImage(e.target.files[0]);
          }}
        />
        <br />
        <br />
        <div>
          {src && (
            <div>
              <ReactCrop
                src={src}
                onImageLoaded={setImage}
                crop={crop}
                onChange={setCrop}
              />
              <br />
              <button onClick={cropImageNow}>Crop</button>
              <br />
              <br />
            </div>
          )}
        </div>
        <div>
          {preview && <img src={preview} alt="Preview" />}{" "}
          {/* Display preview */}
          {output && <img src={output} alt="Output" />}{" "}
          {/* Display cropped image */}
        </div>
      </center>
    </div>
  );
}

export default Crop;
