'use client'

import Image from 'next/image';
import React from 'react';

interface ProjectGalleryImageProps {
      src: string; // Specify the type for src as a string
      alt: string; // Specify the type for alt as a string
}
    

// function ProjectGalleryImage({ src, alt }) {
function ProjectGalleryImage({ src, alt }: ProjectGalleryImageProps) {
      
      const handleLoadingComplete = (img: HTMLImageElement) => {
        // console.log('natural width:', img.naturalWidth, img.naturalHeight);
        if (img.naturalWidth > img.naturalHeight){
            img.style.objectFit = "cover";
        }
      };
    
      return (
          <Image 
            src={src}
            alt={alt}
            fill
            objectFit="contain"
            onLoadingComplete={handleLoadingComplete}
          />
      );
}
    



// type ProjectGalleryImageProps = {
//     src: string; // Assuming src is a string representing the image URL
//     alt: string; // Assuming alt is a string representing the image alt text
//   };

// const ProjectGalleryImage: React.FC<ProjectGalleryImageProps> = ({ src, alt }) => {

//     // function handleImageLoad() {
//     //   console.log("hello")
//     // }

//     const [isHorizontal, setIsHorizontal] = useState(false);

//     useEffect(() => {
//         // Create a new Image object
//         const img = new Image();
//         img.src = src;

//         // Add an event listener to check image dimensions when it loads
//         img.onload = () => {
//         const { naturalWidth, naturalHeight } = img;

//         // Determine if the image is horizontal
//         setIsHorizontal(naturalWidth > naturalHeight);
//         };
//     }, [src]);


//     return (
//         <Image
//           src={src}
//           alt={alt}
//           fill
//         //   objectFit="contain"
//           objectFit={isHorizontal ? 'contain' : 'cover'}
//         //   onLoad={handleImageLoad}
//         />
//       )
// }

export default ProjectGalleryImage;
 