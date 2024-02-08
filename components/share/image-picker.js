// use client
"use client";

import { useRef, useState } from "react";
import { Image } from "next";
const ImagePicker = () => {
  const { image, setImage } = useState();
  const imageInput = useRef();
  const pickImageHandler = () => {
    imageInput.current.click();
  };
  const chooseImage = (event) => {
    const file = event.target.files[0];
    if(!file) return;
    const FileReader = new FileReader();
    FileReader.readAsDataURL(file);

    FileReader.onload = () => {
      setImage(FileReader.result);
    };
  };
  return (
    <>
      <div>
        <label htmlFor="imageField">Pick a picture</label>
        <input
          ref={imageInput}
          type="file"
          name="imageField"
          id="imageField"
          accept="image/png, image/jpeg"
          onChange={chooseImage}
        />
      </div>
     {image && <Image src={image} fill alt='selected image ' />}
     {!image && <p>np image selected</p>}

      <button className="button" type="button" onClick={pickImageHandler}>
        Pick an image{" "}
      </button>
    </>
  );
};
export default ImagePicker;
