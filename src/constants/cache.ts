// token key
export const token_key = 'TOKEN__'
export const token_expire_key = 'TOKEN_EXPIRE__'

// user info key
export const user_info_key = 'USER__INFO__'

// base global local key
export const app_local_cache_key = 'COMMON__LOCAL__KEY__'

// base global session key
export const app_session_cache_key = 'COMMON__SESSION__KEY__'

// default cache expiry
export const default_cache_time = 60 * 60 * 24

export enum CacheTypeEnum {
  SESSION,
  LOCAL,
}
