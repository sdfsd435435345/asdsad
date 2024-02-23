import { MarketListPullRefresh } from '@/features/market/market-quatation/common/market-list/market-list-pull-refresh'
import { getCoreRowModel, SortingState, useReactTable, flexRender, ColumnDef, ColumnSort } from '@tanstack/react-table'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useVirtual } from 'react-virtual'
import { tableSortHelper } from '@/helper/market/market-list'
import { Loading } from 'react-vant'
import { isEmpty } from 'lodash'
import NoDataImage from '@/components/no-data-image'
import { ApiStatusEnum } from '@/constants/market/market-list'
import classNames from 'classnames'
import { useUpdateEffect } from 'ahooks'
import { t } from '@lingui/macro'
import VirtualRow from './row'
import styles from './index.module.css'
import Icon from '../icon'
import TableLayout from './layout'

export type Itable<TData> = {
  data: TData[]
  setData?: (data: any) => void

  columns: ColumnDef<TData, any>[] | any
  hasPopover?: boolean
  onRowClick?: (row: TData) => void

  sortable?: boolean
  defaultSorter?: ColumnSort
  onSortChange?: () => void
  setSorter?: (sorter: ColumnSort) => void

  apiStatus?: ApiStatusEnum
  placeholder?: React.ReactNode
  showLoader?: boolean
  finished?: boolean
  showTableHeaderWhenEmpty?: boolean

  noDataFooterText?: string
  onPullRefresh?: () => void

  rowHighlightOnEqualCallback?: (val: any) => boolean
}

// 对 render 和 title 进行兼容性处理
const formatColumns = cols => {
  return cols.map(column => {
    if (column.render && !column.cell) {
      column.cell = column.render
      delete column.render
    }

    if (!column.header && column.title) {
      column.header = column.title
      delete column.title
    }

    return column
  })
}

