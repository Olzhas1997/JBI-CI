export interface ISize {
  width: string,
  height: string,
}

export interface ITemplate {
  id: number,
  title: string,
  is_active: boolean,
  settings: {
    desktop: ISize,
    mobile: ISize,
  }
}

export interface ITemplateDetail {
  data: ITemplate
}
export interface ITemplates {
  data: ITemplate[]
}
