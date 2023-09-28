import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import { IProject } from '@/interfaces/IProject';
import Button from '@/components/UI/Buttons/Button';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectGallerySlide
  from '@/components/Projects/ProjectGallerySlide';
import ButtonSlider from '@/components/UI/Buttons/ButtonSlider';
import { useResize } from '@/app/helpers/useResize';

type TypeCurrentProjectSlide = {
  project: IProject,
};

const ProjectSlide: FC<TypeCurrentProjectSlide> = (
  { project }: TypeCurrentProjectSlide,
) => {
  const {
    id, title, description, gallery,
  } = project;
  const galleryMain = gallery
    ? [gallery[gallery.length - 1], ...gallery.slice(0, gallery.length - 2)]
    : [];
  const galleryAdd = gallery
    ? [...gallery.slice(1, gallery.length - 1), gallery[0]]
    : [];
  const { isScreenXl } = useResize();
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
      className="flex flex-col xl:flex-row justify-between items-start gap-6 xl:gap-8 2xl:gap-24 3xl:gap-36 project-gallery h-full"
    >
      <div className="first-col w-4/5 2xl:w-3/5 flex flex-col h-full border-b-[1.3px] border-black" ref={activeSlideRef}>
        <div className="flex justify-end items-center gap-2 w-full mb-6 3xl:mb-12">
          <div className="swiper-button-prev">
            <ButtonSlider size={isScreenXl ? ('') : ('sm')} reverse />
          </div>
          <div className="swiper-button-next">
            <ButtonSlider size={isScreenXl ? ('') : ('sm')} />
          </div>
        </div>
        <div className="flex justify-between w-full h-full">
          <div className="w-[50%] xl:pr-14 2xl:pr-20 3xl:pr-28">
            <div className="h10-medium text-black mb-5">{title}</div>
            {project.min_price && <div className="h12 mb-8">{project.min_price}</div>}
            <div className="t3 text-black mb-12">{description}</div>
            <div className="w-fit">
              <Button size="sm" text="Подробнее о проекте" />
            </div>
          </div>
          <div className="w-[50%] relative h-auto">
            {refRendered && gallery && gallery.length > 0
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
                  className="project-gallery__main_slider h-full"
                >
                  {galleryMain.map((slide: string) => (
                    <SwiperSlide key={slide} className="h-full">
                      <ProjectGallerySlide src={slide} link="/" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                )}
          </div>
        </div>
      </div>
      <div className="sec-col w-2/5 relative h-full">
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
          className="project-gallery__add_slider h-full"
        >
          {galleryAdd.slice(1, gallery.length).map((slide: string) => (
            <SwiperSlide key={slide}>
              <ProjectGallerySlide src={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        )}
      </div>
    </div>
  );
};

export default ProjectSlide;
