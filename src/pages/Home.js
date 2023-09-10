import { Box, Typography, Button, Container } from "@mui/material"
import { useTranslation } from "react-i18next"
import Accordion from '../components/Accordion'
import FeaturesCarousel from "../components/FeaturesCarousel"
import BlogsCarousel from "../components/BlogsCarousel"

const Home = () => {
  const [ t , i18n ] = useTranslation();

  return (
  <div>
      <Container>
      <Box className='sm:flex my-16'>
        <Box className='w-[450px] gap-5 my-20 ml-5 mr-20 flex flex-col'>
          <Typography className="mb-5 flex font-bold" variant="h4">{t('title')}</Typography>
          <Typography className="flex flex-row text-gray-500">{t('description')}</Typography>
          <Button className="flex max-w-xs bg-purple-600 hover:bg-purple-600" variant="contained">{t('trial')}</Button>
        </Box>
        <Box className='lg:ml-20 xs:mx-4 mr-0 pr-0 my-5 0'>
        <img className="h-[420px] min-h-[120px]" src="https://staging.emplorium.io/_next/image?url=%2Fimages%2Fhero.svg&w=640&q=75" alt="" />
      </Box>
      </Box>

      <Box className='flex flex-row gap-16 my-36 mx-auto justify-center'>
        <Box>
          <Typography className="font-bold" variant="h2">120k</Typography>
          <Typography className="pl-3 font-semibold">{t('p1')}</Typography>
        </Box>
        <Box>
          <Typography className="font-bold" variant="h2">750k+</Typography>
          <Typography className="pl-6 font-semibold">{t('p2')}</Typography>
        </Box>
        <Box>
          <Typography className="font-bold" variant="h2">100k</Typography>
          <Typography className="pl-6 font-semibold">{t('p3')}</Typography>
        </Box>
      </Box>
      <Box className='mx-3'>
        <Box className=' flex flex-row justify-center mb-16'>
          <img className="w-[720px] ml-[30px]" src="https://staging.emplorium.io/_next/image?url=%2Fimages%2Fhome-app.svg&w=640&q=75" alt="" />
        </Box>
        <Box className='flex flex-row mt-7 mb-4 justify-center'>
          <Typography className="font-bold" variant="h2">{t('why')}</Typography>
        </Box>
        <Box className='flex flex-row mb-12 justify-center'>
          <Typography className="max-w-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
          </Typography>
        </Box>
        <Box className='flex flex-row mb-7 justify-center'>
        <Button className="flex max-w-xs bg-purple-600 hover:bg-purple-600" variant="contained">{t('try')}</Button>
        </Box>
      </Box>
      <Box className='block items-center mt-[100px] mb-2'>
        <Box className='flex flex-row mt-7 mb-14 justify-center'>
          <Typography className="font-bold" variant="h2">{t('ourfeatures')}</Typography>
        </Box>
        <FeaturesCarousel />
      </Box>

      <Box className='my-16'>
        <Box className='flex flex-row mt-7 mb-14 justify-center'>
          <Typography className="font-bold" variant="h2">{t('blogs')}</Typography>
        </Box>
        <BlogsCarousel />
      </Box>
     
    </Container>

    <div className="bg-gray-200">
      <Container className="pb-12">
        <Typography variant="h2" className="flex justify-center pt-12 font-bold">{t('questions')}</Typography>
        <Typography variant="h6" className="flex justify-center p-3">{t('answers')}</Typography>
        <Accordion />
      </Container>
    </div>
      <Container className="mt-32">
        
            
            <Box className='flex flex-col items-center bg-gray-700 p-8 rounded-3xl mb-24 m-5'>
              <p className=" text-white font-bold text-[32px] text-center p-3" >{t('tryemp')}</p>
              <p className=" font-semibold text-white text-[22px] text-center" >{t('email')}</p>
              <Button className=" text-[24px] w-64 text-blue-900 rounded-lg bg-white hover:bg-white py-3 mt-8 mb-5">{t('signup')}</Button>
            </Box>

      </Container>

      

  </div>
    
  )
}

export default Home