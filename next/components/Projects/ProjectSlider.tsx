import React, { FC, useEffect, useState } from 'react';
import ProjectSlide
  from '@/components/Projects/ProjectSlide';
import { IProject } from '@/interfaces/IProject';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useResize } from '@/app/helpers/useResize';
import ProjectSlideMobile from '@/components/Projects/ProjectSlideMobile';
import ButtonWithText from '@/components/UI/Buttons/ButtonWithText';

const currentProjects: IProject[] = [
  {
    id: 1,
    title: 'мкр. Тура-2',
    min_price: 'от 4.5 млн руб',
    description: 'Мкр. Тура-2 располагается в развитом жилом районе Лесобазы, в районе улиц Судостроителей, Дамбовская, Константина Заслонова. Лесобаза довольно большой район и является одним из самых престижных с экологической точки зрения районов города Тюмени. Район расположен в окружении озер и непосредственной близости от р.Туры. ',
    gallery: ['/img/project_gallery1.jpg', '/img/project_gallery2.jpg', '/img/project_gallery2.jpg', '/img/project_gallery2.jpg', '/img/project_gallery2.jpg'],
    img: '',
  },
  {
    id: 2,
    title: 'мкр. Тура-3',
    min_price: 'от 4.5 млн руб',
    description: 'Мкр. Тура-2 располагается в развитом жилом районе Лесобазы, в районе улиц Судостроителей, Дамбовская, Константина Заслонова. Лесобаза довольно большой район и является одним из самых престижных с экологической точки зрения районов города Тюмени. Район расположен в окружении озер и непосредственной близости от р.Туры. ',
    gallery: ['/img/project_gallery1.jpg', '/img/project_gallery2.jpg', '/img/project_gallery2.jpg', '/img/project_gallery2.jpg'],
    img: '',
  },
  {
    id: 3,
    title: 'мкр. Тура-4',
    min_price: 'от 4.5 млн руб',
    description: 'Мкр. Тура-2 располагается в развитом жилом районе Лесобазы, в районе улиц Судостроителей, Дамбовская, Константина Заслонова. Лесобаза довольно большой район и является одним из самых престижных с экологической точки зрения районов города Тюмени. Район расположен в окружении озер и непосредственной близости от р.Туры. ',
    gallery: ['/img/project_gallery1.jpg', '/img/project_gallery2.jpg', '/img/project_gallery2.jpg', '/img/project_gallery2.jpg'],
    img: '',
  },

];

const ProjectSlider: FC = () => {
  const { width, isScreenXl } = useResize();
  const [colsWidth, setColsWidth] = useState<number[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (width < 1371) {
        setColsWidth([]);
        return;
      }
      const firstCol = document.querySelector('.first-col') as HTMLElement;
      const secCol = document.querySelector('.sec-col') as HTMLElement;
      if (firstCol && secCol) {
        setColsWidth([
          firstCol.getBoundingClientRect().width,
          secCol.getBoundingClientRect().width,
        ]);
      }
    }, 500);
  }, [width]);
  return (
    <div className="w-full h-[100vh] xl:h-[85vh] overflow-hidden">
      <div className="h-full">
        <div className="container h-full flex flex-col">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            speed={800}
            breakpoints={{
              319: {
                spaceBetween: 500,
              },
              576: {
                spaceBetween: 700,
              },
              768: {
                spaceBetween: 850,
              },
              992: {
                spaceBetween: 300,
              },
            }}
            navigation={{
              nextEl: '.current_projects .swiper-button-next',
              prevEl: '.current_projects .swiper-button-prev',
            }}
            className="current_projects__slider h-full mb-3 xl:mb-8"
            style={{ overflow: 'visible', width: '100%', marginLeft: '0' }}
          >
            {currentProjects.map((project: IProject) => (
              <SwiperSlide key={project.id}>
                {isScreenXl
                  ? <ProjectSlide project={project} />
                  : <ProjectSlideMobile project={project} />}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="current_projects w-full mb-4 flex flex-col gap-2 2xl:gap-0 2xl:flex-row-reverse ">
            <div className="swiper-button-next 2xl:pl-24 3xl:pl-36" style={{ width: colsWidth ? colsWidth[1] : '100%' }}>
              <ButtonWithText text="К следующему проекту" />
            </div>
            <div className="swiper-button-prev flex 2xl:justify-end" style={{ width: colsWidth ? colsWidth[0] : '100%' }}>
              <ButtonWithText text="К предыдущему проекту" next={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
