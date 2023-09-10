import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography } from "@mui/material";

export default class FeaturesCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings} className='w-[100%] flex gap-16'>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px] '>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Live Chat</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Flive-chat.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px] '>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Co-browsing</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5 h-80' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fco-browsing.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px] '>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Agent Chat</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fagent-chat.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px] '>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Calls voice/video /screenshare</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8" variant="outlined">Learn more</Button>
                <img className='py-5 h-64' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fcalls.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Ticketing</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fticketing.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Auto Replies</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fautochat-bot.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Customer Tracking</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fcustomer-tracking.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Translate</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Ftranslate.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Incoginate Agent</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fincognito-agent.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Stats</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5 h-80' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fstats.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Email Campaigns</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Femail-campaign.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Triggers</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Ftriggers.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Shortcuts</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fshortcuts.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Agents Guide</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fagent-guide.svg&w=1920&q=75' alt='' />
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-100 p-5 max-w-[98%] h-[600px]'>
                <Typography className="mb-5 flex font-bold text-[40px]" variant="h4">Profiling</Typography>
                <Typography>
                    Emplorium is the one chat software that does it all.
                </Typography>
                <Button className="max-w-[140px] my-8 mt-20" variant="outlined">Learn more</Button>
                <img className='py-5' src='https://staging.emplorium.io/_next/image?url=%2Fimages%2Fprofiling.svg&w=1920&q=75' alt='' />
            </Box>
        </Slider>
      </div>
    );
  }
}