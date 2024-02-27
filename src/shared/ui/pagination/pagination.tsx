import { FC } from 'react'

import { ArrowBackIcon, ArrowNextIcon } from '@/shared/assets'
import { usePagination } from '@/shared/ui/pagination/usePagination'
import { Select } from '@/shared/ui/select/select'
import { Typography } from '@/shared/ui/typography'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

const classNames = {
  container: s.container,
  dots: s.dots,
  icon: s.icon,
  item: s.item,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
  root: s.root,
  select: s.select,
  selectBox: s.selectBox,
}

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  page: number
  showPerPageSelect?: {
    perPage: string
    perPageOptions: string[]
    setPerPage: (itemPerPage: string) => void
  }
  siblings?: number
}
export const Pagination: FC<PaginationProps> = ({
  count,
  onChange,
  page,
  showPerPageSelect,
  siblings,
}) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          perPage={showPerPageSelect.perPage}
          perPageOptions={showPerPageSelect.perPageOptions}
          setPerPage={showPerPageSelect.setPerPage}
        />
      )}
    </div>
  )
}

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}
type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}
export const PageButton: FC<PageButtonProps> = ({ disabled, onClick, page, selected }) => {
  return (
    <button
      className={classNames.pageButton(selected)}
      disabled={selected || disabled}
      onClick={onClick}
    >
      {page}
    </button>
  )
}
const PrevButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <ArrowNextIcon className={classNames.icon} size={16} />
    </button>
  )
}

const NextButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <ArrowBackIcon className={classNames.icon} size={16} />
    </button>
  )
}

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}
const Dots: FC = () => {
  return <span className={classNames.dots}>&#8230;</span>
}

export const MainPaginationButtons: FC<MainPaginationButtonsProps> = ({
  currentPage,
  onClick,
  paginationRange,
}) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}

export type PerPageSelectProps = {
  perPage: string
  perPageOptions: string[]
  setPerPage: (itemPerPage: string) => void
}

export const PerPageSelect: FC<PerPageSelectProps> = ({ perPage, perPageOptions, setPerPage }) => {
  const selectOptions = perPageOptions.map(el => ({
    label: el,
    value: el,
  }))

  return (
    <div className={classNames.selectBox}>
      <Typography variant={'body2'}>Показать</Typography>
      <Select
        className={classNames.select}
        onValueChange={setPerPage}
        selectOptions={selectOptions}
        value={perPage}
        variant={'pagination'}
      />
      <Typography variant={'body2'}>На странице</Typography>
    </div>
  )
}
