import FavoritePopoverButtons from '@/features/market/market-quatation/common/market-favorites/favorite-popover-buttons'
import { PopoverInstance } from 'react-vant'
import { useLongPress } from 'ahooks'
import classNames from 'classnames'
import { RefObject, useRef, useState } from 'react'

/**
 * TanStack Table 案例中采用的 flexRender 会导致每次 cell components 会重新再浏览器渲染
 * flexRender(cell.column.columnDef.cell, cell.getContext())
 */
function RenderCell({ component, ctx }) {
  return component(ctx)
}

function VirtualRow({ instance, virtualRow, onRowClick, rowHighlightOnEqualCallback }) {
  const rows = instance.getRowModel().rows
  const row = rows[virtualRow.index] as typeof rows[0]

  const rowRef = useRef() as RefObject<HTMLTableRowElement>

  const popover = useRef<PopoverInstance>(null)

  const [isLongPressed, setIsLongPressed] = useState(false)

  useLongPress(
    () => {
      setIsLongPressed(true)
      popover.current?.show()
    },
    rowRef,
    {
      onClick: () => {
        setIsLongPressed(false)
      },
      delay: 500,
    }
  )

  return (
    <tr
      ref={rowRef}
      key={row.id}
      onClick={() => !isLongPressed && onRowClick && onRowClick(row.original)}
      className={classNames({
        'row-highlight-class': rowHighlightOnEqualCallback && rowHighlightOnEqualCallback(row.original),
      })}
    >
      {row.getVisibleCells().map(
        cell =>
          (cell.column.columnDef as any)?.colSpan !== -1 && (
            <td key={cell.id} colSpan={(cell.column.columnDef as any)?.colSpan ?? 1}>
              {(cell.column.columnDef as any)?.hasPopover ? (
                <FavoritePopoverButtons reference={popover} {...row.original}>
                  <RenderCell component={cell.column.columnDef.cell} ctx={cell.getContext()} />
                </FavoritePopoverButtons>
              ) : (
                <RenderCell component={cell.column.columnDef.cell} ctx={cell.getContext()} />
              )}
            </td>
          )
      )}
    </tr>
  )
}

export default VirtualRow
