export interface IProjectsList {
  projects: IProject[]
}

export interface IProject {
  id: number,
  title: string,
  description: string,
  min_price?: string,
  img: string,
  gallery?: string[]
}
