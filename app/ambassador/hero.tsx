import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const Hero = ()=> {
    return (
        <div className={`${ibmPlexSans.className} w-full grid grid-cols-12 mt-6 items-center gap-x-16`}>
            {/* Background image */}
            <div className=" col-span-6 bg-ambassador bg-cover bg-center h-[500px]  ">
               
            </div>

            <div className=" col-span-5  space-y-10">
                <h1 className="text-6xl font-semibold">Become a Voice of Africonomics on Your Campus</h1>
                <h2 className="text-2xl">Join a movement restoring African intellectual and economic sovereignty through truth, liberty, and sound ideas.</h2>
            </div>
        </div>
    )
}

export default Hero;