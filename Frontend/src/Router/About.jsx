import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Router/About.css";
import { Paper } from "@mui/material";
import Typing from "react-typing-animation";

const About = () => {
  const [faqs, setfaqs] = useState([]);
  const [data, setData] = useState({ email: "" });

  const navigate = useNavigate();

  useEffect(() => {
    getfaqs();
  }, []);


  const getfaqs = async () => {
    const res = await axios.get(`http://localhost:3001/api/faqs/getFAQs`, {
      withCredentials: true,
    });
    setfaqs(res.data);
  };

  return (
    <>
      <div className="container-fluid about">
        <div className="row">
          <p
            spellcheck="false"
            className="text text-center"
            contenteditable="true"
          >
            About Us
          </p>
          <Typing speed={6}>
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
              accusamus reiciendis sequi, fugiat mollitia accusantium
              necessitatibus corporis praesentium quis qui esse veritatis
              obcaecati commodi exercitationem quisquam minima omnis amet quas
              magnam alias beatae dolorem. Nesciunt enim cumque totam voluptates
              dicta quae, corrupti vel facere provident, eum voluptatem alias
              illum veritatis non quisquam! A nesciunt culpa delectus ipsa non
              veniam aspernatur est, praesentium sunt corrupti cupiditate, quos
              laudantium hic totam sapiente asperiores autem. Nam tempora
              pariatur sapiente, minus beatae aliquam! Exercitationem, ea
              tenetur natus id pariatur amet explicabo molestiae, repellat rem
              deserunt at, voluptates veniam corporis eum aspernatur aliquam.
              Animi facere tempora aut molestiae iusto! Praesentium
              necessitatibus sit, iusto harum dolore ipsa laudantium, eos facere
              atque itaque ipsum maxime ducimus soluta voluptatum in quae nobis,
              commodi officia earum consectetur totam! Enim nulla ea earum
              officia inventore quos iste dicta natus maxime veritatis et
              consequatur, distinctio debitis nesciunt voluptas blanditiis nemo
            </h3>
            
          </Typing>

        </div>
      </div>
    </>
  );
};

export default React.memo(About);
