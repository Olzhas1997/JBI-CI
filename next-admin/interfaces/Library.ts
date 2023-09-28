export interface LibraryElement {
  view: string;
  preview: string;
  name: string;
  id: string;
  content: Array<LibraryContent>;
}

export interface LibraryContent {
  type: 'text' | 'html' | 'img' | 'gallery' | 'file' | 'radio' | 'collection' | 'textArea';
  name: string;
  label: string;
  help: string;
  val: string;
  labelItem?: string,
  fields: LibraryContent[]
}

export interface DynamicElementListProps {
  library: Record<string, LibraryElement>;
  title?: string,
  setUploading: any,
  change: any,
  libraryTemplate?: any,
  viewAdd?: boolean
}
