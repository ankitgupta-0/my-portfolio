import React from "react";

const BlobImage = ({ imageSrc = "/images/photo.jpg" }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    //   className="w-[750px] h-[750px] " 

    >
      <defs>
        <clipPath id="blobClip">
          <path
            d="M53.6,-17.4C62.2,9.1,57,40.2,38.4,53.9C19.8,67.7,-12.1,64.2,-29.2,49.5C-46.4,34.9,-48.7,9.2,-41.3,-15.6C-34,-40.3,-17,-64.1,2.7,-65C22.5,-65.9,45,-43.9,53.6,-17.4Z"
            transform="translate(100 100)"
          />
        </clipPath>
      </defs>

      <g clipPath="url(#blobClip)">
        {/* Instead of SVG <image>, we use foreignObject for better control */}
        <foreignObject x="0" y="0" width="190" height="190">
          <div className="w-full h-full">
            <img
              src={imageSrc}
              alt="Ankit"
              className="w-full h-full object-contain rounded-full translate-x-2 translate-y-5 shadow-lg"
            />
          </div>
        </foreignObject>
      </g>
    </svg>
  );
};

export default BlobImage;
