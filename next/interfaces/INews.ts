export interface INews {
  id: number,
  title: string,
  description: string,
  date: string,
  type: string,
  img: string
}

export interface INewsList {
  news: INews[]
}
