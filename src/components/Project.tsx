interface ProjectProps {
  img: string
  title: string
  description: string
}

function Project({ img, title, description }: ProjectProps) {
  return (
    <div className='w-[350px] h-[478px] rounded-2xl flex flex-col bg-[#FDF3F0] text-center items-center overflow-hidden'>
      <img src={img} alt='' className='basis-5/6' />
      <div className='p-8 flex flex-col gap-4'>
        <h5 className='uppercase font-medium tracking-[5px] text-xl text-primaryPeach'>
          {title}
        </h5>
        <p className='w-[30ch]'>{description}</p>
      </div>
    </div>
  )
}

export default Project
