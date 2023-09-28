import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import Link from '@tiptap/extension-link';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { OrderedList } from '@tiptap/extension-ordered-list';

type TypeEditor = {
  editor: Editor | null,
  setLink: () => void
};

type TypeTipTap = {
  text: string,
  width: number,
  onChange: (html: string) => void,
};

const MenuBar: FC<TypeEditor> = ({ editor, setLink }: TypeEditor) => {
  if (!editor) {
    return null;
  }

  return (
    <>
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
      <button
        type="button"
        onClick={() => editor.chain().focus().setColor('#E25816').run()}
        className={editor.isActive('textStyle', { color: '#E25816' }) ? 'is-active' : ''}
      >
        оранжевый текст
      </button>
    </>
  );
};

const TipTapDefault: FC<TypeTipTap> = ({ text, onChange, width }: TypeTipTap) => {
  const [watch, setWatch] = useState(0);
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      // TextStyle.configure({ types: [ListItem.name] }),
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
          // eslint-disable-next-line max-len
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: (text) || '',
    // eslint-disable-next-line @typescript-eslint/no-shadow
    onUpdate({ editor }: any) {
      onChange(editor.getHTML());
    },
  });
  const setLink = useCallback(() => {
    // @ts-ignore
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      // @ts-ignore
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run();

      return;
    }

    // update link
    // @ts-ignore
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run();
  }, [editor]);

  useEffect(() => {
    if (editor && text) {
      editor.commands.setContent(text);
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
    <div className={classBlock}>
      <MenuBar editor={editor} setLink={setLink} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapDefault;
