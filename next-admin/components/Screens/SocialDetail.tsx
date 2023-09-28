import * as React from 'react';
import { FC } from 'react';
import { ISocialDetailData } from '@/interfaces/Social/ISocialDetail';
import DetailContent from '@/components/DetailContent/DetailContent';

const SocialDetail: FC<ISocialDetailData> = ({ socialDetail }) => {
  const fields = [
    {
      field_slug: 'id',
      field_title: 'id',
      default: socialDetail.id,
      type: 'non',
    },
    {
      field_slug: 'sort',
      field_title: 'Сортировка',
      default: 'sort' in socialDetail ? socialDetail.sort : '',
      type: 'number',
    },
    {
      field_slug: 'is_active',
      field_title: 'Активность',
      default: 'is_active' in socialDetail ? socialDetail.is_active : '',
      type: 'radio',
    },
    {
      field_slug: 'title',
      field_title: 'Заголовок',
      default: 'title' in socialDetail ? socialDetail.title : '',
      type: 'text',
    },
    {
      field_slug: 'link',
      field_title: 'Ссылка',
      default: 'link' in socialDetail ? socialDetail.link : '',
      type: 'text',
    },
  ];
  return (
    <div className="container pt-4">
      <div className="text-2xl">
        Изменение
        {' '}
        <b>
          «
          {socialDetail.title}
          »
        </b>
      </div>
      <div className="py-4">
        <DetailContent service="SocialServices" fields={fields} />
      </div>
    </div>
  );
};

export default SocialDetail;
