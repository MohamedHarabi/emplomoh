import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

export default class BlogsCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
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
        <Slider {...settings}>
            <Box className='gap-5 flex flex-col bg-gray-200 rounded-lg max-w-[98%]'>
                <img className='rounded-t-lg' src='https://staging.emplorium.io/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D870%26q%3D80&w=1920&q=75' alt='' />
                <Typography className="mb-5 flex px-2 font-semibold" variant="h5">The secret to great teamwork</Typography>
                <Typography className="flex pb-3 text-gray-500 px-5 font-medium">
                    Collaboration has become more complex,
                    but success still depends on the fundamentals. Collaboration has become more complex, but success still depends on the fundamentals.
                </Typography>
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-200 rounded-lg max-w-[98%]'>
                <img className='rounded-t-lg' src='https://staging.emplorium.io/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D870%26q%3D80&w=1920&q=75' alt='' />
                <Typography className="mb-5 flex px-2 font-semibold" variant="h5">The secret to great teamwork 2</Typography>
                <Typography className="flex pb-3 text-gray-500 px-5 font-medium">
                    Collaboration has become more complex,
                    but success still depends on the fundamentals. Collaboration has become more complex, but success still depends on the fundamentals.
                </Typography>
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-200 rounded-lg max-w-[98%]'>
                <img className='rounded-t-lg' src='https://staging.emplorium.io/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D870%26q%3D80&w=1920&q=75' alt='' />
                <Typography className="mb-5 flex px-2 font-semibold" variant="h5">The secret to great teamwork 3</Typography>
                <Typography className="flex pb-3 text-gray-500 px-5 font-medium">
                    Collaboration has become more complex,
                    but success still depends on the fundamentals. Collaboration has become more complex, but success still depends on the fundamentals.
                </Typography>
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-200 rounded-lg max-w-[98%]'>
                <img className='rounded-t-lg' src='https://staging.emplorium.io/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D870%26q%3D80&w=1920&q=75' alt='' />
                <Typography className="mb-5 flex px-2 font-semibold" variant="h5">The secret to great teamwork 4</Typography>
                <Typography className="flex pb-3 text-gray-500 px-5 font-medium">
                    Collaboration has become more complex,
                    but success still depends on the fundamentals. Collaboration has become more complex, but success still depends on the fundamentals.
                </Typography>
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-200 rounded-lg max-w-[98%]'>
                <img className='rounded-t-lg' src='https://staging.emplorium.io/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D870%26q%3D80&w=1920&q=75' alt='' />
                <Typography className="mb-5 flex px-2 font-semibold" variant="h5">The secret to great teamwork 5</Typography>
                <Typography className="flex pb-3 text-gray-500 px-5 font-medium">
                    Collaboration has become more complex,
                    but success still depends on the fundamentals. Collaboration has become more complex, but success still depends on the fundamentals.
                </Typography>
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-200 rounded-lg max-w-[98%]'>
                <img className='rounded-t-lg' src='https://staging.emplorium.io/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D870%26q%3D80&w=1920&q=75' alt='' />
                <Typography className="mb-5 flex px-2 font-semibold" variant="h5">The secret to great teamwork 6</Typography>
                <Typography className="flex pb-3 text-gray-500 px-5 font-medium">
                    Collaboration has become more complex,
                    but success still depends on the fundamentals. Collaboration has become more complex, but success still depends on the fundamentals.
                </Typography>
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-200 rounded-lg max-w-[98%]'>
                <img className='rounded-t-lg' src='https://staging.emplorium.io/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D870%26q%3D80&w=1920&q=75' alt='' />
                <Typography className="mb-5 flex px-2 font-semibold" variant="h5">The secret to great teamwork 7</Typography>
                <Typography className="flex pb-3 text-gray-500 px-5 font-medium">
                    Collaboration has become more complex,
                    but success still depends on the fundamentals. Collaboration has become more complex, but success still depends on the fundamentals.
                </Typography>
            </Box>
            <Box className='gap-5 flex flex-col bg-gray-200 rounded-lg max-w-[98%]'>
                <img className='rounded-t-lg' src='https://staging.emplorium.io/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522071820081-009f0129c71c%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D870%26q%3D80&w=1920&q=75' alt='' />
                <Typography className="mb-5 flex px-2 font-semibold" variant="h5">The secret to great teamwork 8</Typography>
                <Typography className="flex pb-3 text-gray-500 px-5 font-medium">
                    Collaboration has become more complex,
                    but success still depends on the fundamentals. Collaboration has become more complex, but success still depends on the fundamentals.
                </Typography>
            </Box>
        </Slider>
      </div>
    );
  }
}