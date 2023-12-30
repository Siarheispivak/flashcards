import { ComponentProps, ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { Typography } from '@/shared/ui/typography'
import { clsx } from 'clsx'

import s from './table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      table: clsx(className, s.table),
    }

    return <table className={classNames.table} {...rest} ref={ref} />
  }
)

export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...rest }, ref) => {
    return <thead {...rest} ref={ref}></thead>
  }
)

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...rest }, ref) => {
    return <tbody {...rest} ref={ref}></tbody>
  }
)

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...rest }, ref) => {
    return <tr {...rest} ref={ref}></tr>
  }
)

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      headCell: clsx(s.tableHeadCell),
    }

    return (
      <th className={classNames.headCell} ref={ref} {...rest}>
        <span>{children}</span>
      </th>
    )
  }
)

export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      cell: clsx(s.tableCell),
    }

    return (
      <td className={classNames.cell} ref={ref} {...rest}>
        <span>{children}</span>
      </td>
    )
  }
)

export const TableEmpty: FC<ComponentProps<'div'> & { mb?: string; mt?: string }> = ({
  className,
  mb,
  mt = '89px',
}) => {
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <Typography
      className={classNames.empty}
      style={{ marginBottom: mb, marginTop: mt }}
      variant={'h2'}
    >
      Пока тут еще нет данных! :(
    </Typography>
  )
}
