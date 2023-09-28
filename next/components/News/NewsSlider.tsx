import React, { useEffect, useRef } from 'react';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import ButtonSlider from '@/components/UI/Buttons/ButtonSlider';
import NewsSliderList from '@/components/News/NewsSliderList';
import Button from '@/components/UI/Buttons/Button';
import { useResize } from '@/app/helpers/useResize';

const NewsSlider = () => {
  const news = [
    {
      id: 1,
      title: 'МОНОЛИТНЫЕ РАБОТЫ ПОЧТИ ЗАВЕРШЕНЫ',
      description: '',
      date: '5’ апреля 2023',
      type: 'unfilled',
      img: '/img/news.jpg',
    },
    {
      id: 2,
      title: 'КАК СТАТЬ НАСТОЯЩИМ ТВОРЦОМ В КВАРТИРЕ С ЧИСТОВОЙ ОТДЕЛКОЙ',
      description: 'Издание «Деловой Петербург» признало жилой комплекс «Полис Приморский» проектом года в сегменте комфорт-класса.',
      date: '28’ Апреля 2023',
      type: 'filled',
      img: '/img/news_3.jpg',
    },
    {
      id: 3,
      title: 'поздравляем с днем россии',
      description: '',
      date: '12’ июня 2023',
      type: 'unfilled',
      img: '/img/news_2.jpg',
    },
    {
      id: 4,
      title: 'ПОВЫШЕНИЕ СТАВКИ ДО 12% — НЕ ПРИГОВОР: КОМУ ПОЛОЖЕНЫ СКИДКИ НА ИПОТЕКУ И КАК ЕЕ ПОЛУЧИТЬ',
      description: '',
      date: '5’ августа 2023',
      type: 'unfilled',
      img: '/img/news.jpg',
    },
    {
      id: 5,
      title: 'МОНОЛИТНЫЕ РАБОТЫ ПОЧТИ ЗАВЕРШЕНЫ',
      description: '',
      date: '5’ апреля 2023',
      type: 'unfilled',
      img: '/img/news_2.jpg',
    },
  ];

  const { isScreenXl } = useResize();
  const sliderRef = useRef(null);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [isScreenXl]);

  return (
    <div className="container news-slider" ref={sliderRef}>
      <div className="title-gutter flex flex-row items-center justify-between">
        <SectionTitle text="новости" />
        <div className="flex flex-row gap-5">
          <div className="mx-auto hidden xl:block">
            <Button size="sm" text="Все новости" />
          </div>
          <div className="flex flex-row gap-5">
            <div className="swiper-button-prev">
              <ButtonSlider size={isScreenXl ? ('') : ('sm')} reverse />
            </div>
            <div className="swiper-button-next">
              <ButtonSlider size={isScreenXl ? ('') : ('sm')} />
              {' '}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 xl:mb-0">
        <NewsSliderList sliderRef={sliderRef} news={news} />
      </div>
      <div className="block xl:hidden w-[180px]">
        <Button size="sm" text="Все новости" />
      </div>
    </div>
  );
};

export default NewsSlider;
