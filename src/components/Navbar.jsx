// import { FaLinkedin, FaGithub, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';
// import { MdDashboard } from "react-icons/md";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Dashboard from './Dashboard';

// // eslint-disable-next-line react/prop-types
// const Navbar = ({ checked, setChecked }) => {
//     return (
//         <Router>
//             <div>
//                 <nav className="mb-20 flex items-center justify-between py-6">
//                     <div className="flex flex-shrink-0 items-center">
//                         <h1 className='mx-2 w-10' style={{ fontWeight: "bold", fontSize: "30px" }}>Harsh</h1>
//                     </div>
//                     <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
//                         <a href='https://www.instagram.com/be.theharsh/?igsh=MW56NGJsa2Q1b2Rybg%3D%3D' target='_blank' rel="noreferrer"><FaInstagram /></a>
//                         <a href='https://github.com/harshR34' target='_blank' rel="noreferrer"><FaGithub /></a>
//                         <a href='https://www.linkedin.com/in/harsh-vaghela-82a801279' target='_blank' rel="noreferrer"><FaLinkedin /></a>
//                         <a href='https://www.snapchat.com/add/hrsh_289?share_id=-0t00lu9WFg&locale=en-IN' target='_blank' rel="noreferrer"><FaSnapchatGhost /></a>
//                         <Link to='/dashboard'><MdDashboard /></Link>
//                         <div className="relative w-10 h-5">
//                             <label className="block w-full h-full cursor-pointer">
//                                 <input
//                                     type="checkbox"
//                                     checked={checked}
//                                     onChange={() => setChecked(!checked)}
//                                     className="sr-only"
//                                 />
//                                 <div
//                                     className={`w-full h-full rounded-full transition-colors duration-300 ${checked ? "bg-gray-300" : "bg-gray-800"}`}
//                                 ></div>
//                                 <div
//                                     className={`absolute top-1 left-1 w-3 h-3 bg-gray-200 rounded-full transition-transform duration-300 transform ${checked ? "translate-x-5 bg-gray-800" : ""}`}
//                                 ></div>
//                             </label>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//             <Routes>
//                 <Route path='/dashboard' element={<Dashboard/>}/>
//             </Routes>
//         </Router>
//     );
// }

// export default Navbar;
import { FaLinkedin, FaGithub, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';


// eslint-disable-next-line react/prop-types
const Navbar = ({ checked, setChecked }) => {
    return (
            <div>
                <nav className="mb-20 flex items-center justify-between py-6">
                    <div className="flex flex-shrink-0 items-center">
                        <h1 className='mx-2 w-10' style={{ fontWeight: "bold", fontSize: "30px" }}>Harsh</h1>
                    </div>
                    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                        <a href='https://www.instagram.com/be.theharsh/?igsh=MW56NGJsa2Q1b2Rybg%3D%3D' target='_blank' rel="noreferrer"><FaInstagram /></a>
                        <a href='https://github.com/harshR34' target='_blank' rel="noreferrer"><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/harsh-vaghela-82a801279' target='_blank' rel="noreferrer"><FaLinkedin /></a>
                        <a href='https://www.snapchat.com/add/hrsh_289?share_id=-0t00lu9WFg&locale=en-IN' target='_blank' rel="noreferrer"><FaSnapchatGhost /></a>
                        <div className="relative w-10 h-5">
                            <label className="block w-full h-full cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => setChecked(!checked)}
                                    className="sr-only"
                                />
                                <div
                                    className={`w-full h-full rounded-full transition-colors duration-300 ${checked ? "bg-gray-300" : "bg-gray-800"}`}
                                ></div>
                                <div
                                    className={`absolute top-1 left-1 w-3 h-3 bg-gray-200 rounded-full transition-transform duration-300 transform ${checked ? "translate-x-5 bg-gray-800" : ""}`}
                                ></div>
                            </label>
                        </div>
                    </div>
                </nav>
            </div>
    );
}

export default Navbar;
