import { cn } from '../lib/utils'

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
      className={cn('h-[640px] rounded-2xl flex overflow-hidden', className)}>
      {imgSide === 'left' ? (
        <img src={img} alt='' className='basis-2/5' />
      ) : null}
      <div className='bg-[#FDF3F0] basis-3/5 px-20 py-[154px]'>
        <h2 className='text-primaryPeach mb-6'>{title}</h2>
        {paragraphs.map((p, i, arr) => {
          const isLastParagraph = i !== arr.length - 1
          return (
            <>
              <p>{p}</p>
              {isLastParagraph && <br />}
            </>
          )
        })}
      </div>
      {imgSide === 'right' ? (
        <img src={img} alt='' className='basis-2/5' />
      ) : null}
    </section>
  )
}

export default AboutCard
