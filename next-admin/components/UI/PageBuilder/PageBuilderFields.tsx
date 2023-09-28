import React, { FC } from 'react';
import InputText from '@/components/UI/InputText';
import Tiptap from '@/components/UI/TipTap/TipTap';
import InputFile from '@/components/UI/InputFile';
import InputRadioPageBuilder from '@/components/UI/PageBuilder/Inputs/InputRadioPageBuilder';
import { LibraryContent } from '@/interfaces/Library';
// eslint-disable-next-line import/no-cycle
import InputCollection from '@/components/UI/PageBuilder/Inputs/InputCollection';
import InputTextAreaPageBuilder from '@/components/UI/PageBuilder/Inputs/InputTextAreaPageBuilder';

type PageBuilderFieldsType = {
  contentItem: LibraryContent,
  change: any,
  setUploading: any
};

// eslint-disable-next-line max-len
const PageBuilderFields:FC<PageBuilderFieldsType> = ({ contentItem, change, setUploading }: PageBuilderFieldsType) => (
  <div>
    {contentItem.type === 'text' && (
    <InputText
      title={(contentItem.label) ? contentItem.label : 'Текст'}
      placeholder={(contentItem.help) ? contentItem.help : 'Введите текст...'}
      initValue={contentItem.val}
      change={(e) => change(e)}
    />
    )}
    {contentItem.type === 'html' && (
    <div>
      <div className="text-lg text-black">{(contentItem.label) ? contentItem.label : 'Текст'}</div>
      {/* eslint-disable-next-line max-len */}
      <Tiptap onChange={(e: any) => change(e)} width={400} text={contentItem.val} />
    </div>
    )}
    {contentItem.type === 'img' && (
    <div>
      <div className="text-lg text-black">{(contentItem.label) ? contentItem.label : 'Текст'}</div>
      <InputFile setUploading={setUploading} type="img" initValue={contentItem.val} onChange={(e) => change(e)} />
    </div>
    )}
    {contentItem.type === 'file' && (
    <div>
      <div className="text-lg text-black">{(contentItem.label) ? contentItem.label : 'Файл'}</div>
      <InputFile setUploading={setUploading} type="file" initValue={contentItem.val} onChange={(e: any) => change(e)} />
    </div>
    )}
    {
        contentItem.type === 'gallery' && (
          <div>
            <div className="text-lg text-black">{(contentItem.label) ? contentItem.label : 'Галерея'}</div>
            <InputFile setUploading={setUploading} type="img" initValue={contentItem.val} onChange={(e: any) => change(e)} multiple />
          </div>
        )
      }
    {contentItem.type === 'radio' && (
    <InputRadioPageBuilder title={(contentItem.label) ? contentItem.label : 'Активность'} initValue={contentItem.val} onChange={(e: any) => change(e)} />
    )}
    {contentItem.type === 'textArea' && (
      <InputTextAreaPageBuilder
        title={(contentItem.label) ? contentItem.label : 'Текст'}
        placeholder={(contentItem.help) ? contentItem.help : 'Введите текст...'}
        initValue={contentItem.val}
        change={(e: any) => change(e)}
      />
    )}
    {contentItem.type === 'collection' && (
      <InputCollection
        title={(contentItem.label) ? contentItem.label : 'Элементы'}
        initValue={contentItem.val}
        titleElem={(contentItem.labelItem) ? contentItem.labelItem : 'Элементы'}
        fields={contentItem.fields}
        setUploading={setUploading}
        onChange={(e: any) => change(e)}
      />
    )}
  </div>
);

export default PageBuilderFields;
