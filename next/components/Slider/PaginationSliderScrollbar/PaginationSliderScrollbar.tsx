import React, { useEffect } from 'react';
import { useResize } from '@/app/helpers/useResize';
import PaginationSliderScrollbarDesktop from '@/components/Slider/PaginationSliderScrollbar/PaginationSliderScrollbarDesktop';
import PaginationSliderScrollbarMobile from '@/components/Slider/PaginationSliderScrollbar/PaginationSliderScrollbarMobile';

const PaginationSliderScrollbar = () => {
  const completedProjects = [
    {
      id: 1,
      title: 'жк осипенко',
      description: '«Осипенко» — комфортабельный комплекс из 2 кирпичных домов с закрытой территорией и подземной парковкой в центре Тюмени на берегу реки Тура. Жилой дом имеет индивидуальную планировку, состоит из пяти блок-секций с беспрепятственным попаданием на уровень автомобильной стоянки, обеспечивающей парковочными местами всех жильцов. Из окон квартир открываются живописные виды на набережную реки Тура и исторические части города.',
      img: '/img/completed_project.jpg',
    },
    {
      id: 2,
      title: 'жк тура',
      description: '«Осипенко» — комфортабельный комплекс из 2 кирпичных домов с закрытой территорией и подземной парковкой в центре Тюмени на берегу реки Тура. Жилой дом имеет индивидуальную планировку, состоит из пяти блок-секций с беспрепятственным попаданием на уровень автомобильной стоянки, обеспечивающей парковочными местами всех жильцов. Из окон квартир открываются живописные виды на набережную реки Тура и исторические части города.',
      img: '/img/news_3.jpg',
    },
    {
      id: 3,
      title: 'жк тура-3',
      description: '«Осипенко» — комфортабельный комплекс из 2 кирпичных домов с закрытой территорией и подземной парковкой в центре Тюмени на берегу реки Тура. Жилой дом имеет индивидуальную планировку, состоит из пяти блок-секций с беспрепятственным попаданием на уровень автомобильной стоянки, обеспечивающей парковочными местами всех жильцов. Из окон квартир открываются живописные виды на набережную реки Тура и исторические части города.',
      img: '/img/completed_project.jpg',
    },
    {
      id: 4,
      title: 'жк тура-3',
      description: '«Осипенко» — комфортабельный комплекс из 2 кирпичных домов с закрытой территорией и подземной парковкой в центре Тюмени на берегу реки Тура. Жилой дом имеет индивидуальную планировку, состоит из пяти блок-секций с беспрепятственным попаданием на уровень автомобильной стоянки, обеспечивающей парковочными местами всех жильцов. Из окон квартир открываются живописные виды на набережную реки Тура и исторические части города.',
      img: '/img/completed_project.jpg',
    },
  ];

  const { isScreenXl } = useResize();

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [isScreenXl]);

  return (
    <div>
      {isScreenXl ? (
        <PaginationSliderScrollbarDesktop projects={completedProjects} />
      ) : (
        <PaginationSliderScrollbarMobile projects={completedProjects} />
      )}
    </div>
  );
};

export default PaginationSliderScrollbar;
