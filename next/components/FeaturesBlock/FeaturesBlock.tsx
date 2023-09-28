import React, {
  FC, useEffect, useRef,
} from 'react';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/UI/Buttons/Button';
// import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap } from 'gsap';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Swiper from 'swiper';

gsap.registerPlugin(ScrollTrigger);

const blockData = {
  title: 'о компании',
  description: 'ООО СЗ «Завод ЖБИ-3» – это предприятие стройиндустрии, которое выполнило миссию, поставленную в те далекие годы, не растеряло опыт, знания и добрые традиции. За прошедший период коллектив завода внес весомый вклад в становление областного центра и региона.',
  button_title: 'О компании',
  button_link: '/',
  img: [
    {
      desktop: '/img/feature-block.jpg',
      mobile: '/img/feature-block.jpg',
      original: '/img/feature-block.jpg',
    },
  ],
  features: [
    {
      title: '50',
      description: 'лет на рынке',
    },
    {
      title: '101',
      description: 'башни',
    },
    {
      title: '16',
      description: 'пластины',
    },
    {
      title: '2331',
      description: 'приватные 2-этажные виллы',
    },
    {
      title: '738',
      description: 'квартир',
    },
    {
      title: '1880',
      description: 'жилая этажность',
    },

  ],
};

const FeaturesBlock: FC = () => {
  const component = useRef < HTMLDivElement >(null);
  const slider = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (component.current && blockData && blockData.features && blockData.features.length) {
      // @ts-ignore
      const swiper = new Swiper(slider.current, {
        slidesPerView: 1,
        spaceBetween: 8,
        direction: 'vertical',
        allowTouchMove: false,
        breakpoints: {
          0: {
            spaceBetween: 0,
          },
          992: {
            spaceBetween: 3,
          },
          1795: {
            spaceBetween: 8,
          },
        },
      });

      swiperRef.current = swiper;
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (blockData && blockData.features && blockData.features.length) {
        ScrollTrigger.create({
          trigger: component.current,
          start: 'top top',
          end: `+=${250 * blockData.features.length}`,
          snap: 1 / blockData.features.length,
          pin: true,
          onUpdate: (self) => {
            const progress = (Number(self.progress.toFixed(2)) * 100);
            const index = Math.floor(progress / (100 / blockData.features.length));
            // console.log(swiperRef.current?.activeIndex);
            if (index !== swiperRef.current?.activeIndex) {
              if (self.direction === 1) {
                swiperRef.current?.slideNext();
              } else {
                swiperRef.current?.slidePrev();
              }
            }
          },
        });
      }
    }, component);
    return () => ctx.revert();
  });

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }, []);

  return (
    <div ref={component} className="features-block">
      <div className="container">
        {(blockData.title) ? (
          <div className="title-gutter">
            <SectionTitle text={blockData.title} />
          </div>
        ) : ''}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-x-20 2xl:gap-x-40 4xl:gap-x-60">
          <div className="w-full h-[40vh] xl:h-[80vh] relative">
            <Image fill objectFit="cover" src={blockData.img[0].desktop} alt={(blockData.title) ? blockData.title : 'Блок преимуществ'} />
          </div>
          <div className="flex flex-col justify-between">
            <div className="">
              {(blockData.description) ? (
                <div className="t3" dangerouslySetInnerHTML={{ __html: blockData.description }} />
              ) : ''}
              {(blockData.button_title && blockData.button_link) ? (
                <Link href={blockData.button_link}>
                  <div className="w-fit mt-4 3xl:mt-8">
                    <Button size="sm" text={blockData.button_title} />
                  </div>
                </Link>
              ) : ''}
            </div>
            {(blockData.features && blockData.features.length) ? (
              <div className=" w-full mt-10 xl:mt-0 pt-1 sm:pt-5 border-t-[1px] border-black h-[200px] sm:h-[360px] xl:h-[450px] 4xl:h-[500px] overflow-hidden">
                <div className="features-block__slider" ref={slider}>
                  <div className="swiper-wrapper">
                    {blockData.features.map((item, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <div className="features-block__slide swiper-slide" key={i}>
                        <div className="flex items-center justify-between">
                          <h6>{item.title}</h6>
                          <p className="t2 uppercase">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : ''}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FeaturesBlock;
