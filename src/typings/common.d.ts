/** return the Element type in a given array */
export type ArrayElementType<T> = T extends (infer U)[] ? U : unknown

/** Optional type util */
export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>
export type PickRequired<Type, Key extends keyof Type> = Omit<Type, Key> & Required<Pick<Type, Key>>

export type ApiRequestWithPagination<T> = T & {
  pageNum?: string
  pageSize?: string
}

export type ApiResponseCommon<T> = T & {
  code?: number
  data?: T
  message?: string
}
