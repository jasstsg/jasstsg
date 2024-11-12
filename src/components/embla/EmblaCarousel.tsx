import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import './embla.css';

const TWEEN_OPACITY_FACTOR_BASE = 0.84
const TWEEN_SCALE_FACTOR_BASE = 0.2;
const TWEEN_NODE_SELECTOR = ".embla__tween__node";

const OPACITY_MAX = 1;
const OPACITY_MIN = 0;

const SCALE_MAX = 1;
const SCALE_MIN = 0;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type PropType = {
  slides: React.ReactNode[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenOpacityFactor = useRef(0)
  const tweenScaleFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])
  
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    let scrollSnapListLength = emblaApi.scrollSnapList().length;
    tweenOpacityFactor.current = TWEEN_OPACITY_FACTOR_BASE * scrollSnapListLength;
    tweenScaleFactor.current = TWEEN_SCALE_FACTOR_BASE * scrollSnapListLength;
  }, [])

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(TWEEN_NODE_SELECTOR) as HTMLElement
    })
  }, [])

  const tweenOpacityAndScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenOpacityValue = 1 - Math.abs(diffToTarget * tweenOpacityFactor.current)
          const opacity = numberWithinRange(tweenOpacityValue, OPACITY_MIN, OPACITY_MAX).toString()
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity
          
          const tweenScaleValue = 1 - Math.abs(diffToTarget * tweenScaleFactor.current)
          const scale = numberWithinRange(tweenScaleValue, SCALE_MIN, SCALE_MAX).toString()
          //emblaApi.slideNodes()[slideIndex].style.transform = `scale(${scale})`

          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenOpacityAndScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacityAndScale)
      .on('scroll', tweenOpacityAndScale)
      .on('slideFocus', tweenOpacityAndScale)

  }, [emblaApi, tweenOpacityAndScale])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
                {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )

}

export default EmblaCarousel;
