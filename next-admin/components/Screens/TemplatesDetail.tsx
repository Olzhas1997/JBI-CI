import React, { FC } from 'react';
import DetailContent from '@/components/DetailContent/DetailContent';
import { ITemplateDetail } from '@/interfaces/Templates/ITemplates';

const TemplatesDetail: FC<ITemplateDetail> = ({ data }: ITemplateDetail) => {
  const fields = [
    {
      field_slug: 'id',
      field_title: 'id',
      default: 'id' in data ? data.id : '',
      type: 'non',
    },
    {
      field_slug: 'title',
      field_title: 'Заголовок',
      default: 'title' in data ? data.title : '',
      type: 'text',
    },
    {
      field_slug: 'settings.desktop.width',
      field_title: 'Ширина под десктоп',
      default: data?.settings?.desktop?.width,
      type: 'text',
    },
    {
      field_slug: 'settings.desktop.height',
      field_title: 'Высота под десктоп',
      default: data?.settings?.desktop?.height,
      type: 'text',
    },
    {
      field_slug: 'settings.mobile.width',
      field_title: 'Ширина под мобильный экран',
      default: data?.settings?.mobile?.width,
      type: 'text',
    },
    {
      field_slug: 'settings.mobile.height',
      field_title: 'Высота под мобильный экран',
      default: data?.settings?.mobile?.height,
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
          {data.title}
          »
        </b>
      </div>
      <div className="py-4">
        <DetailContent service="TemplatesServices" fields={fields} />
      </div>
    </div>
  );
};
export default TemplatesDetail;
