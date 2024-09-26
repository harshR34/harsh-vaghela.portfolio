import { CONTACT } from "../constants"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tight">
        <motion.p 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}} 
        className="my-4">{CONTACT.phoneNo}</motion.p>

        {/* Email address with mailto link */}
        <motion.a
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}} 
        href={`mailto:${CONTACT.email}`} className="my-4 border-b">
          {CONTACT.email}
        </motion.a>
        <br></br>
        <br></br>
        {/* Secondary email address with mailto link */}
        <motion.a 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        href={`mailto:${CONTACT.secondaryEmail}`} className="my-4 border-b">
          {CONTACT.secondaryEmail}
        </motion.a>
      </div>
    </div>
  )
}

export default Contact;
