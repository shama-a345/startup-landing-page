import { Phone, ipad, team1, team2, team3, team4, team5, team6 } from '../../assets/images'

const Home = () => {
    const pricingPlans = [
        { title: 'Standard', price: '$12', popular: false },
        { title: 'Enterprise', price: '$12', popular: true },
        { title: 'Professional', price: '$12', popular: false },
        { title: 'Premium', price: '$12', popular: false },
    ]

    const services = Array(6).fill({
        title: 'Web Designer',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, doloremque?',
    })

    const teamMembers = [
        { img: team1, height: 'h-full' },
        { img: team2, height: 'h-85' },
        { img: team3, height: 'h-85' },
        { img: team4, height: 'h-75' },
        { img: team5, height: 'h-75' },
        { img: team6, height: 'h-75' },
    ]

    return (
        <div className="overflow-x-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4 sm:px-8 py-10">
                <div className="w-full max-w-md mx-auto">
                    <img src={Phone} alt="phone" className="w-full h-auto" />
                </div>
                <div className="flex flex-col gap-4 max-w-lg mx-auto md:mx-0 text-center md:text-left items-center md:items-start">
                    <h1 className="text-3xl sm:text-4xl font-bold">This is just a beginning</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam est deleniti numquam asperiores aspernatur ea animi odit rem dolorum officiis.</p>
                    <button className="w-fit border border-blue-500 text-white bg-blue-500 rounded-lg px-5 py-2 hover:bg-white cursor-pointer transition duration-500 hover:text-blue-400">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 sm:px-8">
                <div className="flex flex-col gap-4 items-center md:items-end text-center md:text-end">
                    <h1 className="font-bold text-3xl">
                        <span className="text-blue-500">A</span>bout Us
                    </h1>
                    <p className="max-w-md">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores optio iste asperiores. Explicabo illo odio dolorum reprehenderit ducimus dolore vero.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3" viewBox="0 0 320 512">
                                <path fill="rgb(86, 150, 202)" d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 576 512">
                                <path fill="rgb(86, 150, 202)" d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 512 512">
                                <path fill="rgb(86, 150, 202)" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 512 512">
                                <path fill="rgb(86, 150, 202)" d="M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="w-full max-w-md mx-auto md:mx-0">
                    <img src={ipad} alt="ipad" className="w-full h-auto" />
                </div>
            </div>
            <div className="bg-blue-600 mt-12 sm:mt-16">
                <p className="font-bold text-white text-3xl text-center pt-10">Pricing</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 sm:p-10 gap-6 lg:gap-0">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg pt-0 p-6 border border-gray-300 relative transition-all duration-500 hover:scale-105 hover:z-20 hover:shadow-2xl ${plan.popular
                                    ? 'shadow-xl z-10 lg:-m-5'
                                    : 'shadow-lg z-0'
                                }`}
                        >
                            <div className="bg-black text-white w-fit mx-auto px-4 py-1 rounded-b-md">
                                <p className="text-center text-sm font-medium">{plan.title}</p>
                            </div>
                            <div className="mt-6 text-center flex flex-col gap-5 pb-4">
                                <p>
                                    <span className="font-semibold text-4xl">{plan.price}</span>{' '}
                                    <span className="text-gray-500 pl-2 sm:pl-5">/ Per Month</span>
                                </p>
                                <p>Up to 5 Users</p>
                                <p>Basic support on Github</p>
                                <p>Monthly updates</p>
                                <p>Free cancellation</p>
                            </div>
                            <hr className="border-blue-400" />
                            <div className="pt-4 flex justify-center">
                                <button
                                    className={`border p-2 rounded-lg text-sm transition duration-500 cursor-pointer ${plan.popular
                                            ? 'border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white'
                                            : 'border-gray-400 text-gray-400 hover:bg-blue-400 hover:text-white hover:border-blue-300'
                                        }`}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pb-10">
                <h1 className="pt-10 text-3xl font-bold">
                    <span className="text-blue-500">S</span>ervices
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 pt-10 max-w-6xl w-full">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-2xl shadow-gray-500 p-8 bg-white flex flex-col items-center gap-4"
                        >
                            <span className="absolute top-0 left-0 h-[3px] w-0 bg-[#5696CA] transition-all duration-500 ease-in-out group-hover:w-1/2" />
                            <span className="absolute bottom-0 right-0 h-[3px] w-0 bg-[#5696CA] transition-all duration-500 ease-in-out group-hover:w-1/2" />
                            <div className="group/icon border border-gray-300 hover:bg-blue-400 rounded-full p-4 w-15 h-15 flex items-center justify-center transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 640 512">
                                    <path
                                        className="fill-current text-[#5696CA] group-hover/icon:text-white transition-colors"
                                        d="M128 32C92.7 32 64 60.7 64 96l0 240 64 0 0-240 384 0 0 240 64 0 0-240c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2L19.2 384z"
                                    />
                                </svg>
                            </div>
                            <p className="font-normal text-xl text-black">{service.title}</p>
                            <p className="text-sm text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pt-10 pb-10 flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl pb-10">
                    <span className="text-blue-500">O</span>ur Team
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group relative w-full max-w-xs mx-auto rounded-lg shadow-2xl shadow-black overflow-hidden"
                        >
                            <img
                                src={member.img}
                                alt="team member"
                                className={`w-full ${member.height} object-cover block`}
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-[#38bdf8]/90 text-white flex flex-col items-center justify-center p-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                <h3 className="text-2xl font-bold">Your name here</h3>
                                <p className="text-sm mt-1 font-medium">CEO, sales department</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-black text-white flex flex-col sm:flex-row items-center justify-center text-center sm:text-right gap-6 px-6 py-12 mb-10">
                <div className="flex flex-col max-w-lg">
                    <h2 className="font-bold text-3xl tracking-tight text-white mb-1">
                        call to action
                    </h2>
                    <p className="text-gray-300 text-md leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia officia dolorum harum qui laborum ut magnam iusto officiis dolor exercitationem.
                    </p>
                </div>
                <div className="flex items-center">
                    <button className="bg-blue-500 hover:bg-blue-300 hover:text-gray-800 cursor-pointer text-white font-medium px-5 py-3 rounded-md transition-colors">
                        Learn more
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-10 px-4 sm:px-8">
                <h1 className="font-bold text-3xl"><span className="text-blue-500">C</span>ontact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-5 gap-8 w-full max-w-5xl">
                    <div className="w-full h-80 sm:h-96 md:h-full min-h-[300px] rounded-lg overflow-hidden shadow-md">
                        <iframe
                            title="Google Map Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537353153166!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1614131800000!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <form className="flex flex-col gap-2 w-full">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email here...."
                            className="border border-gray-300 rounded-md p-2 w-full transition-shadow duration-200 hover:shadow-[0_0_15px_rgba(0,0,0,0.6)] focus:shadow-[0_0_15px_rgba(0,0,0,0.7)] focus:outline-none"
                        />
                        <p className="text-sm text-gray-500">We'll never share your email with anyone else.</p>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name here...."
                            className="border border-gray-300 rounded-md p-2 w-full transition-shadow duration-200 hover:shadow-[0_0_15px_rgba(0,0,0,0.6)] focus:shadow-[0_0_15px_rgba(0,0,0,0.7)] focus:outline-none"
                        />
                        <label>Message</label>
                        <textarea
                            placeholder="Enter your message here...."
                            className="border border-gray-300 rounded-md p-2 w-full h-40 sm:h-65 transition-shadow duration-200 hover:shadow-[0_0_15px_rgba(0,0,0,0.6)] focus:shadow-[0_0_15px_rgba(0,0,0,0.7)] focus:outline-none"
                        />
                        <div className="flex items-center gap-2 my-2">
                            <input type="checkbox" id="subscribe" className="w-4 h-4 accent-blue-500 cursor-pointer" />
                            <label htmlFor="subscribe" className="text-md text-gray-900 cursor-pointer select-none"> Subscribe to newsletter </label>
                        </div>
                        <button className="bg-blue-700 text-white rounded-lg w-20 h-10 hover:bg-blue-500 hover:text-blue-900 cursor-pointer">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;