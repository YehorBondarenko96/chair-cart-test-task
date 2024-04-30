import {
  Backdrop,
  Container
} from "./Card.styled";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({children}) => { 
  const navigate = useNavigate();

  const backdropChairRef = useRef(null);

  useEffect(() => {
    if (backdropChairRef.current) {
    
    const backdropChair = backdropChairRef.current;

    const handelClickBackdrop = (e) => {
        if (e.target.classList.contains('backdropChair')) {
            closeModal();
        }
    };

      const closeModal = () => { 
        window.removeEventListener('keydown', onEscPress);
        backdropChair.removeEventListener('click', handelClickBackdrop);
        navigate('/');
    };

    const onEscPress = e => {
      if (e.code === 'Escape') {
        closeModal()
      };
    };

      window.addEventListener('keydown', onEscPress);
      
      backdropChair.addEventListener('click', handelClickBackdrop);

      return () => {
        window.removeEventListener('keydown', onEscPress);
      };
        }
  }, [navigate]);

  return (
    <Backdrop ref={backdropChairRef} className="backdropChair">
      <Container>
        {children}
      </Container>
    </Backdrop>
  )
};