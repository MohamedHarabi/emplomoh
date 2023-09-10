import { Button, Container } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className=' bg-blue-900'>
        <Container className='mt-12'>
            <div className='md:flex text-white pt-16 gap-[70px]'>
                <div className='flex flex-col min-[120px]:items-center mt-5'>
                    <img className='h-7 md:block' src="https://staging.emplorium.io/_next/image?url=%2Femplorium-logo-white.svg&w=256&q=75" alt="" />
                </div>
                <div className='flex flex-col min-[120px]:my-5 min-[120px]:items-center md:items-start'>
                    <a href="employer">
                        <h4 className='font-black pb-3 text-[18px]'>Solutions</h4>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Live Chat</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Video and audio chat</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Cobrowse</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Chatbot</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Knowledge base</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Contacts - a free CRM</p>
                    </a>
                </div>

                <div className='flex flex-col min-[120px]:my-5 min-[120px]:items-center md:items-start'>
                    <a href="employer">
                        <h4 className='font-black pb-3 text-[18px]'>Industry</h4>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Retail</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Finance</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Airlines</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>E-commerce</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Insurance</p>
                    </a>
                </div>

                <div className='flex flex-col min-[120px]:my-5 min-[120px]:items-center md:items-start'>
                    <a href="employer">
                        <h4 className='font-black pb-3 text-[18px]'>Resources</h4>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Comparisons</p>
                    </a>
                </div>

                <div className='flex flex-col min-[120px]:my-5 min-[120px]:items-center md:items-start'>
                    <a href="employer">
                        <h4 className='font-black pb-3 text-[18px]'>Security</h4>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>System Status</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>GDPR</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Google API Services</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>EULA</p>
                    </a>
                </div>

                <div className='flex flex-col min-[120px]:my-5 min-[120px]:items-center md:items-start'>
                    <a href="employer">
                        <h4 className='font-black pb-3 text-[18px]'>Company</h4>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>About</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Newsletter</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Careers - Join Us!</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Contact Us</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Customer reviews</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Partnerships</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 font-semibold'>Terms of use</p>
                    </a>
                </div>
            </div>
            <div className='flex min-[120px]:items-center min-[120px]:flex-col md:flex-row md:gap-[200px] lg:gap-[420px]'>
                <div className='flex flex-row gap-10 mt-14'>
                    <InstagramIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                    <FacebookIcon />
                </div>
                <div className=' mt-5'>
                    <h4 className='pr-[220px] font-black text-[18px] text-white pb-2'>Subscribe to our newsletter</h4>
                    <div>
                        <input className='w-[340px] mr-5 h-7 border-none outline-none p-2 rounded-md' placeholder='Enter your e-mail for updates' type="text" />
                        <Button className='rounded-md pl-5' variant='outlined'>
                            <p className='text-white font-bold'>Subscribe</p>
                        </Button>
                    </div>
                    <p className='text-white pr-[199px]'>Get the latest news about Emplorium</p>
                </div>
            </div>

            <div className='flex min-[120px]:items-center min-[120px]:gap-5 lg:gap-[365px] min-[120px]:flex-col lg:flex-row py-8'>
                <p className='text-white'>© 2023 Emplorium. All rights reserved.</p>
                <div className='flex flex-row gap-5'>
                    <a href="employer">
                        <p className='my-1 text-[12px] text-white'>Terms & Conditions</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 text-[12px] text-white'>Cookie Policy</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 text-[12px] text-white'>Security Policy</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 text-[12px] text-white'>Privacy Policy</p>
                    </a>
                    <a href="employer">
                        <p className='my-1 text-[12px] text-white'>GDPR</p>
                    </a>
                </div>
            </div>
            
        </Container>
    </div>
  )
}

export default Footer