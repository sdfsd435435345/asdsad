import { YapiGetV1FavouriteListData } from '../yapi/FavouriteListV1GetApi'

type FavCallback = (item: YapiGetV1FavouriteListData[]) => YapiGetV1FavouriteListData[]

type FavStore = {
  hasListUpdated: boolean
  updateList: () => void
  favList: YapiGetV1FavouriteListData[]
  updateFavList: (item: YapiGetV1FavouriteListData[]) => void
  favListSnap: YapiGetV1FavouriteListData[]
  updateFavListSnap: (callback: FavCallback) => void
}
