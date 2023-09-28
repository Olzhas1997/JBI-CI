import SvgSprite from '@/components/UI/SvgSprite/SvgSprite';
import { IButton } from '@/interfaces/IButton';

const ButtonSlider = ({ reverse = false, className = '', size = '' }: IButton) => (
  <button type="button" className={`${reverse ? `rotate-[180deg] fill-none ${className}` : 'fill-none'}`}>
    {size === 'sm' ? <SvgSprite src="svg/button_slider.svg" width={27} height={27} /> : <SvgSprite src="svg/button_slider.svg" width={50} height={50} />}
  </button>
);

export default ButtonSlider;
