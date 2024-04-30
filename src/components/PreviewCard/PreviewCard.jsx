import {
  Li,
  Image,
  Title
} from "./PreviewCard.styled";
import { useSelector } from "react-redux";
import { selectScreenWidth } from "../../redux/selectors";
import { useEffect, useRef } from "react";

export const PreviewCard = ({ item }) => { 
  const realScreenWidth = useSelector(selectScreenWidth);

  const liRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (liRef.current && imageRef.current) {
      const screenWidth = realScreenWidth > 1000 ? 1000 : realScreenWidth;
      const coef = 2;

      const li = liRef.current;
      const image = imageRef.current;

      li.style.width = screenWidth / (coef * 2) + 'px';
      li.style.height = screenWidth / (coef * 1.3) + 'px';
      li.style.borderRadius = screenWidth / (coef * 50) + 'px';

      image.style.borderRadius = `${screenWidth / (coef * 50)}px ${screenWidth / (coef * 50)}px 0 0`;
      image.style.height = screenWidth / (coef * 1.6) + 'px';
    }
  }, [realScreenWidth]);
  
  return (
    <Li ref={liRef}>
      <Image ref={imageRef} src={item.image} />
      <Title>
        {item.title}
      </Title>
    </Li>
  )
};
