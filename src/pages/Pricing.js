import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import CurrencyPoundOutlinedIcon from "@mui/icons-material/CurrencyPoundOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);

  const monthly = () => {
    setToggle(true);
  };
  const annually = () => {
    setToggle(false);
  };

  return (
    <Container>
      <Box className="flex flex-col items-center gap-8 py-16">
        <p className="text-[46px] text-gray-900 font-bold">
          Build Your <span className="text-purple-600">Perfect</span> System
        </p>
        <p className="text-gray-600 text-[14px] text-center max-w-lg">
          Build your perfect system. Choose your foundation and customise the
          platform to suit your business needs with our easy add-ons. Speak to
          one of our advisors for our tailored service.
        </p>
        <Button
          className="h-12 bg-purple-500 hover:bg-purple-500 rounded-xl"
          variant="contained"
        >
          Start your 14 days free trial
        </Button>
      </Box>

      <Box className="flex flex-row justify-center p-5">
        <button
          className="p-3 border-[3px] bg-gray-300 border-gray-300 text-gray-700 font-semibold"
          style={{
            backgroundColor: toggle ? "white" : "#e3e3e3",
            color: toggle ? "#310B8D" : "#343134",
          }}
          onClick={monthly}
        >
          Monthly
        </button>
        <button
          className="p-3 border-[3px] bg-gray-300 border-gray-300 text-gray-700 font-semibold border-l-0"
          style={{
            backgroundColor: toggle ? "#e3e3e3" : "white",
            color: toggle ? "#343134" : "#310B8D",
          }}
          onClick={annually}
        >
          Annually
        </button>
      </Box>
      <Box className="lg:flex min-[10px]:flex-row justify-center gap-3 min-[10px]:px-[10%] lg:px-0 my-8">
        <Box className="bg-gray-100 rounded-3xl my-3 lg:max-w-[35%] ">
          <Box className="flex p-5 gap-3">
            <DiamondOutlinedIcon className="text-[64px] text-green-400 -rotate-[20deg]" />
            <h2 className="text-[32px] font-bold text-gray-900">Basic</h2>
          </Box>
          <p className="px-5 text-gray-600 text-[13px] mb-[87px]">
            Ideal for smaller businesses. Get started creating leads and
            supporting your customers using our intuitive and dependable system
          </p>

          <Box className="flex border-y-2 my-12 px-3 py-8 items-end border-gray-400">
            <CurrencyPoundOutlinedIcon className="text-green-700 font-bold text-[64px] mb-3" />
            <p className="text-[64px] font-bold">{toggle ? "15" : "12"}</p>
            <p className="text-[10px] px-2 text-gray-600 mb-5">
              Per agent: {toggle ? "15" : "12"} per month annually, cancel any
              time
            </p>
          </Box>

          <Box className="px-7 pb-12 flex flex-col gap-2">
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Basic live chat
              functionality{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> 10 triggers{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> 10 chat bots{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Basic statistics{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Ticket creation{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Profile storage and
              creation{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Priority setting{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Broadcast chat{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Download chat{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Agent to agent chat{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Company cheat sheet{" "}
            </p>
          </Box>
          <Box className="flex flex-col items-center p-12 lg:mt-[310px]">
            <Button
              className="bg-gray-300 hover:bg-white text-black rounded-full p-4 w-[80%] text-[18px]"
              variant="contained"
            >
              Choose Plan
            </Button>
          </Box>
        </Box>

        <Box className="bg-gray-900 rounded-3xl my-3 lg:max-w-[35%]">
          <Box className="flex p-5 gap-3">
            <DiamondOutlinedIcon className="text-[64px] text-yellow-500 -rotate-[20deg]" />
            <h2 className="text-[32px] font-bold text-white">Premium</h2>
          </Box>
          <p className="px-5 text-white text-[13px] mb-[87px]">
            You are well established and need a system that can keep up with
            you. Streamline your leads, and provide your customers with the kind
            of service that will keep them coming!
          </p>

          <Box className="flex border-y-2 my-12 px-3 py-8 items-end border-gray-400">
            <CurrencyPoundOutlinedIcon className="text-yellow-700 font-bold text-[64px] mb-3" />
            <p className="text-[64px] font-bold text-white">
              {toggle ? "38" : "32"}
            </p>
            <p className="text-[10px] px-2 text-white mb-5">
              Per agent: {toggle ? "38" : "32"} per month annually, cancel any
              time
            </p>
          </Box>

          <Box className="px-7 pb-12 flex flex-col gap-2">
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" />
              Live chat, video, voice and screenshare, ghost message
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> 30 advanced
              triggers (webhooks){" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> 30 chat bots{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Full statistics{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Ticket creation{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Profile storage and
              creation, integration with CRM{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Priority setting{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Broadcast + Assign
              chat options{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Advanced queuing{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Language detection
              and conversion{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Agent guide{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> White labelling{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Chat history
              storage{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> KBA article
              creation{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Custom permissions{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Agent to agent chat{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Full audit trails{" "}
            </p>
          </Box>
          <Box className="flex flex-col items-center p-12 lg:mt-[65px]">
            <Button
              className="bg-indigo-800 hover:bg-indigo-800 text-white rounded-full p-4 w-[80%] text-[18px]"
              variant="contained"
            >
              Choose Plan
            </Button>
          </Box>
        </Box>

        <Box className="bg-gray-100 rounded-3xl my-3 lg:max-w-[33%]">
          <Box className="flex p-5 gap-3">
            <DiamondOutlinedIcon className="text-[64px] text-purple-600 -rotate-[20deg]" />
            <h2 className="text-[32px] font-bold text-gray-900">Enterprise</h2>
          </Box>
          <p className="px-5 text-gray-600 text-[13px]">
            There's nothing holding you back. Your sales, marketing and customer
            service teams have absolutely everything they need all in one easily
            navigable space. With unlimited usage and our special advanced
            features you will take your business to the next level
          </p>

          <Box className="flex border-y-2 my-12 px-3 py-8 items-end border-gray-400">
            <CurrencyPoundOutlinedIcon className="text-purple-700 font-bold text-[64px] mb-3" />
            <p className="text-[64px] font-bold">{toggle ? "53" : "44"}</p>
            <p className="text-[10px] px-2 text-gray-600 mb-5">
              Per agent: {toggle ? "53" : "44"} per month annually, cancel any
              time
            </p>
          </Box>

          <Box className="px-7 pb-12 flex flex-col gap-2">
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Live chat, video,
              voice, screenshare and cobrowse{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Unlimited advanced
              triggers{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Unlimited chat bots{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Full statistics{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Ticket creation +
              unified inbox{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Profile storage and
              creation, integration with CRM{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Priority setting{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Broadcast + Assign
              chat options{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Advanced queuing{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Language detection
              and conversion{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Agent guide{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Customised chat{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Unlimited chat
              history storage{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Unlimited KBA{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Custom permissions{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Agent to agent chat{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Multichannel
              integration{" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Site Journey
              (screen recording){" "}
            </p>
            <p className=" text-gray-600 flex flex-row items-center gap-3">
              <CheckCircleIcon className="text-green-500" /> Full audit trails{" "}
            </p>
          </Box>
          <Box className="flex flex-col items-center p-12">
            <Button
              className="bg-gray-300 hover:bg-white text-black rounded-full p-4 w-[80%] text-[18px]"
              variant="contained"
            >
              Choose Plan
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className="bg-indigo-400 p-8 rounded-3xl flex flex-col lg:flex-row">
        <Box className="lg:pr-3 lg:w-[70%]">
          <h2 className="text-[34px] text-white font-bold">
            Build Your Perfect System
          </h2>
          <p className="text-gray-200">
            Build your perfect system. Choose your foundation and customise the
            platform to suit yourBuild your perfect system.
          </p>
        </Box>
        <Box className="flex flex-col justify-center p-3">
          <Button
            variant="contained"
            className="text-black text-[14px] md:text-[18px] font-bold bg-white hover:bg-white rounded-3xl w-[64%] lg:w-[100%] h-14"
          >
            Speak to an advisor
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Pricing;
