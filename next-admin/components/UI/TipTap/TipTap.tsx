import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Color } from '@tiptap/extension-color';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Editor, EditorContent, useEditor } from '@tiptap/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ListItem from '@tiptap/extension-list-item';
// eslint-disable-next-line import/no-extraneous-dependencies
import TextStyle from '@tiptap/extension-text-style';
// eslint-disable-next-line import/no-extraneous-dependencies
import Link from '@tiptap/extension-link';
// eslint-disable-next-line import/no-extraneous-dependencies
import StarterKit from '@tiptap/starter-kit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { OrderedList } from '@tiptap/extension-ordered-list';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { FieldValues } from 'react-hook-form';

type TypeEditor = {
  editor: Editor | null,
  setLink: () => void
};

type TypeTipTap = {
  text: string,
  fieldName?: string | null,
  width: number,
  onChange: UseFormSetValue<FieldValues> | any,
};

export const MenuBar: FC<TypeEditor> = ({ editor, setLink }: TypeEditor) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="">
      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        параграф
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
            }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        жирный
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleItalic()
                  .run()
            }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        italic
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleStrike()
                  .run()
            }
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        зачеркнутый
      </button>
      <button type="button" onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        очистить стили текста
      </button>
      <button type="button" onClick={() => editor.chain().focus().clearNodes().run()}>
        очистить маркировку
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        список(точки)
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        список(цифры)
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        цитата
      </button>
      <button type="button" onClick={() => editor.chain().focus().setHardBreak().run()}>
        перенос строки
      </button>
      <button type="button" onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
        установить ссылку
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive('link')}
      >
        убрать ссылку
      </button>
    </div>
  );
};

const Tiptap: FC<TypeTipTap> = ({
  text, width, fieldName, onChange,
}: TypeTipTap) => {
  const [watch, setWatch] = useState(0);
  const currentEditor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'my-custom-class',
        },
        itemTypeName: 'listItem',
        keepAttributes: true,
        keepMarks: true,
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: (text) || '',
    onUpdate({ editor }: any) {
      if (fieldName) {
        onChange(fieldName, editor.getHTML());
      } else {
        onChange(editor.getHTML());
      }
    },
  });
  const setLink = useCallback(() => {
    if (currentEditor) {
      const previousUrl = currentEditor.getAttributes('link').href;
      const url = window.prompt('URL', previousUrl);
      if (url === null) {
        return;
      }
      if (url === '') {
        currentEditor.chain().focus().extendMarkRange('link').unsetLink()
          .run();
        return;
      }
      currentEditor.chain().focus().extendMarkRange('link').setLink({ href: url })
        .run();
    }
  }, [currentEditor]);

  useEffect(() => {
    if (currentEditor && text) {
      currentEditor.commands.setContent(text);
    }
  }, [watch]);

  useEffect(() => {
    setTimeout(() => {
      setWatch(1);
    }, 200);
  }, []);

  let classBlock = 'tiptap-redactor border-[1px] p-4';
  if (!width) {
    classBlock += ' max-w-[600px]';
  }

  return (
    <div role="presentation" className={classBlock} onClick={(e) => { e.stopPropagation(); }}>
      <MenuBar editor={currentEditor} setLink={setLink} />
      <EditorContent editor={currentEditor} />
    </div>
  );
};

Tiptap.defaultProps = {
  fieldName: null,
};

export default Tiptap;
