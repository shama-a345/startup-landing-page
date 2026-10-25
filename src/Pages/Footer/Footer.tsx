const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col gap-3 justify-center items-center h-auto px-4 sm:px-8 py-10 text-center">
      <a href="/">
        <h1 className="font-medium text-4xl text-blue-600">Starter</h1>
      </a>

      <div className="max-w-2xl text-sm sm:text-base leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla aliquet est nec aliquet. Cras convallis ultrices sem, id cursus tellus varius a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>

      <div className="flex justify-center items-center w-full">
        <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-3 text-sm sm:text-base">
          <li><a href="#" className="hover:text-blue-500 transition duration-300">About US</a></li>
          <li><a href="#" className="hover:text-blue-500 transition duration-300">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-500 transition duration-300">Servies</a></li>
          <li><a href="#" className="hover:text-blue-500 transition duration-300">Team</a></li>
          <li><a href="#" className="hover:text-blue-500 transition duration-300">Gallery</a></li>
        </ul>
      </div>

      <p className="pt-8 sm:pt-13 text-gray-500 text-xs sm:text-sm">
        made by Kobi dahan © 2019
      </p>
    </div>
  )
}

export default Footer;