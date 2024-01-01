interface ProjectProps {
  img: string
  title: string
  description: string
}

function Project({ img, title, description }: ProjectProps) {
  return (
    <div className='group flex h-[478px] w-[350px] flex-col items-center overflow-hidden rounded-2xl bg-[#FDF3F0] text-center transition-all hover:bg-primaryPeach md:max-xl:h-[310px] md:max-xl:w-full md:max-xl:flex-row'>
      <img src={img} alt='' className='h-full md:max-xl:w-[50vw]' />
      <div className='flex flex-1 flex-col items-center gap-4 p-8 group-hover:text-white'>
        <h5 className='text-xl font-medium uppercase tracking-[5px] text-primaryPeach group-hover:text-white'>
          {title}
        </h5>
        <p className='w-[30ch] md:max-xl:w-[25vw]'>{description}</p>
      </div>
    </div>
  )
}

export default Project
