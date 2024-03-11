import { ComponentPropsWithoutRef, FC } from 'react'

import { IconClose } from '@/shared/assets'
import { Typography } from '@/shared/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

export type ModalProps = {
  width?: '26.25rem' | '33.875rem'
} & Dialog.DialogProps
export const Modal: FC<ModalProps> = ({ children, onOpenChange, open, width }: ModalProps) => (
  <Dialog.Root modal onOpenChange={onOpenChange} open={open}>
    <Dialog.Portal>
      <Dialog.Overlay className={s.DialogOverlay} />
      <Dialog.Content className={s.DialogContent} style={{ width }}>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export const ModalTitle = (props: { title: string }) => {
  return (
    <DialogTitle className={s.DialogTitle}>
      <Typography as={'h3'} variant={'h3'}>
        {props.title}
      </Typography>
      <Dialog.Close asChild>
        <button className={s.closeTitleButton}>
          <IconClose />
        </button>
      </Dialog.Close>
    </DialogTitle>
  )
}
type ModalContentTextProps = ComponentPropsWithoutRef<'div'>
export const ModalContent: FC<ModalContentTextProps> = ({ children, className }) => {
  return <div className={clsx(className, s.modalContent)}>{children}</div>
}
type ModalFooterProps = ComponentPropsWithoutRef<'div'>
export const ModalFooter: FC<ModalFooterProps> = ({ children }) => {
  return <div className={s.modalFooter}>{children}</div>
}
