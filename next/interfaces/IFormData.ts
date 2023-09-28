interface IFormImg {
  desktop: string
}

export interface IFormItem {
  title: string
  description: string
  form_name: 'callback'
  imgSrcArray: IFormImg[],
  textTop: string,
  textBottom: string
}

export interface IFormData {
  data: IFormItem
}
