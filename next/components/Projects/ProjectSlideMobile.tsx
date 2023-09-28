import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import { IProject } from '@/interfaces/IProject';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useResize } from '@/app/helpers/useResize';
import ButtonSlider from '@/components/UI/Buttons/ButtonSlider';
import Button from '@/components/UI/Buttons/Button';
import ProjectGallerySlide from '@/components/Projects/ProjectGallerySlide';

type TypeCurrentProjectSlide = {
  project: IProject,
};

const ProjectSlideMobile: FC<TypeCurrentProjectSlide> = ({ project }: TypeCurrentProjectSlide) => {
  const { isScreenXl } = useResize();
  const {
    id, title, description, gallery,
  } = project;
  const activeSlideRef = useRef<any>(null);
  const [refRendered, setRefRendered] = useState<boolean>(false);
  useEffect(() => {
    if (activeSlideRef.current !== null) {
      setRefRendered(true);
    }
  }, [activeSlideRef]);
  return (
    <div
      id={String(id)}
      className="flex flex-col xl:flex-row justify-between items-start gap-4 md:gap-6 project-gallery h-full"
      ref={activeSlideRef}
    >
      <div className="w-full flex flex-col">
        <div className="w-full">
          <div className="h10-medium text-black mb-2">{title}</div>
          {project.min_price && <div className="h12 mb-2 md:mb-4">{project.min_price}</div>}
          <div className="t3 text-black mb-4 md:mb-6">{description}</div>
          <div className="w-fit">
            <Button size="sm" text="Подробнее о проекте" />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-between gap-4">
        <div className="w-5/6 flex flex-col h-full">
          <div className="flex justify-end items-center gap-2 w-full mb-2">
            <div className="swiper-button-prev">
              <ButtonSlider size={isScreenXl ? ('') : ('sm')} reverse />
            </div>
            <div className="swiper-button-next">
              <ButtonSlider size={isScreenXl ? ('') : ('sm')} />
            </div>
          </div>
          {refRendered
              && gallery
              && gallery.length > 0
              && (
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                speed={800}
                allowTouchMove={false}
                spaceBetween={100}
                navigation={{
                  nextEl: activeSlideRef.current.querySelector('.swiper-button-next'),
                  prevEl: activeSlideRef.current.querySelector('.swiper-button-prev'),
                }}
                className="project-gallery__slider w-full h-full flex-shrink"
              >
                {gallery.map((slide: string) => (
                  <SwiperSlide key={slide} className="h-full">
                    <ProjectGallerySlide src={slide} link="/" />
                  </SwiperSlide>
                ))}
              </Swiper>
              )}
        </div>
        <div className="w-full h-full">
          {refRendered && gallery && gallery.length > 0 && (
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            allowTouchMove={false}
            speed={800}
            spaceBetween={100}
            navigation={{
              nextEl: activeSlideRef.current.querySelector('.swiper-button-next'),
              prevEl: activeSlideRef.current.querySelector('.swiper-button-prev'),
            }}
            className="project-gallery__slider h-full"
          >
            {gallery.slice(1, gallery.length).map((slide: string) => (
              <SwiperSlide key={slide}>
                <ProjectGallerySlide src={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlideMobile;
