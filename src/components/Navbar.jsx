import { FaLinkedin, FaGithub, FaInstagram, FaSnapchatGhost } from 'react-icons/fa'
const Navbar = () => {
    return (
        <div>
            <nav className="mb-20 flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center">
                   <h1 className='mx-2 w-10' style={{fontWeight:"bold",fontSize:"30px"}}>Harsh</h1>
                </div>
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href='https://www.instagram.com/be.theharsh/?igsh=MW56NGJsa2Q1b2Rybg%3D%3D' target='_blank'><FaInstagram /></a>
                    <a href='https://github.com/harshR34' target='_blank' ><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/harsh-vaghela-82a801279' target='_blank'><FaLinkedin /></a>
                    <a href='https://www.snapchat.com/add/hrsh_289?share_id=-0t00lu9WFg&locale=en-IN' target='_blank'><FaSnapchatGhost/></a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar