import { FC } from 'react';
import { INewsDetail } from '@/interfaces/News/INews';
import DetailContent from '@/components/DetailContent/DetailContent';
import * as React from 'react';

const NewsDetail: FC<INewsDetail> = ({ news, categories }: INewsDetail) => {
  const fields = [
    {
      field_slug: 'id',
      field_title: 'id',
      default: news.id,
      type: 'non',
    },
    {
      field_slug: 'title',
      field_title: 'Заголовок',
      default: 'title' in news ? news.title : '',
      type: 'text',
    },
    {
      field_slug: 'is_active',
      field_title: 'Активность',
      default: 'is_active' in news ? news.is_active : '',
      type: 'radio',
    },
    {
      field_slug: 'slug',
      field_title: 'Slug',
      default: 'slug' in news ? news.slug : '',
      type: 'text',
    },
    {
      field_slug: 'date',
      field_title: 'Дата',
      default: 'date' in news ? news.date : '',
      type: 'date',
    },
    {
      field_slug: 'category_id',
      field_title: 'Категория',
      default: 'category_id' in news ? news.category_id : '',
      options: categories.map((e) => ({
        label: e.title,
        value: e.id,
      })),
      type: 'select',
    },
    {
      field_slug: 'type',
      field_title: 'Тип карточки',
      default: 'type' in news ? news.type : '',
      options: [
        {
          label: 'маленькая',
          value: 'маленькая',
        },
        {
          label: 'большая',
          value: 'большая',
        },
      ],
      type: 'select',
    },
    {
      field_slug: 'preview_text',
      field_title: 'Превью текст',
      default: 'preview_text' in news ? news.preview_text : '',
      type: 'html',
    },
    {
      field_slug: 'detail_text',
      field_title: 'Детальный текст',
      default: 'detail_text' in news ? news.detail_text : '',
      type: 'html',
    },
    {
      field_slug: 'preview_img',
      field_title: 'Превью картинка',
      default: 'preview_img' in news ? news.preview_img : [],
      type: 'files',
    },
    {
      field_slug: 'detail_img',
      field_title: 'Детальная картинка',
      default: 'detail_img' in news ? news.detail_img : [],
      type: 'files',
    },
  ];
  return (
    <div className="container pt-4">
      <div className="text-2xl">
        Изменение
        {' '}
        <b>
          «
          {news.title}
          »
        </b>
      </div>
      <div className="py-4">
        <DetailContent service="NewsServices" fields={fields} />
      </div>
    </div>
  );
};

export default NewsDetail;
