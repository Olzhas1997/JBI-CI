export interface IDropDownMenuItem {
  id: number | string,
  title: string
  path: string
  links: IDropDownMenuLink[]
}

export interface IDropDownMenuLink {
  id: number
  title: string
  path: string

}
