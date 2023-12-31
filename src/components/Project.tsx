interface ProjectProps {
  img: string
  title: string
  description: string
}

function Project({ img, title, description }: ProjectProps) {
  return (
    <div className='group w-[350px] md:max-xl:w-full md:max-xl:h-[310px] md:max-xl:flex-row h-[478px] rounded-2xl flex flex-col bg-[#FDF3F0] hover:bg-primaryPeach text-center items-center overflow-hidden transition-all'>
      <img src={img} alt='' className='h-full md:max-xl:w-[50vw]' />
      <div className='p-8 flex flex-col gap-4 flex-1 items-center group-hover:text-white'>
        <h5 className='uppercase font-medium tracking-[5px] text-xl text-primaryPeach group-hover:text-white'>
          {title}
        </h5>
        <p className='w-[30ch] md:max-xl:w-[25vw]'>{description}</p>
      </div>
    </div>
  )
}

export default Project
