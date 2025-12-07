import React from 'react'
import "./FAQ.css"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const FAQ = ({faq}) => {
  return (
    <div className='faq-section'>
        <h1>FAQs</h1>

        <div className='accordion'>
        {faq.map((faq, item) => (
          <Accordion key={item} sx={{background: "#121212", border: "1px solid rgba(255, 255, 255, 1)", width: "70%", marginTop: "20px"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
            <Typography component="span">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{background: "white", color: "black", fontWeight: "500", paddingLeft: "30px"}}>
            {faq.answer}
          </AccordionDetails>
        </Accordion>
        ))}
        </div>
    </div>
  )
}

export default FAQ