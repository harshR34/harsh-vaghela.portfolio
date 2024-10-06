// import { PROJECTS } from "../constants"
// import { motion } from "framer-motion"
// const Project = () => {
//     return (
//         <div className="border-b border-neutral-900 pb-4">
//             <motion.h1
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 1 }}
//                 className="my-20 text-center text-4xl">Projects</motion.h1>
//             <div>
//                 {PROJECTS.map((project, index) => (
//                     <div key={index} className="mb-36 flex flex-wrap lg:justify-center gap-10">
//                         <motion.div
//                             whileInView={{ opacity: 1, x: 0 }}
//                             initial={{ opacity: 0, x: -100 }}
//                             transition={{ duration: 1 }}
//                             className="w-full lg:w-1/4">
//                             <div className="flex flex-row lg:flex-col">
//                                 {project.image.map((img, index) => (
//                                     <div key={index} className="flex ml-1">
//                                         <img src={img} alt={project.title} width={350} height={250} className="mb-6 rounded" />
//                                     </div>
//                                 ))}
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             whileInView={{ opacity: 1, x: 0 }}
//                             initial={{ opacity: 0, x: 100 }}
//                             transition={{ duration: 1 }}
//                             className="w-full max-w-xl lg:w-3/4">
//                             <h6 className="mb-2 font-semibold">{project.title}</h6>
//                             <p className="mb-4 text-neutral-400 text-lg">{project.description}</p>
//                             {project.technologies.map((tech, index) => (
//                                 <span key={index} className="mr-2 mb-7 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">{tech}</span>
//                             ))}
//                         </motion.div>
//                     </div>
//                 ))}</div>
//         </div>
//     )
// }

// export default Project

import { useState, useEffect } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl">Projects</motion.h1>

            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-36 flex flex-wrap lg:justify-center sm:gap-3 lg:gap-32">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            
                            {/* Image Slider with 3D effect */}
                            <ImageSlider images={project.image} />

                        </motion.div>

                        {/* Adjusted margin to create gap between the image slider and text */}
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 mt-10 lg:mt-0">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400 text-lg">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mb-7 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Image Slider Component with responsive width and height based on image size
// eslint-disable-next-line react/prop-types
const ImageSlider = ({ images }) => {
    const [currentImages, setCurrentImages] = useState(images);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 2500);

        return () => clearInterval(interval);
    }, [currentImages]);

    const handleNext = () => {
        setCurrentImages((prevImages) => {
            const updatedImages = [...prevImages];
            const firstImage = updatedImages.shift();
            updatedImages.push(firstImage);
            return updatedImages;
        });

        setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
    };

    return (
        <div className="w-full lg:w-96 h-auto relative overflow-hidden my-24">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {currentImages.map((img, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-full h-auto transition-transform duration-700 transform 
                        ${currentIndex === index ? "scale-105 rotate-3d" : "scale-90"} overflow-hidden shadow-lg`}
                        style={{
                            transformStyle: "preserve-3d",
                            transform: currentIndex === index ? "rotateY(0deg)" : "rotateY(15deg)",
                        }}
                    >
                        <img 
                            src={img} 
                            alt={`Image ${index}`} 
                            className="w-full h-auto object-contain" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
