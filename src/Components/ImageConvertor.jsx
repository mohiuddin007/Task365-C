import React from 'react';
import ConvertImage from "react-convert-image";
import im from "../Assets/images/245609921_5928749794120422_5344661563460938778_n.jpg";

export default function ImageConvertor() {
   function handleConvertedImage(url) {
        console.log(url);
      }
    return (
        <div>
            <div style={{height: '80px', overflow: 'hidden'}}>
            <ConvertImage
            image={im}
            onConversion={handleConvertedImage}
            format="webp"
            // style={{height: "60px"}}
        />
            </div>
           
        </div>
    )
}
