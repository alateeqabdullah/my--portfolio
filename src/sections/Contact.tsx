import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import Link from 'next/link';



export const ContactSection = () => {
  return (
    <section id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <main className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
          <div
            className='absolute inset-0 opacity-5 -z-10'
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>Lets create something amazing together</h2>
              <p className='text-sm md:text-base mt-2'>
                Ready to bring your next project to life? Lets connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <Link href={"/contact"} className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'>
                <span className='font-semibold'>
                  Contact Me
                </span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
};