import { cn } from '../lib/utils'
import threeCirclesPattern from '../assets/shared/desktop/bg-pattern-three-circles.svg'

interface AboutCardBgProps {
  img: string
  className?: string
}

function AboutCardBgImage({ img, className }: AboutCardBgProps) {
  return (
    <div
      className={cn(
        `bg-[url("./assets/about/mobile/${img}")] md:bg-[url("./assets/about/tablet/${img}")] lg:bg-[url("./assets/about/desktop/${img}")] bg-no-repeat bg-cover max-lg:h-80 basis-2/5 z-20`,
        className
      )}
    />
  )
}
interface AboutCardProps {
  className: string
  img: string
  imgSide: 'left' | 'right'
  title: string
  paragraphs: string[]
}

function AboutCard({
  className,
  img,
  imgSide,
  title,
  paragraphs,
}: AboutCardProps) {
  return (
    <section
      className={cn(
        'h-[890px] md:h-[736px] lg:h-[640px] max-md:-mx-6 md:rounded-2xl flex flex-col lg:flex-row overflow-hidden',
        className
      )}>
      {imgSide === 'left' ? <AboutCardBgImage img={img} /> : null}
      <div className='bg-[#FDF3F0] basis-3/5 px-6 md:px-14 lg:px-20 py-20 md:py-24 lg:py-[154px] max-lg:text-center max-lg:order-2 relative z-10'>
        <h2 className='text-primaryPeach mb-6 text-[32px]'>{title}</h2>
        {paragraphs.map((p, i, arr) => {
          const isLastParagraph = i !== arr.length - 1
          return (
            <>
              <p>{p}</p>
              {isLastParagraph && <br />}
            </>
          )
        })}
        <img
          src={threeCirclesPattern}
          alt='three circles pattern'
          className='absolute min-h-[584px] min-w-[584px] top-0 left-0 md:top-auto md:left-auto md:bottom-11 md:right-0 lg:bottom-0 lg:-left-1/4'
        />
      </div>
      {imgSide === 'right' ? <AboutCardBgImage img={img} /> : null}
    </section>
  )
}

export default AboutCard
