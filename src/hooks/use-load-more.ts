import { useState } from 'react'
import { useRequest } from 'ahooks'

export type IUseLoadMoreParams<T> = {
  pageSize?: number
  fetchData: (page: number) => Promise<T[] | undefined>
}

export function useLoadMore<T>({ pageSize = 20, fetchData }: IUseLoadMoreParams<T>) {
  const [loading, setLoading] = useState(false)
  const [finished, setFinished] = useState(false)
  const [page, setPage] = useState(0)
  const [list, setList] = useState<T[]>([])

  const { runAsync } = useRequest(fetchData, {
    manual: true,
    debounceWait: 300,
  })

  // eslint-disable-next-line default-param-last
  const loadMore = async (isRefresh = false, showLoading = true) => {
    if ((showLoading && loading) || (!isRefresh && finished)) return
    setLoading(true)
    const data = await runAsync(isRefresh ? 1 : page + 1).catch(() => {
      setFinished(true)
    })

    setLoading(false)
    if (!data) {
      setFinished(true)
      return
    }
    setPage(isRefresh ? 1 : page + 1)
    setList(isRefresh ? data : [...list, ...data])
    setFinished(data.length < pageSize)
  }
  const refresh = (showLoading?: boolean) => {
    return loadMore(true, showLoading)
  }

  const cancelLoad = () => {
    refresh(false)
  }

  return { loading, list, finished, setList, refresh, loadMore, cancelLoad }
}
