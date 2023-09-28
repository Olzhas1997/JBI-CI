import { FC } from 'react';
import ArrowLink from '@/components/UI/ArrowLink';
import ButtonSlider from '@/components/UI/Buttons/ButtonSlider';

const Advantages:FC = () => (
  <div className="container py-12 overflow-hidden">
    <div className="flex xl:hidden justify-end items-center pt-4 pb-6">
      <div className="swiper-button-prev">
        <ButtonSlider reverse className="mr-3" />
      </div>
      <div className="swiper-button-next">
        <ButtonSlider />
      </div>
    </div>

    <div className="flex xl:grid xl:grid-cols-2 xl:grid-rows-auto gap-2 lg:gap-5">
      <article className="relative flex flex-col items-center bg-[url('/img/advantages_pic1.png')] bg-no-repeat bg-center border border-transparent w-full h-full xl:h-screen">
        <div className="absolute top-0 left-0 mix-blend-multiply bg-blue/75 w-full h-full z-10" />
        <div className="xxs:w-[250px] xs:w-[270px] sm:w-[400px] lg:w-[613px] xl:w-fit h-[454px] md:h-[500px] lg:h-[600px] xl:h-full z-20">
          <h2 className="h8 text-white xxs:mt-5 sm:mt-8 xl:mt-[102px] mb-4 lg:mb-[260px] 2xl:mb-[351px] text-center">преимущества</h2>
          <p className="t3 px-6 lg:px-10 text-white xxs:mb-1 sm:mb-3 md:mb-5 text-center">Появления конструкций из железобетона позволило не только упростить процесс возведения жилых и производственных зданий и помещений, но повысить их качество, надежность, долговечность. ЖБИ совместили в себе прочностные качества двух материалов – стали и бетона. Такие изделия получили широкий спектр применения в самых различных сферах, начиная от легких загородных строений, заканчивая массивными многоэтажными зданиями с мощным и массивным основанием.</p>
          <p className="t3 px-6 lg:px-10 text-white text-center">Дом монолитно-кирпичный с вентилируемым фасадом. Панорамное остекление лоджий. Комфортный план квартир. Предчистовая качественная отделка.</p>
        </div>
      </article>

      <article className="flex flex-col items-center bg-white border border-black w-full h-full xl:h-screen">
        <div className="xxs:w-[250px] xs:w-[270px] sm:w-[400px] lg:w-[613px] xl:w-fit h-[454px] md:h-[500px] lg:h-[600px] xl:h-full">
          <h2 className="h8 mt-[102px] xxs:mt-5 sm:mt-8 xl:mt-[102px] mb-4 2xl:mb-12 text-center">долговечность</h2>
          <div className="relative xxs:w-[184px] md:w-[300px] xl:w-[424px] xxs:h-[215px] md:h-[300px] xl:h-[497px] mx-auto xxs:mb-6 sm:mb-8 lg:mb-12 xl:mb-16 bg-[url('/img/advantages_pic2.png')] bg-no-repeat bg-center">
            <div className="absolute bottom-[-4%] xl:bottom-[-2%] 2xl:bottom-[-4%] right-[-5%] xl:right-[-2%] 2xl:right-[-5%] w-[75px] h-[77px] border-r-2 border-b-2 border-black opacity-50" />
          </div>
          <p className="t3 px-6 lg:px-10 text-center">Конструктивно различные виды ЖБИ фундаментные блоки, лестничные марши, стеновые блоки и т. д. Дополняя друг друга, эти два материала обеспечивают высокую надежность изделий и тем самым значительно увеличивают срок их службы.</p>
        </div>
      </article>

      <article className="flex flex-col items-center bg-white border border-black w-full h-full xl:h-screen">
        <div className="xxs:w-[250px] xs:w-[270px] sm:w-[400px] lg:w-[613px] xl:w-fit h-[454px] md:h-[500px] lg:h-[600px] xl:h-full">
          <h2 className="h8 mt-[102px] xxs:mt-5 sm:mt-8 xl:mt-[102px] mb-4 2xl:mb-12 text-center">прочность</h2>
          <div className="relative xxs:w-[184px] md:w-[300px] xl:w-[424px] xxs:h-[215px] md:h-[300px] xl:h-[497px] mx-auto xxs:mb-6 sm:mb-8 lg:mb-12 xl:mb-16 bg-[url('/img/advantages_pic3.png')] bg-no-repeat bg-center">
            <div className="absolute bottom-[-4%] xl:bottom-[-2%] 2xl:bottom-[-4%] left-[-5%] xl:left-[-2%] 2xl:left-[-5%] w-[75px] h-[77px] border-l-2 border-b-2 border-black opacity-50" />
          </div>
          <p className="t3 px-6 lg:px-10 text-center">Как известно, бетон обладает высокой устойчивостью к сжимающим нагрузкам. Арматура, напротив, имеет отличное сопротивление к растяжению. Общеизвестно, что бетон имеет высокий предел прочности на сжатие, а сталь напротив способна выдерживать усилия, воздействующие в виде растяжения.</p>
        </div>
      </article>

      <article className="relative flex flex-col items-center bg-[url('/img/advantages_pic1.png')] bg-no-repeat bg-center border border-transparent w-full h-full xl:h-screen">
        <div className="absolute top-0 left-0 mix-blend-multiply bg-blue/75 w-full h-full z-10" />
        <div className="xxs:w-[250px] xs:w-[270px] sm:w-[400px] lg:w-[613px] xl:w-fit h-[454px] md:h-[500px] lg:h-[600px] xl:h-full z-20">
          <h2 className="h8 text-white xxs:mt-5 sm:mt-8 xl:mt-[102px] mb-4 lg:mb-[260px] 2xl:mb-[351px] text-center">технологичность изделий</h2>
          <p className="t3 px-6 lg:px-10 text-white xxs:mb-1 sm:mb-3 md:mb-5 text-center">Немаловажный фактор, определяющий удобство работы с железобетоном. Современное производство позволяет человеку применять ЖБИ в виде плит и опор, ступеней, лотков, перемычек, образуя формы в процессе изготовления нужных модулей.</p>
          <p className="t3 px-6 lg:px-10 text-white sm:mb-5 md:mb-10 lg:mb-24 text-center">Вся продукция Завода – высочайшего качества и ценится строителями не только города, но и области.</p>
          <div className="w-fit xl:w-[457px] px-6 lg:px-10  flex xl:justify-between items-center mx-auto z-20">
            <span className="h11 text-white">подробнее о компании</span>
            <div className="cursor-pointer">
              <ArrowLink rotate={false} color="#FFFFFF" />
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>

);

export default Advantages;
