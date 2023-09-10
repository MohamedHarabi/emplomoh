import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next"


export default function SimpleAccordion() {
  const [ t , i18n ] = useTranslation();

  return (
    <div className='p-8 mx-12'>
      <Accordion className='my-2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img className='h-8 mx-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2Fquestion-mark-alt.svg&w=48&q=75" alt="" />
          <Typography className='p-2'>{t('what')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='pl-14'>
            {t('is')}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='my-2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img className='h-8 mx-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2Fquestion-mark-alt.svg&w=48&q=75" alt="" />
          <Typography className='p-2'>{t('what')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='pl-14'>
          {t('is')}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='my-2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img className='h-8 mx-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2Fquestion-mark-alt.svg&w=48&q=75" alt="" />
          <Typography className='p-2'>{t('what')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='pl-14'>
          {t('is')}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='my-2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img className='h-8 mx-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2Fquestion-mark-alt.svg&w=48&q=75" alt="" />
          <Typography className='p-2'>{t('what')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='pl-14'>
          {t('is')}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='my-2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <img className='h-8 mx-2' src="https://staging.emplorium.io/_next/image?url=%2Ficons%2Fquestion-mark-alt.svg&w=48&q=75" alt="" />
          <Typography className='p-2'>{t('what')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='pl-14'>
          {t('is')}
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}