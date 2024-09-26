import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/Harsh.jpeg';
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Harsh Vaghela</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial='hidden'
                            animate='visible'
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                        <motion.p 
                         variants={container(1)}
                         initial='hidden'
                         animate='visible'
                        className="my-2 max-w-4xl font-light py-6 text-2xl">{HERO_CONTENT}</motion.p>
                        {/* <a
                            href="https://drive.google.com/drive/folders/1Z7UZupXnDucyaINiU5y-jjFgqYxbMlWK"  // Replace with your actual file ID
                            download="Harsh_Vaghela_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="relative z-10 px-6 py-4 text-lg font-bold text-gray-800 bg-gray-200 border-2 border-transparent rounded-full shadow-lg transition-all duration-300 group overflow-hidden hover:text-white hover:border-pink-300 hover:shadow-[0_0_15px_4px_rgba(255,20,147,0.6)] mt-auto mb-4">
                                Résumé
                                <span className="absolute inset-0 w-0 h-full transition-all duration-300 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-xl group-hover:w-full z-[-1]"></span>
                            </button>
                        </a> */}
                        <div className="flex flex-row">
                            <a href='/Harsh Vaghela resume 2024.pdf' download>
                                <button className="relative z-10 px-6 py-4 text-lg font-bold text-gray-800 bg-gray-200 border-2 border-transparent rounded-full shadow-lg transition-all duration-300 group overflow-hidden hover:text-white hover:border-pink-300 hover:shadow-[0_0_15px_4px_rgba(255,20,147,0.6)] mb-4">
                                    Résumé
                                    <span className="absolute inset-0 w-0 h-full transition-all duration-300 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-xl group-hover:w-full z-[-1]"></span>
                                </button>
                            </a>
                            <a
                                href="https://forms.gle/3L4KtH5eXxZWuXHMA"
                                target="_blank"
                                className="flex mt-5 mx-7 hover:gap-2 transition-all ease-in-out duration-500"
                            >
                                Your Massage
                                <FaAngleRight className="mt-1.5 text-neutral-500 hover:translate-x-1.5 transition-all ease-in-out duration-500" />
                            </a>



                        </div>
                        {/* <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Python Analyst</span> */}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x:100,opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1,delay:1.2}} 
                        src={profilePic} 
                        alt='Harsh vaghela' 
                        className="rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero