export default function ShadowFilter() {
  return (
    // <svg viewBox="0 0 1273 906" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <g>
    //     <path
    //       d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898"
    //       stroke="url(#paint0_linear_537_1003)"
    //       strokeOpacity="0.6"
    //       strokeWidth="2"
    //     />
    //   </g>
    //   <defs>
    //     <linearGradient
    //       id="paint0_linear_537_1003"
    //       x1="1272.23"
    //       y1="479.474"
    //       x2="506.242"
    //       y2="-216.277"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#8B27DA" />
    //       <stop offset="0.619553" stopColor="#6033E0" />
    //       <stop offset="0.93102" stopColor="#1c1b24" />
    //     </linearGradient>
    //     <clipPath>
    //       <rect width="1273" height="906" fill="white" />
    //     </clipPath>
    //   </defs>
    // </svg>
    <svg className="defs">
            <defs>
                <filter id="shadowFilter" x="0" y="0" width="1319" height="865" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_68_42"></feBlend>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="-4"></feOffset>
                    <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                    <feBlend mode="normal" in2="effect1_innerShadow_68_42" result="effect2_innerShadow_68_42"></feBlend>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                    <feBlend mode="normal" in2="effect2_innerShadow_68_42" result="effect3_innerShadow_68_42"></feBlend>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset dy="-4"></feOffset>
                    <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"></feColorMatrix>
                    <feBlend mode="normal" in2="effect3_innerShadow_68_42" result="effect4_innerShadow_68_42"></feBlend>
                </filter>
            </defs>
        </svg>
  );
}
