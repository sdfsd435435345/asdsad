export type HomeCommunityGroupsType = {
    contactGroupCd: string
    groupDescribe: string
    groupName: string
    imgIcon: string
    imgQrCode: string
    lanTypeCd: string
    showTypeCd: number
    sortCode: number
    linkUrl: string
    detailList?: Array<CommunityGroupsDetailType>
}

export type CommunityGroupsDetailType = {
    groupConfigId:number
    groupName: string
    imgIcon: string
    imgQrCode: string
    lanTypeCd: string
    showTypeCd: number
    linkUrl: string
    sortCode: number
}