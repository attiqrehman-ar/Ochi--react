import React from 'react'

function Navbar() {
  const navItems = [
    { name: "services", path: "/services" },
    { name: "Our Work", path: "/work" },
    { name: "About Us", path: "/about" },
    { name: "Insights", path: "/insights" },
    { name: "Personal Profile", path: "https://attiqportfolio.vercel.app/" }
  ];

  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Neue_Montreal"] flex justify-between items-center'>
      <div className="logo">
        <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0466669 25.8148 4.37613 30.1148 9.98592 29.9923C15.5957 29.8698 19.8711 25.4599 19.8248 19.9203C19.7785 14.3807 15.4491 10.0807 9.8393 10.2032ZM9.93651 25.8148C6.65163 25.8873 3.9735 23.3305 3.92725 19.9203C3.88099 16.5102 6.46837 13.8761 9.75325 13.8036C13.0381 13.731 15.7163 16.2879 15.7625 19.698C15.8088 23.1082 13.2214 25.7422 9.93651 25.8148Z" fill="currentColor"/>
          <path d="M62.1574 10.2032C56.5476 10.3257 52.2722 14.7356 52.3185 20.2752C52.3647 25.8148 56.6942 30.1148 62.304 29.9923C67.9138 29.8698 72.1892 25.4599 72.1429 19.9203C72.0967 14.3807 67.7672 10.0807 62.1574 10.2032ZM62.2546 25.8148C58.9697 25.8873 56.2916 23.3305 56.2453 19.9203C56.1991 16.5102 58.7865 13.8761 62.0714 13.8036C65.3562 13.731 68.0344 16.2879 68.0806 19.698C68.1269 23.1082 65.5395 25.7422 62.2546 25.8148Z" fill="currentColor"/>
          <path d="M24.0568 19.3068L31.1161 29.7144L34.8083 29.669L27.7027 19.3068L34.5238 10.4341L30.8316 10.4795L24.0568 19.3068Z" fill="currentColor"/>
          <path d="M41.3211 19.3068L48.3804 29.7144L52.0726 29.669L44.967 19.3068L51.7881 10.4341L48.0959 10.4795L41.3211 19.3068Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="links flex gap-10">
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={item.path}
            className={`text-lg capitalize font-regular ${index === 4 && "ml-80"} hover:text-[#CDEA68] transition-all duration-200`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
