export type HelpCenterArticleListHomePage = {
  id: string
  name: string
  content?: any
  pushTimeStramp?: string
  parentId?: string
  higherLeverName?:string
  catalogVOList?:Array<HelpCenterSupportMenuType>
} 

export type HelpCenterQuestionListHomePage = {
  id: string
  name: string
  logo: string
} 

export interface HelpCenterSupportCatalogType {
  id: string
  catalogCode: string
  title: string
}

export interface HelpCenterSupportArticle {
  id?: string
  name: string
}

type HelpCenterSupportMenuType = {
  id: string
  name: string
  parentId?: string
  catalogVOList?:Array<HelpCenterSupportMenuType>
}

export type HelpCenterSupportMenu = {
  id: string
  name: string
  parentId?: string
  logo?: string
  catalogVOList?:Array<HelpCenterSupportMenuType>
}

export type HelpCenterSearchArticle = {
  name:string
  content:string
  parentId:string
  topDialogId:string
  pushTimeStramp:string
  higherLeverName:string
} | any

export type NoticeCenterType = {
  id:string
  name:string
  parentId:string
  pushTimeStramp:string
}

export type NoticeCenterPage = {
  id:string
  name:string
  logo:string
  announcementTextVOList?: Array<NoticeCenterType>
}

export type NoticeCenterArticleList = {
  name: string
  content: any
  pushTimeStramp: string
  parentId: string
} 

export enum MenuGrade {
  firstLevel=0,
  secondLevel=1
}

export enum CenterDateType {
  MinDate='YYYY-MM-DD HH:mm',
  MonthData='YYYY-MM-DD',
}