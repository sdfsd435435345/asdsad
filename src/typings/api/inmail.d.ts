export type ReminderPriceType = {
    id: string
    name: string
    placeholder?: string
}

export type InmailMenuListType = {
    id: string | number
    title? : string
    name: string
    unReadNum: number
    icon?: string
    isLoading?: boolean
}

export type InmailMenuBodyDataType = {
    id: string | number
    title? : string
    name: string
    unReadNum: number
    icon?: string
    collapseIcon?: string
    isLoading?: boolean
    content?: string
    time?: number
    eventTime?: number
    webLink?: string
    moduleId?: string
    extras?: any
    symbolName?: string
    baseSymbolName?: string
    quoteSymbolName?: string
    subscribeSource?: string
}

export type InmailTypingsStroe = {
    id: number
    name: string
    icon: string
    collapseIcon?: string
}

export type ReminderPageType = {
    baseSymbolName: string
    createTime: number
    expireTime: number
    id: number
    isRepeatNotice: number
    quoteSymbolName: string
    symbolName: string
    type: number
    value: string
}

export type InmailWebSocketType = {
    action: number
    latestDeviceNo: string,
    isForceWindow: boolean,
    title: string,
    content: string,
}