import { forwardRef } from 'react'

import { Typography } from '@/shared/ui/typography'
import * as RadixSlider from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

export const Slider = forwardRef<HTMLSpanElement, RadixSlider.SliderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={clsx(s.sliderWrapper, className)}>
        <div className={s.cardNumber}>
          <Typography
            aria-label={'minValue'}
            as={'span'}
            style={{ position: 'absolute' }}
            variant={'body1'}
          >
            {props?.value?.[0]}
          </Typography>
        </div>
        <RadixSlider.Root
          className={s.SliderRoot}
          minStepsBetweenThumbs={1}
          ref={ref}
          step={1}
          {...props}
        >
          <RadixSlider.Track className={s.SliderTrack}>
            <RadixSlider.Range className={s.SliderRange} />
          </RadixSlider.Track>
          <RadixSlider.Thumb className={s.SliderThumb} key={1} />
          <RadixSlider.Thumb className={s.SliderThumb} key={2} />
        </RadixSlider.Root>
        <div className={s.cardNumber}>
          <Typography
            aria-label={'maxValue'}
            as={'span'}
            style={{ position: 'absolute' }}
            variant={'body1'}
          >
            {props?.value?.[1]}
          </Typography>
        </div>
      </div>
    )
  }
)
