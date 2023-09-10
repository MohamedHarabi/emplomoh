import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';



export default function CheckTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><p className='pr-64'></p></TableCell>
            <TableCell align="right"><img className='h-[14px] ' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FEMPLORIUM.svg&w=128&q=75" alt="" /></TableCell>
            <TableCell align="right"><img className='h-[24px] ' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FLIVECHAT.svg&w=128&q=75" alt="" /></TableCell>
            <TableCell align="right"><img className='h-[24px] ' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FINTERCOM.svg&w=128&q=75" alt="" /></TableCell>
            <TableCell align="right"><img className='h-[24px] ' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FLIVEAGENT.svg&w=128&q=75" alt="" /></TableCell>
            <TableCell align="right"><img className='h-[20px] ' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2FACQUIRE.svg&w=128&q=75" alt="" /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              className='h-[85px]'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Feature building style
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px] bg-gray-100'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Inbuilt agent guide
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px]'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Live Chat
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px] bg-gray-100'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Enhance chat Inc video, call, screen share
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px]'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Dynamic triggers
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px] bg-gray-100'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Co-browsing
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px]'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Advanced customer profiling
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px] bg-gray-100'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Offline count acting
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px]'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Auto replies
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px] bg-gray-100'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Branding
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px]'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Chat history
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px] bg-gray-100'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Agent to agent messaging
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px]'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Integration
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px] bg-gray-100'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Multi channel integration
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px]'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Knowledge base
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px] bg-gray-100'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Ticketing
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
            </TableRow>

            <TableRow
            className='h-[85px]'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Pricing
              </TableCell>


              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"><CheckOutlinedIcon className='text-purple-900' /></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>

            
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}