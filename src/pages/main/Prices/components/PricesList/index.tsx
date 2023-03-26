import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { PriceCard } from '../PriceCard';

import { PricesListProps } from './types';
import * as S from './styles';

export const PricesList: React.FC<PricesListProps> = ({ printPrices }) => {

  return (
    <Swiper
      slidesPerView='auto'
      spaceBetween={12}
      pagination={{
        clickable: true,
      }}
    >
      {printPrices.map(printPrice => (
        <S.SwiperSlideStyled key={printPrice.id}>
          <PriceCard printPrice={printPrice} />
        </S.SwiperSlideStyled>
      ))}
    </Swiper>
  );
};
