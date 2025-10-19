import React from 'react'
import FooterIcon from './FooterIcon'
import { BiSolidHomeHeart,} from "react-icons/bi";
import { FaComments,FaHistory } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

const Footerbar = () => {
 const footerItems = [
    { title: "Home", icon: BiSolidHomeHeart, to:'/dashboard'},
    { title: "Support", icon: FaComments, to:'/support'},
    { title: "History", icon: FaHistory, to:'/transactions' },
    { title: "Me", icon: CgProfile, to:'/profile' }
  ]

  return (
    <div className='px-2 fixed bottom-0 left-0 w-full z-50 bg-blue-600 py-0.5'>
      <div className="flex justify-around py-1 px-2">
        {footerItems.map((item, index) => (
          <FooterIcon key={index} title={item.title} icon={item.icon} to={item.to} />
        ))}
      </div>
    </div>
  )
}

export default Footerbar
