import {
  ProjectsFieldsAdditionalRooms,
  ProjectsFieldsCategories,
  ProjectsFieldsFacilityFeature,
  ProjectsFieldsRoofTypes,
  ProjectsFieldsStyles,
} from '@/interfaces/ProjectsFields';

export interface IProject {
  id: string,
  title: string,
  category_id: number,
  style_id: number,
  is_main_shown: boolean,
  is_company_shown: boolean,
  description: string,
  detailed_text_short: string,
  detailed_text_long: string,
  price: number,
  preview_picture: string,
  detailed_picture: string,
  floors_count: number,
  rooms_count: number,
  area: number,
  garage: number,
  width: number,
  depth: number,
  has_ground_floor: boolean,
  mansard: boolean,
  roof_type_id: number
}

export interface IProjectListGet {
  data: IProject[]
}

export interface IProjectList {
  projectsList: IProject[]
}

export interface IProjectGet {
  data: IProject
}

export interface IProjectDetail {
  projectsDetail: IProject,
  styles: ProjectsFieldsStyles[],
  roofTypes: ProjectsFieldsRoofTypes[],
  facilityFeature: ProjectsFieldsFacilityFeature[],
  categories: ProjectsFieldsCategories[],
  additionalRooms?: ProjectsFieldsAdditionalRooms[]
}
