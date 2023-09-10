import { Box, Button } from '@mui/material'


const Features = () => {
  return (
  <div className='px-16'>
      <Box className='bg-gray-100 p-5 flex mt-12'>
        <Box className='flex flex-col py-10 gap-7 pl-4'>
          <h2 className='font-bold text-[36px] mt-8 lg:text-start text-center'>Features</h2>
          <p className='text-gray-700 max-w-[850px] text-center lg:text-start'>
            Emplorium is the one chat software that 
            does it all. Take your business to the 
            next level by optimising the way you 
            interact with customers and vistiors.
          </p>
          <input className=' w-[90%] h-10 mx-auto lg:ml-1 flex shadow-lg outline-none border-none flex-col rounded-3xl p-3' type="text" />
        </Box>
        <img className='hidden lg:flex h-96 ml-16 p-8  ' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureHead.svg&w=1920&q=75" alt="" />
      </Box>
    <Box className='flex mt-14 p-5 gap-16'>
      <Box>
          <Box className='hidden md:flex flex-col gap-8 min-w-[250px] mt-8'>
            <Box className='flex flex-col gap-3'>
              <h3 className='text-[22px] font-semibold'>Collection</h3>
              <Box className='ml-5 h-10 flex items-center w-[85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Any</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Featured</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Popular</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>New</p></Box>
            </Box>

            <Box>
              <h3 className='text-[22px] font-semibold'>Available in</h3>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Any</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Free</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Ticket</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Ticket + Chat</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>All-inclusive</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Extensions</p></Box>
            </Box>

            <Box>
              <h3 className='text-[22px] font-semibold'>Suitable for</h3>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Any</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Individuals</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Start-ups</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>SMBs</p></Box>
              <Box className='ml-5 h-10 flex items-center [85%] hover:bg-gray-400 rounded-2xl'><p className='px-3'>Enterprise</p></Box>
            </Box>

            <Box>
              <h3 className='text-[22px] font-semibold'>Category</h3>
            </Box>

          </Box>
        </Box>
        <Box>
          
        </Box>
        <Box className='w-[130%] lg:w-[80%]'>
            <h2 className='text-[34px] font-semibold my-5'>List of features (100)</h2>

            <Box className='flex gap-[10%] border-[1px] rounded-2xl p-8 bg-gray-50 items-center'>
              <img className='h-16 lg:h-56' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureTicket.svg&w=1920&q=75" alt="" />
              <Box className='flex flex-col gap-4 mb-5'>
                <h1 className='text-[34px] font-bold'>Ticketing system</h1>
                <p className='text-[20px]'>Organise your communications by creating tickets.</p>
              </Box>
            </Box>

            <Box className='flex gap-5 my-5 flex-col lg:flex-row'>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgent.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agents</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAuditLog.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Audit log</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentranking.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentTicket.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>

            </Box>
            <Box className='flex gap-5 my-5 flex-col lg:flex-row'>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-indigo-800 before:rounded-2xl before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgent.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agents</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAuditLog.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Audit log</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentranking.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentTicket.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>

            </Box>

            <Box className='flex gap-[10%] border-[1px] rounded-2xl p-8 bg-gray-50 items-center'>
              <img className='h-16 lg:h-56' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureLiveChat.svg&w=1920&q=75" alt="" />
              <Box className='flex flex-col gap-4 mb-5'>
                <h1 className='text-[34px] font-bold'>Live chat</h1>
                <p className='text-[20px]'>Organise your communications by creating tickets.</p>
              </Box>
            </Box>

            <Box className='flex gap-5 my-5 flex-col lg:flex-row'>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-indigo-800 before:rounded-2xl before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgent.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agents</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAuditLog.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Audit log</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentranking.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentTicket.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>

            </Box>

            <Box className='flex gap-5 my-5 flex-col lg:flex-row'>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-indigo-800 before:rounded-2xl before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgent.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agents</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAuditLog.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Audit log</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentranking.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentTicket.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>

            </Box>

            <Box className='flex gap-[10%] border-[1px] rounded-2xl p-8 bg-gray-50 items-center'>
              <img className='h-16 lg:h-56' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureTrigger.svg&w=1920&q=75" alt="" />
              <Box className='flex flex-col gap-4 mb-5'>
                <h1 className='text-[34px] font-bold'>Triggers</h1>
                <p className='text-[20px]'>Organise your communications by creating tickets.</p>
              </Box>
            </Box>

            <Box className='flex gap-5 my-5 flex-col lg:flex-row'>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-indigo-800 before:rounded-2xl before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgent.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agents</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAuditLog.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Audit log</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentranking.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentTicket.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>

            </Box>

            <Box className='flex flex-col lg:flex-row gap-5 my-5'>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-indigo-800 before:rounded-2xl before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgent.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agents</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAuditLog.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Audit log</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentranking.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>
              <Box className="flex cursor-pointer flex-col items-start rounded-2xl border-[1px] p-8 relative transition-colors before:absolute before:left-0 before:top-0  before:-z-10 before:h-full before:w-full before:origin-top-left  before:scale-x-0 before:bg-indigo-800 before:rounded-2xl  before:transition-transform before:duration-700 before:hover:scale-x-100 ">
                <img className='h-14' src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FfeatureAgentTicket.svg&w=1920&q=75" alt="" />
                <p className='text-[20px] font-semibold mb-3'>Agent ranking</p>
                <p className='text-gray-500 text-[13px]'>
                Lorem ipsum dolor sit amet, 
                conseter adipisicing elit. consecteur adipisicing elit
                </p>
              </Box>

            </Box>


        </Box>


    </Box>

    <Box className='flex flex-col items-center p-16 my-16 gap-8 bg-gray-100'>
      <p className='text-[56px] text-center font-bold'>Build your bespoke system</p>
      <Button className='h-16 bg-purple-500 hover:bg-purple-500 rounded-xl font-bold text-[16px]' variant='contained'>Contact one of our experts now</Button>
    </Box>
  </div>
  )
}

export default Features