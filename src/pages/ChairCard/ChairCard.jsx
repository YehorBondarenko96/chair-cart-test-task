import { Card } from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { selectItems, selectScreenWidth } from "../../redux/selectors";
import { useParams } from "react-router-dom";
import { UlChairsPhoto } from "../../components/UlChairsPhoto/UlChairsPhoto";
import {
  DivImages,
  Button,
  IconButton
} from "./ChairCard.styled";
import { useEffect, useRef } from "react";
import sprite from 'assets/sprite.svg';

const ChairCard = () => { 
  const {id} = useParams();
  const chair = useSelector(selectItems).find(item => item.id === id);
  const realScreenWidth = useSelector(selectScreenWidth);


  const divImagesRef = useRef(null);

  useEffect(() => {
    if (divImagesRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const divImages = divImagesRef.current;

      divImages.style.height = screenWidth / (coef * 2) + 'px';
    }
  }, [realScreenWidth]);

  return (
    <Card>
      {chair &&
        <DivImages ref={divImagesRef}>
          <Button>
            <IconButton>
            <use href={`${sprite}#arrow-up`} />
            </IconButton>
          </Button>
          <UlChairsPhoto photos={chair.images} title={chair.title} />
          <Button>
            <IconButton>
            <use href={`${sprite}#arrow-down`} />
            </IconButton>
          </Button>
        </DivImages>
      }
    </Card>
  )
};

export default ChairCard;