const Table = <T,>({ apiStatus, ...props }: Itable<T>) => {
  const { data, columns, sortable = true, hasPopover = false, defaultSorter, setData } = props
  const defaultSorterState = defaultSorter ? [defaultSorter] : []
  const [sorting, setSorting] = useState<SortingState>(defaultSorterState)
  const tableContainerRef = useRef<HTMLDivElement | null>(null)

  const instance = useReactTable({
    data,
    columns: formatColumns(columns),
    state: sortable ? { sorting } : {},
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    sortDescFirst: true,
  })

  useUpdateEffect(() => {
    props.setSorter && props.setSorter(sorting[0] || defaultSorter)
    tableSortHelper.handler({ data, setData, sorter: sorting[0], defaultSorter: defaultSorterState[0] })
  }, [sorting])

  // 虚拟列表的 hooks 可以获取需要显示的虚拟列表数据，总数等
  const rowVirtualizer = useVirtual({
    parentRef: { current: tableContainerRef?.current?.parentNode },
    size: instance.getRowModel().rows.length, // 需要显示数据的总长度
    overscan: 5, // 可视区域外多出来的数据
    estimateSize: useCallback(() => 30, []), // 每一行的高度给的多少
  })

  const { virtualItems: virtualRows, totalSize } = rowVirtualizer

  // 计算出虚拟列表数组第一个距离顶部的距离
  const virtualRowsTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0

  // 计算出虚拟列表数组最后一个距离底部的距离
  const virtualRowsBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0

  const renderHeaderCol = header => {
    return (
      <th key={header.id} colSpan={1}>
        {header.isPlaceholder ? null : (
          <div
            {...{
              className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
              onClick: header.column.getToggleSortingHandler(),
            }}
          >
            <span className="flex flex-row">
              {flexRender(header.column.columnDef.header, header.getContext())}
              {sortable && header.column.columnDef.sorter !== false && (
                <span className="flex flex-col my-auto pl-1 sort-icon-wrapper ">
                  <Icon
                    name={
                      header.column.getIsSorted() === 'asc' ? 'regsiter_icon_away_white_hover' : 'regsiter_icon_away'
                    }
                    hasTheme={header.column.getIsSorted() !== 'asc'}
                  />
                  <Icon
                    name={
                      header.column.getIsSorted() === 'desc' ? 'regsiter_icon_drop_white_hover' : 'regsiter_icon_drop'
                    }
                    hasTheme={header.column.getIsSorted() !== 'desc'}
                  />
                </span>
              )}
            </span>
          </div>
        )}
      </th>
    )
  }

  const renderEmptyPlaceholder = () => {
    return (
      <TableLayout tableRef={tableContainerRef} data={props}>
        <div className="table-header-without-data">
          {props.showTableHeaderWhenEmpty ? (
            <>
              <table className={classNames(styles.table, 'table-header-no-data')}>
                <thead>
                  <tr>
                    {instance
                      .getHeaderGroups()
                      .map(headerGroup => headerGroup.headers.map(header => renderHeaderCol(header)))}
                  </tr>
                </thead>
              </table>

              <NoDataImage footerText={props.noDataFooterText} />
            </>
          ) : (
            <NoDataImage footerText={props.noDataFooterText} />
          )}
        </div>
      </TableLayout>
    )
  }

  if (
    props.showLoader &&
    isEmpty(data) &&
    (apiStatus === ApiStatusEnum.fetching || apiStatus === ApiStatusEnum.default)
  ) {
    return (
      <TableLayout tableRef={tableContainerRef} data={props}>
        {props.placeholder ? (
          props.placeholder
        ) : (
          <div className="loading-wrapper">
            <Loading /> <span>{t`components_table_index_5101623`}</span>
          </div>
        )}
      </TableLayout>
    )
  }

  if (apiStatus === ApiStatusEnum.failed && isEmpty(data)) {
    return renderEmptyPlaceholder()
  }

  if (apiStatus === ApiStatusEnum.succeed && isEmpty(data)) {
    return renderEmptyPlaceholder()
  }

  if (!apiStatus && isEmpty(data)) return renderEmptyPlaceholder()

  return (
    <TableLayout tableRef={tableContainerRef} data={props}>
      <table className={classNames(styles.table, 'table-component-wrapper')}>
        {/* <Sticky> */}
        <thead>
          <tr>
            {instance.getHeaderGroups().map(headerGroup => headerGroup.headers.map(header => renderHeaderCol(header)))}
          </tr>
        </thead>
        {/* </Sticky> */}

        <tbody className="table-body">
          {virtualRowsTop > 0 && (
            <tr>
              <td style={{ height: `${virtualRowsTop}px` }} />
            </tr>
          )}
          {virtualRows.map(
            (virtualRow, index) => (
              <VirtualRow
                key={index}
                virtualRow={virtualRow}
                instance={instance}
                onRowClick={props.onRowClick}
                rowHighlightOnEqualCallback={props.rowHighlightOnEqualCallback}
              />
            )
            // const rows = instance.getRowModel().rows
            // const row = rows[virtualRow.index] as typeof rows[0]

            // return (
            //   <tr key={row.id} onClick={() => props.onRowClick && props.onRowClick(row.original)}>
            //     {row.getVisibleCells().map(cell => (
            //       <td key={cell.id} colSpan={1}>
            //         {(cell.column.columnDef as any)?.hasPopover ? (
            //           // TODO extract out wrapper
            //           <FavoritePopoverButtons {...row.original}>
            //             {flexRender(cell.column.columnDef.cell, cell.getContext())}
            //           </FavoritePopoverButtons>
            //         ) : (
            //           flexRender(cell.column.columnDef.cell, cell.getContext())
            //         )}
            //       </td>
            //     ))}
            //   </tr>
            // )
          )}
          {virtualRowsBottom > 0 && (
            <tr>
              <td style={{ height: `${virtualRowsBottom}px` }} />
            </tr>
          )}
        </tbody>

        {props.showLoader && apiStatus === ApiStatusEnum.fetching && (
          <tr className="loading-more-wrapper">
            <Loading /> <span>{t`components_table_index_5101623`}</span>
          </tr>
        )}
      </table>

      {props.showLoader && apiStatus === ApiStatusEnum.succeed && props.finished && (
        <div className="load-finished-text">{t`components/common-list/list-footer/index-0`}</div>
      )}
    </TableLayout>
  )
}

export default Table
