import {
  FC, useLayoutEffect, useState,
} from 'react';
import Link from 'next/link';
import ButtonForm from '@/components/UI/Buttons/ButtonForm';
import { useResize } from '@/app/helpers/useResize';
import { IFormData } from '@/interfaces/IFormData';

const Form: FC<IFormData> = (
  { data }: IFormData,
) => {
  const [bgImg, setBgImg] = useState<string>('/img/form_item_example.png');
  const { isScreenLg } = useResize();
  const {
    title, description, imgSrcArray, textTop, textBottom,
  } = data;

  const bgImgUrl: string = imgSrcArray[0]?.desktop.trim();

  useLayoutEffect(() => {
    if (bgImgUrl && bgImgUrl.length) {
      setBgImg(bgImgUrl);
    }
  }, []);

  useLayoutEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [isScreenLg]);
  return (
    <section className="grid grid-cols-1 2xl:grid-cols-2 grid-rows-1 container h-screen w-full bg-white bg-[url('/img/bg_form.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col items-start justify-center mx-auto lg:ml-[50px] xl:mx-auto 2xl:ml-[140px]">
        <h6 className="h7 uppercase text-white mb-2 lg:mb-4">{title || 'Заказать звонок'}</h6>
        <p className="t6 text-white w-full max-w-[540px] mb-5 lg:mb-12">{description || 'Заполните заявку и мы вам перезвоним и ответим на все Ваши вопросы'}</p>
        <form className="w-[90%] lg:w-full max-w-[540px] min-w-[290px] md:w-[460px] gap-4 lg:gap-0">
          <div className="h-14 md:h-[72px]">
            <input placeholder="Имя*" className="w-full text-white bg-white/30 py-2 md:py-4 pl-2.5 md:pl-6 placeholder-white placeholder:text-xs lg:placeholder:text-sm outline-0 border-0 rounded-sm focus:border" />
            <div className="hidden">
              <p>for errors</p>
            </div>
          </div>

          <div className="h-14 md:h-[72px] text-white">
            <input placeholder="Телефон*" className="w-full bg-white/30 text-white py-2 md:py-4 pl-2.5 md:pl-6 placeholder-white placeholder:text-xs lg:placeholder:text-sm  outline-0 border-0 rounded-sm focus:border" />
            <div className="hidden">
              <p>for errors</p>
            </div>
          </div>

          <div className="h-14 md:h-[72px]">
            <input placeholder="E-mail*" className="w-full bg-white/30 text-white py-2 md:py-4 pl-2.5 md:pl-6 placeholder-white placeholder:text-xs lg:placeholder:text-sm  outline-0 border-0 rounded-sm focus:border" />
            <div className="hidden">
              <p>for errors</p>
            </div>
          </div>
          <div className="grid grid-rows-1 grid-cols-2 gap-2 mt-4 md:mt-6 lg:mt-16">
            <div>
              {
              isScreenLg
                ? <ButtonForm text="Оставить заявку" size="lg" />
                : <ButtonForm text="Оставить заявку" size="sm" />
            }
            </div>
            <div className="w-full h-full min-w-[114px] max-w-[232px] lg:max-w-[277px]">
              <Link href="/#">
                <p className="text-[8px] md:text-xxs lg:text-xs text-white">Нажимая кнопку оставляя заявку, Вы соглашаетесь с политикой конфиденциальности</p>
              </Link>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full h-full hidden 2xl:block">
        <div className="relative mx-auto h-[767px] w-[539px] mt-12 bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
          <div
            className="absolute border-[1px] top-5 left-[6%] border-white w-[539px] h-full flex flex-col justify-between"
          >
            <div className="inline-flex justify-start w-full">
              <p className="h14 text-left text-white pt-5 pl-5  max-w-[270px]">
                {textTop}
              </p>
            </div>
            <div className="inline-flex justify-end w-full">
              <p className="h14 text-right text-white pr-4 pb-5 max-w-[320px]">
                {textBottom}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
