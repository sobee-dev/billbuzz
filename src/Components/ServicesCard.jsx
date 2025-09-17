import React from 'react'
import MenuIcon from './MenuIcon'
import { MdInstallMobile } from "react-icons/md";
import { TbMobiledata } from "react-icons/tb";
import { FaTv } from "react-icons/fa";
import { GiNigeria } from "react-icons/gi";
import { TbSunElectricity } from "react-icons/tb";

const ServicesCard = () => {
  const menuitems = [
    {title: 'Airtime', icon: MdInstallMobile, to:'/airtime'},
    {title: 'Data', icon: TbMobiledata, to: '/data'},
    {title: 'TV', icon: FaTv, to:'/tv'},
    {title: 'CAC', icon:GiNigeria, to:'/cac'},
    {title: 'Electricity', icon:TbSunElectricity, to:'/electricity'}

  ]
  return (
    <div className='grid max-md:grid-cols-3 md:grid-cols-3 px-3'>
        {menuitems.map((item, index) =>(
        <MenuIcon key={index} title={item.title} icon={item.icon} to={item.to}/>
        ))}
        
      
    </div>
  )
}

export default ServicesCard
