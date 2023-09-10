import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import CheckTable from '../components/Table'

const Why = () => {
  return (
    <Container>
      <Box className='md:flex my-16'>
        <Box className='w-[550px] gap-5 my-20 ml-5 mr-20 flex flex-col'>
          <h4 className="mb-5 font-black text-[46px]" variant="h4">The little details make all the <span className='text-purple-800'>difference</span></h4>
          <p className="flex flex-row text-[12px] text-gray-600">
            Our all in one tool has been carefully and expertly
            thought out with logic that can be tailored to any
            and all business needs. Our small team of experts
            work around the clock to ensure that we are continually
            improving and developing our platform to be the best
            it can be and the most up-to-date with our customers’ needs.
            This flexibility in the way we work assures that as your
            business grows you can remain on a platform that adapts
            to your growing needs without having to chop and change...
          </p>
          <Button className="flex max-w-[160px] bg-purple-600 hover:bg-purple-600" variant="contained">Get Started</Button>
        </Box>
        <Box className='lg:ml-20 xs:mx-4 mr-0 pr-0 my-5 0'>
          <img className="h-[520px] min-h-[120px]" src="https://staging.emplorium.io/_next/image?url=%2Fimages%2Fwhy-choose-us-hero.svg&w=640&q=75" alt="" />
        </Box>
      </Box>

      <Box className='lg:flex gap-9'>
        <Box className='bg-gray-100 max-w-[550px] p-5 rounded-md mb-5'>
          <Box className='flex mb-5'>
            <h4 className='max-w-[500px] text-[20px] text-purple-900 font-semibold'>Emplorium was created by a small, tight knit and adaptable team. This has paved the way for</h4>
            <img className='h-10 m-5' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2Falert.svg&w=1920&q=75" alt="" />
          </Box>

          <p className='text-gray-700 text-[14px] mb-10'>
            Our features and its intricacies to be through 
            holistically ensuring that every feature makes 
            sense in its functioning from start to finish. 
            We recognised that there are multiple ways 
            to do one thing and what suits one business 
            may not suit another; or what suits your 
            business now might not suit it later down 
            the line. To overcome these hurdles we’ve 
            made it quick and easy to dynamically change 
            the same platform to meet these ever-changing 
            needs. A quick example of this may be that you 
            would want to switch between broadcasting to assigning 
            your chats and have the ability to change data displays 
            as your business scales. 
          </p>
          <Button variant='outlined'>Make a request</Button>
        </Box>

        <Box className='bg-gray-100 max-w-[550px] mb-5 p-5 rounded-md'>
          <Box className='flex mb-5'>
            <h4 className='max-w-[500px] text-[20px] mt-4 text-purple-900 font-semibold'>
              Send your requests through our requests page
            </h4>
            <img className='h-10 mx-7 my-5' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2Fquestion-mark.svg&w=1920&q=75" alt="" />
          </Box>

          <p className='text-gray-700 text-[14px] mb-32'>
            Our development roadmap is so agile we welcome 
            any and all suggestions for improvement and 
            addition of features to the platform no matter 
            how small or big let us know! Send in your 
            requests through our requests page (here) or 
            speak to one of our account managers.
          </p>
          <Button variant='outlined'>Make a request</Button>
        </Box>
      </Box>

      <Box className='flex flex-col mt-7 mb-24 items-center'>
          <Typography className='flex flex-row text-center px-12 text-[19px] font-medium' variant="p">
          Most importantly, we are the most competitively priced for what we offer. <br />
          Don’t believe us? We’ve done the hard work for you! 
          Here is a breakdown of some of the biggest chat platforms out there:
          </Typography>
      </Box>

      <CheckTable />
      
    </Container>
  )
}

export default Why