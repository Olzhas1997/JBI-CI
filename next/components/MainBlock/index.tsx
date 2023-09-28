import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Parallax } from 'react-scroll-parallax';
import MainBlockLink from '@/components/MainBlock/MainBlockLink';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const MainBlock = () => {
  const data = {
    headerFirstLine: 'Прочный фундамент для',
    headerSecondLine: 'хорошего будущего',
    bgImage: '/img/main-img.png',
    innerImage: '/img/main-inner.jpg',
    linkPath: '/',
    desc: 'ООО СЗ «Завод ЖБИ-3» это одно из крупных предприятий города Тюмени, которое занимается производством железобетонных изделий и все силы направляет на собственное строительство.',
  };

  const main = useRef(null);
  const topLineToRight = useRef(null);
  const topLineToBottom = useRef(null);
  const bottomLineToTop = useRef(null);
  const bottomLineToRight = useRef(null);

  const mm = gsap.matchMedia();

  useEffect(() => {
    if (data.bgImage) {
      mm.add('(min-width: 1370px)', () => {
        const ctx = gsap.context(() => {
          gsap.to(topLineToRight.current, {
            width: '32vw',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'top center',
            },
          });
          gsap.to(topLineToBottom.current, {
            height: '90vh',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'top center',
              end: 'bottom center',
            },
          });
          gsap.to(bottomLineToTop.current, {
            height: '80vh',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'bottom bottom',
            },
          });
          gsap.to(bottomLineToRight.current, {
            width: '40vw',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'bottom bottom',
            },
          });
        }, main);
        return () => ctx.revert();
      });
      mm.add('(max-width: 1369px)', () => {
        const ctx = gsap.context(() => {
          gsap.to(topLineToRight.current, {
            width: '50vw',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'top center',
            },
          });
          gsap.to(topLineToBottom.current, {
            height: '70vh',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'top center',
              end: 'bottom center',
            },
          });
          gsap.to(bottomLineToTop.current, {
            height: '80vh',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'bottom bottom',
            },
          });
          gsap.to(bottomLineToRight.current, {
            width: '60vw',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'bottom bottom',
            },
          });
        }, main);
        return () => ctx.revert();
      });
      mm.add('(max-width: 577px)', () => {
        const ctx = gsap.context(() => {
          gsap.to(topLineToRight.current, {
            width: '50vw',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'top center',
            },
          });
          gsap.to(topLineToBottom.current, {
            height: '35vh',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'top center',
              end: 'bottom center',
            },
          });
          gsap.to(bottomLineToTop.current, {
            height: '35vh',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'bottom bottom',
            },
          });
          gsap.to(bottomLineToRight.current, {
            width: '50vw',
            ease: 'none',
            duration: 1.5,
            scrollTrigger: {
              trigger: main.current,
              start: 'bottom bottom',
            },
          });
        }, main);
        return () => ctx.revert();
      });
    }
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data.bgImage
        ? (
          <section className="container pt-6 md:pt-16">
            <div className="mb-6 2xl:mb-12">
              <h4 className="font-tt font-normal text-xs md:text-2xl xl:text-4xl 2xl:text-7xl 3xl:text-9xl tracking-h4 uppercase text-left mb-2">{data.headerFirstLine}</h4>
              <h3 className="font-tt font-normal text-sm md:text-4xl xl:text-6xl 2xl:text-9xl 3xl:text-10xl tracking-h3 uppercase text-blue-200 text-right">{data.headerSecondLine}</h3>
            </div>
            <div className="relative">
              <div className="relative w-full h-[90vh] md:h-[150vh] 2xl:h-[200vh] blur-sm">
                <Image src={data.bgImage} fill alt="main-bg" />
              </div>
              <div ref={main} className="absolute top-[43%] md:top-[45%] 2xl:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="relative z-50 font-codec text-xxs md:text-sm 3xl:text-base font-normal text-white w-full 2xl:w-[35vw] mb-4 md:mb-8">{data.desc}</p>
                <div className="relative p-4 md:p-10 2xl:p-16">
                  <div ref={topLineToRight} className="absolute left-0 top-0 h-[1px] md:h-[2px] bg-white w-[100px]" />
                  <div ref={topLineToBottom} className="absolute left-0 top-0 w-[1px] md:w-[2px] bg-white h-[100px]" />
                  <div ref={bottomLineToRight} className="absolute bottom-0 right-0 h-[1px] md:h-[2px] bg-white w-[100px]" />
                  <div ref={bottomLineToTop} className="absolute bottom-0 right-0 w-[1px] md:w-[2px] bg-white h-[100px]" />
                  <div className="inner-image relative overflow-hidden h-[308px] md:h-[700px] 2xl:h-[1000px] border-[2px] border-white">
                    <Parallax speed={-5} translateY={[0, -15]}>
                      <div className="relative w-[60vw] 2xl:w-[50vw] h-[358px] md:h-[796px] 2xl:h-[1196px] p-10">
                        <Image src={data.innerImage} fill alt="image" />
                      </div>
                    </Parallax>
                  </div>
                </div>
                <div className="absolute w-full left-0 md:left-10 2xl:left-auto -bottom-24 md:-bottom-20 2xl:right-0 2xl:w-[40vw] text-white">
                  <div className="w-full md:w-[456px]">
                    <Link href={data.linkPath}>
                      <MainBlockLink color="#FFFFFF" text="перейти <br> к выбору квартир" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
        // eslint-disable-next-line react/jsx-no-useless-fragment
        : <></>}
    </>

  );
};

export default MainBlock;
