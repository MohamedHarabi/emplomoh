import { useState } from 'react'
import { AppBar, IconButton, Stack, Toolbar, Button, Menu, MenuItem, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [ t, i18n ] = useTranslation()
    const [langfr, setLangfr] = useState(false)
    const [langar, setLangar] = useState(false)
    const [langen, setLangen] = useState(true)


    const fr = () => {
        setLangfr(true)
        setLangar(false)
        setLangen(false)
    }
    const ar = () => {
        setLangar(true)
        setLangen(false)
        setLangfr(false)
    }
    const en = () => {
        setLangen(true)
        setLangfr(false)
        setLangar(false)
    }

    const history = useNavigate()

    const [anchorElR, setAnchorElR] = useState(null)
    const [anchorElP, setAnchorElP] = useState(null)
    const [anchorElL, setAnchorElL] = useState(null)
    const [anchorElS, setAnchorElS] = useState(null)
    const openR = Boolean(anchorElR)
    const openP = Boolean(anchorElP)
    const openL = Boolean(anchorElL)
    const openS = Boolean(anchorElS)
    const handleHoverR = (event) => {
        setAnchorElR(event.currentTarget)
    } 
    const handleCloseR = () => {
        setAnchorElR(null)
    }
    const handleHoverP = (event) => {
        setAnchorElP(event.currentTarget)
    } 
    const handleCloseP = () => {
        setAnchorElP(null)
    }
    const handleClickL = (event) => {
        setAnchorElL(event.currentTarget)
    } 
    const handleCloseL = () => {
        setAnchorElL(null)
    }
    const handleClickS = (event) => {
        setAnchorElS(event.currentTarget)
    } 
    const handleCloseS = () => {
        setAnchorElS(null)
    }

  return (
    <AppBar style={{ background: '#fff' }} position='sticky' className='items-center h-16'>
        <Toolbar>
            <IconButton onClick={() => history('/')} size='large' edge='center' aria-label='logo'>
                <img className='ml-10 h-6 mr-16' src="https://staging.emplorium.io/_next/image?url=%2Femplorium-logo.svg&w=256&q=75" alt="" />
            </IconButton>
            
            <Stack direction='row' spacing={2}>
                <Box className='hidden lg:inline-flex mt-2 gap-8'>
                    <p onClick={() => history('/whychooseus')} className='cursor-pointer hover:underline text-black hover:text-blue-600'>{t('whychooseus')}</p>
                    <p 
                        className='text-black cursor-default'
                        color='black' 
                        id='product-button' 
                        onMouseEnter={handleHoverP} 
                        aria-controls={ openP ? 'product-menu' : undefined }
                        aria-haspopup='true'
                        aria-expanded={openP ? 'true' : undefined}
                    >{t('product')}<ArrowDropDownIcon /></p>
                    
                    <p
                        className='cursor-default text-black'
                        color='black' 
                        id='resources-button' 
                        onMouseEnter={handleHoverR}
                        aria-controls={ openR ? 'resources-menu' : undefined }
                        aria-haspopup='true'
                        aria-expanded={openR ? 'true' : undefined}
                    >{t('resources')} <ArrowDropDownIcon /> </p>
                    <p onClick={() => history('/features')} className='cursor-pointer text-black hover:underline hover:text-blue-600' color='black'>{t('features')}</p>
                    <p onClick={() => history('/pricing')} className='cursor-pointer text-black hover:underline hover:text-blue-600' color='black'>{t('pricing')}</p>

                </Box>
                <Box 
                    id='lang-button' 
                    className='flex'
                    onClick={handleClickL}
                    aria-controls={ openP ? 'lang-menu' : undefined }
                    aria-haspopup='true'
                    aria-expanded={openP ? 'true' : undefined}
                 >
                  <img className={langfr ? 'ml-8 w-5 cursor-pointer': 'hidden'} src='https://hatscripts.github.io/circle-flags/flags/fr.svg'  alt="en" 
                  />
                  <img className={langar ? 'ml-8 w-5 cursor-pointer': 'hidden'} src='https://hatscripts.github.io/circle-flags/flags/sa.svg'  alt="en" 
                  />
                  <img className={langen ? 'ml-8 w-5 cursor-pointer': 'hidden'} src='https://hatscripts.github.io/circle-flags/flags/gb.svg'  alt="en" 
                  />
                  <ArrowDropDownIcon className='mt-1 cursor-pointer' />
                </Box>
                
                
                <Box className='hidden sm:inline-flex gap-2'>
                    <Button onClick={() => window.open('https://app.staging.emplorium.io/login/')} variant="text text-black">{t('login')}</Button>
                    <Button onClick={() => window.open('https://app.staging.emplorium.io/signup')} variant="contained bg-purple-500 hover:bg-purple-500">{t('trial')}</Button>
                </Box>
                <Box
                    id='switch-button' 
                    className='flex lg:hidden'
                    onClick={handleClickS}
                    aria-controls={ openS ? 'switch-menu' : undefined }
                    aria-haspopup='true'
                    aria-expanded={openS ? 'true' : undefined}
                >
                    <MenuIcon className='text-black mx-3 mt-1 cursor-pointer' />
                </Box>
                
            </Stack>
            <Menu id='resources-menu' anchorEl={anchorElR} open={openR} MenuListProps={{ 
                'aria-labelledby': 'resources-button'
             }} 
              onClose={handleCloseR}
             >

                <Box className=''> 
                    
                    <Box className='xl:flex'>
                    
                        <Box className='xl:ml-5'>
                            <h4 className='cursor-text mb-5 text-blue-800 font-semibold'>Library</h4>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceVideo.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Video Guides</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Omnichannel customer <br /> service platform</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceBlog.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Blog</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Advanced ticketing system</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceContactUs.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Contact us</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Fastest live chat on the market</p>
                                </Box>
                                
                            </Box>
                            
                            
                        </Box>
                        <Box>
                            <Box className='mb-5 m-3 cursor-pointer mt-11 block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceHelp.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Help Docs</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Omnichannel customer <br /> service platform</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceApi.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>APIS's and Developers</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Advanced ticketing system</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceTyping.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Typing Test</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Fastest live chat on the market</p>
                                </Box>
                                
                            </Box>
                            
                            
                        </Box>
                        <Box>
                            <Box className='mb-5 m-3 cursor-pointer mt-11 block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceCheck.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Check List</h5>
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Omnichannel customer <br /> service platform</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceCostumers.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Our Customers</h5>
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Advanced ticketing system</p>
                                </Box>
                            </Box>
                            
                        </Box>
                        <Box className='xl:ml-24'>
                            <h4 className='cursor-text mb-5 text-green-700 font-semibold'>Services</h4>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-green-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceDemo.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Request a demo</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Omnichannel customer <br /> service platform</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-green-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceSupport.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Request Consultation</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Advanced ticketing system</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-green-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceSpeakAgent.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Speak to a Emplorium agent</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Fastest live chat on the market</p>
                                </Box>
                                
                            </Box>
                            
                            
                        </Box>
                        <Box className='mt-8'>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-green-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FresourceRequestFeature.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Features request board</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Omnichannel customer <br /> service platform</p>
                                </Box>
                            </Box>
                        </Box>
                        
                              
                    
                    </Box>
                </Box>
            </Menu>
            <Menu id='product-menu' anchorEl={anchorElP} open={openP} MenuListProps={{ 
                'aria-labelledby': 'product-button'
             }} 
              onClose={handleCloseP}
             >
                
             <Box> 
                    
                    <Box className='xl:flex'>

                    <Box className='mr-12 ml-5'>
                        <h4 className='cursor-text mb-5 text-pink-800 font-semibold'>Overview</h4>
                        <Box className='mb-5 m-3 block h-[90px] w-[250px] cursor-pointer hover:bg-pink-100'>
                            <Box className='m-2 '>
                                <Box className=' flex'>
                                    <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FtakeTour.svg&w=1920&q=75" alt="" />
                                    <h5 className='font-bold mt-2'>Take a tour</h5>
                            
                                </Box>
                                <p className='text-[13px] ml-10 text-gray-600'>Omnichannel customer <br /> service platform</p>
                            </Box>
                        </Box>
                        <img src="https://staging.emplorium.io/_next/image?url=%2Fimages%2FplaceholderPic.png&w=1920&q=75" alt="" />
                    </Box>
                    
                        <Box>
                            <h4 className='cursor-text mb-5 text-blue-800 font-semibold'>Product</h4>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FliveChatIcon.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Live Chat</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Omnichannel customer <br /> service platform</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FchatBotIcon.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Chat Bot</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Advanced ticketing system</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FhelpDesk.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>CRM</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Fastest live chat on the market</p>
                                </Box>
                                
                            </Box>
                            
                            
                        </Box>
                        <Box>
                            <Box className='mb-5 m-3 cursor-pointer mt-11 block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FEmpMeet.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Emplorium meet</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Omnichannel customer <br /> service platform</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FsharedInbox.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Shared Inbox</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Advanced ticketing system</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FkbaIcon.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Knowledge base</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Fastest live chat on the market</p>
                                </Box>
                                
                            </Box>
                            
                            
                        </Box>
                        <Box>
                            <Box className='mb-5 m-3 cursor-pointer mt-11 block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FcobrowseIcon.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Cobrowse</h5>
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Omnichannel customer <br /> service platform</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-4 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FticketIcon.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Ticketing</h5>
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Advanced ticketing system</p>
                                </Box>
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-blue-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FanalyticIcon.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Analytics</h5>
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Advanced ticketing system</p>
                                </Box>
                            </Box>
                            
                        </Box>
                        <Box className='xl:ml-12'>
                            <h4 className='cursor-text mb-5 text-green-700 font-semibold'>Use For</h4>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-green-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FbuisnessSol.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Business Solutions</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Omnichannel customer <br /> service platform</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-green-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FindustrySol.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Industry Solutions</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Advanced ticketing system</p>
                                </Box>
                                
                            </Box>
                            <Box className='mb-5 m-3 cursor-pointer block h-[90px] w-[250px] hover:bg-green-100'>
                                <Box className='m-2 '>
                                    <Box className=' flex'>
                                        <img className='mr-2 h-6 mt-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FuseCases.svg&w=32&q=75" alt="" />
                                        <h5 className='font-bold mt-2'>Use Cases</h5>
                                
                                    </Box>
                                     <p className='text-[13px] ml-10 text-gray-600'>Fastest live chat on the market</p>
                                </Box>
                                
                            </Box>
                            
                            
                        </Box>
                        
                    </Box>
                </Box>

            </Menu>
            <Menu className='mx-0' id='lang-menu' anchorEl={anchorElL} open={openL} MenuListProps={{ 
                'aria-labelledby': 'lang-button'
             }} 
              onClose={handleCloseL}
             >
                <MenuItem onClick={handleCloseL}>
                    <div className='flex' onClick={() => {
                        i18n.changeLanguage('en');
                    }}>
                        <div className='flex' onClick={en}>
                            <img className='mr-2 h-5' src='https://hatscripts.github.io/circle-flags/flags/gb.svg' alt=''/>English (UK)
                        </div>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleCloseL}>
                    <div className='flex' onClick={() => {
                        i18n.changeLanguage('fr');
                    }}>
                        <div className='flex' onClick={fr}>
                            <img className='mr-2 h-5' src='https://hatscripts.github.io/circle-flags/flags/fr.svg' alt=''/>Francais
                        </div>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleCloseL}>
                    <div className='flex' onClick={() => {
                        i18n.changeLanguage('ar');
                    }}>
                        <div className='flex' onClick={ar}>
                        <img className='mr-2 h-5' src='https://hatscripts.github.io/circle-flags/flags/sa.svg' alt=''/>العربية
                        </div>
                    </div>
                </MenuItem>

            </Menu>

            <Menu className='mx-0' id='switch-menu' anchorEl={anchorElS} open={openS} MenuListProps={{ 
                'aria-labelledby': 'switch-button'
             }} 
              onClick={handleCloseS}
             >

             <Box className='flex flex-col gap-5 w-64 items-center'>
                    <p onClick={() => history('/whychooseus')} className='cursor-pointer hover:underline text-black hover:text-blue-600'>{t('whychooseus')}</p>
                    <p 
                        className='text-black cursor-default'
                        color='black' 
                        id='product-button' 
                        onClick={handleHoverP} 
                        aria-controls={ openP ? 'product-menu' : undefined }
                        aria-haspopup='true'
                        aria-expanded={openP ? 'true' : undefined}
                    >{t('product')}<ArrowDropDownIcon /></p>
                    
                    <p
                        className='cursor-default text-black'
                        color='black' 
                        id='resources-button' 
                        onClick={handleHoverR}
                        aria-controls={ openR ? 'resources-menu' : undefined }
                        aria-haspopup='true'
                        aria-expanded={openR ? 'true' : undefined}
                    >{t('resources')} <ArrowDropDownIcon /> </p>
                    <p onClick={() => history('/features')} className='cursor-pointer text-black hover:underline hover:text-blue-600' color='black'>{t('features')}</p>
                    <p onClick={() => history('/pricing')} className='cursor-pointer text-black hover:underline hover:text-blue-600' color='black'>{t('pricing')}</p>

                </Box>

            </Menu>
            
        </Toolbar>
    </AppBar>
  )
}

export default Navbar