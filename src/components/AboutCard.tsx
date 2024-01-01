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
        'z-20 basis-2/5 bg-cover bg-no-repeat max-lg:h-80',
        img,
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
        'flex h-[890px] flex-col overflow-hidden max-md:-mx-6 md:h-[736px] md:rounded-2xl lg:h-[640px] lg:flex-row',
        className
      )}>
      {imgSide === 'left' ? <AboutCardBgImage img={img} /> : null}
      <div className='relative z-10 basis-3/5 bg-[#FDF3F0] px-6 py-20 max-lg:order-2 max-lg:text-center md:px-14 md:py-24 lg:px-20 lg:py-[154px]'>
        <h2 className='mb-6 text-[32px] text-primaryPeach'>{title}</h2>
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
          className='absolute left-0 top-0 min-h-[584px] min-w-[584px] md:bottom-11 md:left-auto md:right-0 md:top-auto lg:-left-1/4 lg:bottom-0'
        />
      </div>
      {imgSide === 'right' ? <AboutCardBgImage img={img} /> : null}
    </section>
  )
}

export default AboutCard
