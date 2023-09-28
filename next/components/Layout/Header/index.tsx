import SvgSprite from '@/components/UI/SvgSprite';
import LinkWIthArrowAndText from '@/components/Layout/Header/LinkWIthArrowAndText';
import DropDownLink from '@/components/Layout/Header/DropDownLink';
import Button from '@/components/UI/Buttons/Button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dropDownMenuLinks = [
    {
      id: 1,
      title: 'проекты',
      path: '',
      links: [
        {
          id: 1,
          title: 'контакты',
          path: '/',
        },
        {
          id: 2,
          title: 'о компании',
          path: '/',
        },
        {
          id: 3,
          title: 'новости',
          path: '/',
        },
      ],
    },
    {
      id: 2,
      title: 'акции',
      path: '',
      links: [
        {
          id: 1,
          title: 'акция 1',
          path: '/',
        },
        {
          id: 2,
          title: 'акция 2',
          path: '/',
        },
        {
          id: 3,
          title: 'акция 3',
          path: '/',
        },
      ],
    },
    {
      id: 3,
      title: 'способы покупки',
      path: '/404',
      links: [],
    },
    {
      id: 4,
      title: 'способы покупки',
      path: '/404',
      links: [],
    },
  ];
  // eslint-disable-next-line array-callback-return
  const links = dropDownMenuLinks.map((item) => <DropDownLink item={item} key={item.id} />);
  let menuClass = 'absolute top-0 z-[100] -translate-x-[100%] w-[100vw] 2xl:w-[50vw] 3xl:w-[45vw] transition-all duration-1000 bg-white h-screen p-4 xl:p-10 2xl:p-20 3xl:p-24 overflow-hidden';
  let overlayClass = 'absolute top-0 z-[15] h-screen w-screen bg-black/60 opacity-0 transition-all duration-1000 pointer-events-none';
  if (isMenuOpen) {
    menuClass += ' translate-x-[0]';
    overlayClass += ' opacity-100 backdrop-blur-md pointer-events-auto';
  }
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isMenuOpen]);
  return (
    <header>
      <div className="container">
        <div className="flex flex-row-reverse xl:flex-row items-center justify-between py-3 3xl:py-8 border-b-[1px] border-b-black/20">
          <div className="flex items-center gap-8">
            <div role="none" onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col gap-[6px] py-2 cursor-pointer">
              <div className="w-7 h-[2px] bg-black" />
              <div className="w-7 h-[2px] bg-black" />
            </div>
            <nav className="hidden xl:block">
              <ul className="flex items-center gap-8 pt-[5px]">
                <li className="t4 3xl:t2 border-b-[transparent] border-b-[1px] uppercase hover:border-b-black transition-color duration-500">
                  <Link href="/">о компании</Link>
                </li>
                <li className="t4 3xl:t2 border-b-[transparent] border-b-[1px] uppercase hover:border-b-black transition-color duration-500">
                  <Link href="/">проекты</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Link href="/">
            <div className="fill-blue-200 hover:fill-black transition-color duration-500 hidden xl:block xl:scale-[0.7] 2xl:scale-[0.8] 3xl:scale-[1]">
              <SvgSprite src="/svg/logo.svg" width={205} height={55} />
            </div>
            <div className="fill-blue-200 hover:fill-black transition-color duration-500 block xl:hidden">
              <SvgSprite src="/svg/logo.svg" width={76} height={20} />
            </div>
          </Link>
          <div className="gap-8 pt-[5px] hidden xl:flex">
            <Link href="/" className="t4 3xl:t2 border-b-[transparent] border-b-[1px] uppercase hover:border-b-black transition-color duration-500">
              выбрать квартиру
            </Link>
            <Link href="tel:+74951823363" className="t4 3xl:t2 border-b-[transparent] border-b-[1px] uppercase hover:border-b-black transition-color duration-500">
              +7 (495) 182-33-63
            </Link>
          </div>
        </div>
      </div>
      <div className={menuClass}>
        <div className=" hidden absolute xl:block top-4 left-4 2xl:top-8 2xl:left-8">
          <div className="w-24 h-[1px] bg-black/50" />
          <div className="h-24 w-[1px] bg-black/50" />
        </div>
        <div className="flex justify-between items-center mb-2 md:mb-5">
          <div className="h12 xl:h7 3xl:h8">каталог</div>
          <div role="none" onClick={() => setIsMenuOpen(false)} className="cursor-pointer scale-[0.5] 2xl:scale-[0.7] 3xl:scale-[1] pr-1">
            <SvgSprite src="/svg/close.svg" width={44} height={44} />
          </div>
        </div>
        <p className="t7 w-full xl:w-[281px] mb-8">Выберите интересующий вас раздел или закажите онлайн-консультацию у менеджера.</p>
        <div className="h-[65vh] xl:h-[55vh] overflow-hidden">
          <div className={links.length >= 5 ? 'overflow-y-scroll h-full pr-2 pt-3 pb-8' : 'pr-2 pt-3 pb-8'}>
            <div className="flex flex-col w-full gap-8 xl:gap-12">
              <Link href="/">
                <LinkWIthArrowAndText text="выбор недвижимости" />
              </Link>
              <div className="flex flex-col gap-8 xl:gap-12">
                {links}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-5 md:py-10">
          <Button size="sm" text="Заказать звонок" />
        </div>
      </div>
      <div role="none" onClick={() => setIsMenuOpen(false)} className={overlayClass} />
    </header>
  );
};

export default Header;
