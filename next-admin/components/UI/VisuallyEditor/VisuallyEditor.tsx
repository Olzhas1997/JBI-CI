import React, { FC, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'rc-slider';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'rc-slider/assets/index.css';
import { checkEnvironmentUrl } from '@/app/helpers/checkEnvironmentUrl';

type VisuallyEdType = {
  // eslint-disable-next-line react/require-default-props
  link?: string,
  // eslint-disable-next-line react/require-default-props
  width?: string,
  // eslint-disable-next-line react/require-default-props
  height?: string,
  // eslint-disable-next-line react/require-default-props
  resultPoints?: string,
  // eslint-disable-next-line react/require-default-props
  viewParametr?: boolean,
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  onChange?: any,
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  name?: string,
  // eslint-disable-next-line react/require-default-props
  savedItems?: string[],
  // eslint-disable-next-line react/require-default-props
  title?: string
};

const VisuallyEditor:FC<VisuallyEdType> = ({
  link = '',
  width = '1760', height = '1208', resultPoints = '', viewParametr = true, onChange, name, savedItems, title = 'Визуальный редактор',
}:VisuallyEdType) => {
  const [planLink, setPlanLink] = useState('https://xn--e1aybc.xn--80ahefirqxn.xn--p1ai/_next/image?url=https%3A%2F%2Fxn--90agcayt.xn--80ahefirqxn.xn--p1ai%2Fstorage%2Fimages%2Fmini%2FQI5Gkj7Z97kxd6AovBBEOTcyMWM4N2FhOTg4NGUyNTg1MjI1MDFiNTMwODM4MTAgKDEpLmpwZw%3D%3DXkPy_1760x1208.webp&w=1920&q=75');
  const [planWith, setPlanWith] = useState<any>('');
  const [planHeight, setPlanHeight] = useState<any>('');
  const [pointsStr, setPointsStr] = useState('');
  const [currentItem, setCurrentItem] = useState<{ x: string, y: string, id: number }[]>([]);
  const [planZoom, setPlanZoom] = useState<number | number[]>(1);
  const [scrollX, setScrollX] = useState<any>(0);
  const [scrollY, setScrollY] = useState<any>(0);
  const [activeItem, setActiveItem] = useState<any>(null);

  const getPointsNumber = (pointStr: string) => {
    const symbolArr = pointStr.split(' ');
    // eslint-disable-next-line no-restricted-globals
    const numArr = symbolArr.filter((e) => !isNaN(Number(e)));
    const result = [];
    for (let i = 0; i < numArr.length; i += 2) {
      result.push({
        id: i,
        x: numArr[i],
        y: numArr[i + 1],
      });
    }
    return result;
  };
  useEffect(() => {
    if (link && JSON.parse(link) && JSON.parse(link)[0].desktop) {
      setPlanLink(`${checkEnvironmentUrl()}/${JSON.parse(link)[0].desktop}`);
    }
    setPlanHeight(height);
    setPlanWith(width);
    setPointsStr(resultPoints);
    if (resultPoints) {
      setCurrentItem(getPointsNumber(resultPoints));
    }
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const getPointsStr = (points: { x: string; y: string }[]) => `M ${points.map((n) => `${n.x} ${n.y}`).join(' L ')} Z`;

  useEffect(() => {
    if (currentItem && currentItem.length) {
      setPointsStr(getPointsStr(currentItem));
    } else {
      setPointsStr('');
    }
  }, [currentItem]);

  useEffect(() => {
    if (name) {
      onChange(name, pointsStr);
    }
  }, [pointsStr]);

  const straightening = (point: any, lastPoints: any, diff = 10) => {
    const newPoint: any = point;
    lastPoints.forEach((n: any) => {
      if (Math.abs(point.x - n.x) <= diff) {
        newPoint.x = n.x;
      }
      if (Math.abs(point.y - n.y) <= diff) {
        newPoint.y = n.y;
      }
    });

    return newPoint;
  };
  const onPlanClick = (e: any) => {
    // e.target.width.baseVal.value
    const percentX = e.nativeEvent.offsetX / (e.target.width.baseVal.value / 100);
    const percentY = e.nativeEvent.offsetY / (e.target.height.baseVal.value / 100);
    const id = Math.floor(Math.random() * 1000000);
    let point = {
      x: Math.round((planWith / 100) * percentX),
      y: Math.round((planHeight / 100) * percentY),
      id,
    };
    const lastPoints = [];

    // savedItems.forEach((n) => n.forEach((n2) => lastPoints.push(n2)));

    if (currentItem.length) {
      const lastPoint = currentItem[currentItem.length - 1];
      const firstPoint = currentItem[0];
      lastPoints.push(lastPoint);
      lastPoints.push(firstPoint);
    }

    point = straightening(point, lastPoints);
    // @ts-ignore
    setCurrentItem([...currentItem, point]);
  };

  const clearPoints = () => {
    setCurrentItem([]);
    setActiveItem(null);
  };

  const delItem = (id: number) => {
    const newCurrentItem = currentItem.filter((n) => n.id !== id);
    setCurrentItem(newCurrentItem);
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const changePoint = (e: any, id: number, name: string) => {
    const newCurrentItem = currentItem.map((n) => {
      if (n.id === id) {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        n[name] = e.target.value;
      }
      return n;
    });
    setCurrentItem(newCurrentItem);
    const newActiveItem = currentItem.find((n) => n.id === id);
    setActiveItem(newActiveItem);
  };
  return (
    <div className="px-8 py-8">
      <div className="text-[36px] mb-8">
        {title}
      </div>
      <div className="flex gap-6">
        <div className="w-full">
          {viewParametr
            && (
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-xl">Ссылка на план</div>
                <div>
                  <input
                    type="text"
                    className="w-full py-2 px-6 border-black border-[1px] rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder="Вставьте ссылку"
                    defaultValue={planLink}
                    onChange={setPlanLink ? (e) => setPlanLink(e.target.value) : undefined}
                  />
                </div>
              </div>
              <div>
                <div className="text-xl">Ширина плана</div>
                <div>
                  <input
                    type="text"
                    className="w-full py-2 px-6 border-black border-[1px] rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder="Вставьте ширину"
                    defaultValue={planWith}
                    onChange={setPlanWith ? (e) => setPlanWith(e.target.value) : undefined}
                  />
                </div>
              </div>
              <div>
                <div className="text-xl">Высота плана</div>
                <div>
                  <input
                    type="text"
                    className="w-full py-2 px-6 border-black border-[1px] rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    placeholder="Вставьте высоту"
                    defaultValue={planHeight}
                    onChange={setPlanHeight ? (e) => setPlanHeight(e.target.value) : undefined}
                  />
                </div>
              </div>
            </div>
            )}

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-xl">Зум плана</div>
              <Slider
                defaultValue={planZoom}
                onChange={(v) => setPlanZoom(v)}
                min={1}
                max={5}
                step={0.1}
                trackStyle={{
                  height: '1px',
                  background: '#191919',
                }}
                railStyle={{
                  height: '1px',
                  background: '#191919/50',
                }}
                handleStyle={{
                  borderColor: '#191919',
                  // height: 28,
                  // width: 28,
                  marginTop: -6,
                  backgroundColor: '#191919',
                }}
              />
            </div>
            <div>
              <div className="text-xl">Подвинуть по x</div>
              <Slider
                defaultValue={scrollX}
                onChange={(v) => setScrollX(v)}
                min={-50}
                max={50}
                step={1}
                trackStyle={{
                  height: '1px',
                  background: '#191919',
                }}
                railStyle={{
                  height: '1px',
                  background: '#191919/50',
                }}
                handleStyle={{
                  borderColor: '#191919',
                  // height: 28,
                  // width: 28,
                  marginTop: -6,
                  backgroundColor: '#191919',
                }}
              />
            </div>
            <div>
              <div className="text-xl">Подвинуть по Y</div>
              <Slider
                defaultValue={scrollY}
                onChange={(v) => setScrollY(v)}
                min={-50}
                max={50}
                step={1}
                trackStyle={{
                  height: '1px',
                  background: '#191919',
                }}
                railStyle={{
                  height: '1px',
                  background: '#191919/50',
                }}
                handleStyle={{
                  borderColor: '#191919',
                  // height: 28,
                  // width: 28,
                  marginTop: -6,
                  backgroundColor: '#191919',
                }}
              />
            </div>
          </div>
          <div>
            <div className="">
              <div className="text-xl">Поинты</div>
              <input
                disabled
                type="text"
                className="w-full py-2 px-6 border-black border-[1px] rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Поинты..."
                defaultValue={pointsStr}
              />
            </div>
          </div>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className="my-3 visual-editor__plan" onClick={() => setActiveItem(null)}>
            <div className="visual-editor__img-cont" style={{ transform: `scale(${planZoom}) translateX(${scrollX * -1}%) translateY(${scrollY * -1}%)` }}>
              { /* @ts-ignore */ }
              <img className="visual-edotor__img" src={planLink} alt="" style={{ '--width': `${planWith}`, '--height': `${planHeight}`, '--aspect-ratio': (planHeight / planWith) }} />
              {/* eslint-disable-next-line react/no-string-refs */}
              <svg className="visual-edotor__svg" viewBox={`0 0 ${planWith} ${planHeight}`} onClick={(e) => onPlanClick(e)}>
                {/* eslint-disable-next-line max-len */}
                {(savedItems && savedItems.length) ? savedItems.map((n) => (<path className="visual-edotor__contour _disabled" d={n} />)) : ''}
                <path className="visual-edotor__contour" d={pointsStr} />
                {activeItem
                  && <circle className="visual-edotor__circle" cx={activeItem.x} cy={activeItem.y} r="20" />}
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <div className="text-xl mb-6">Точки:</div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-3">
              <div>x</div>
              <div>y</div>
              <div />
            </div>
            {(currentItem && currentItem.length) ? currentItem.map((element) => (
              <div className="grid grid-cols-3 gap-3 items-center">
                <input className="px-4 py-2 border-[1px] border-black" type="number" defaultValue={element.x} onChange={(e) => changePoint(e, element.id, 'x')} />
                <input className="px-4 py-2 border-[1px] border-black" type="number" defaultValue={element.y} onChange={(e) => changePoint(e, element.id, 'y')} />
                {/* eslint-disable-next-line max-len */}
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div onClick={() => delItem(element.id)} className="text-sm text-white rounded-[10px] bg-red px-5 py-2 flex items-center justify-center">Удалить</div>
              </div>
            )) : ''}
          </div>

          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            onClick={clearPoints}
            className="w-fit mt-4 text-lg text-white rounded-[40px] bg-black py-2 px-5 hover:text-black hover:bg-gray transition duration-500 cursor-pointer"
          >
            Очистить точки
          </div>
        </div>
      </div>

    </div>
  );
};

export default VisuallyEditor;
