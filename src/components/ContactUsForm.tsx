import { useForm, FieldValues } from 'react-hook-form'
import errorIcon from '../assets/contact/desktop/icon-error.svg'

function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const onSubmit = (data: FieldValues) => {
    console.log('data', data)
    reset()
  }

  return (
    <form
      className='lg:w-[380px] w-full flex flex-col gap-6'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='relative'>
        <input
          {...register('name', { required: "Can't be empty" })}
          type='text'
          placeholder='Name'
          className='bg-transparent block w-full border-b-[1px] hover:border-b-[3px] border-white outline-none placeholder:text-white placeholder:opacity-50 placeholder:capitalize font-medium h-12 text-white px-4'
        />
        {errors.name && (
          <div className='flex items-center gap-2 text-white italic text-xs absolute top-4 right-0'>
            <span>{errors.name.message as string}</span>{' '}
            <img src={errorIcon} alt='error icon' className='w-5 h-5' />
          </div>
        )}
      </div>
      <div className='relative'>
        <input
          {...register('email', { required: "Can't be empty" })}
          type='text'
          placeholder='Email address'
          className='bg-transparent block w-full border-b-[1px] hover:border-b-[3px] border-white outline-none placeholder:text-white placeholder:opacity-50 placeholder:capitalize font-medium h-12 text-white px-4'
        />
        {errors.email && (
          <div className='flex items-center gap-2 text-white italic text-xs absolute top-4 right-0'>
            <span>{errors.email.message as string}</span>{' '}
            <img src={errorIcon} alt='error icon' className='w-5 h-5' />
          </div>
        )}
      </div>
      <div className='relative'>
        <input
          {...register('phone', { required: "Can't be empty" })}
          type='text'
          placeholder='Phone'
          className='bg-transparent block w-full border-b-[1px] hover:border-b-[3px] border-white outline-none placeholder:text-white placeholder:opacity-50 placeholder:capitalize font-medium h-12 text-white px-4'
        />
        {errors.phone && (
          <div className='flex items-center gap-2 text-white italic text-xs absolute top-4 right-0'>
            <span>{errors.phone.message as string}</span>{' '}
            <img src={errorIcon} alt='error icon' className='w-5 h-5' />
          </div>
        )}
      </div>
      <div className='relative max-md:mb-10'>
        <textarea
          {...register('message', { required: "Can't be empty" })}
          placeholder='Your message'
          className='bg-transparent block w-full border-b-[1px] hover:border-b-[3px] border-white outline-none placeholder:text-white placeholder:opacity-50 placeholder:capitalize font-medium h-24 text-white px-4 resize-none'
          rows={6}
        />
        {errors.message && (
          <div className='flex items-center gap-2 text-white italic text-xs absolute top-1 right-0'>
            <span>{errors.message.message as string}</span>{' '}
            <img src={errorIcon} alt='error icon' className='w-5 h-5' />
          </div>
        )}
      </div>
      <button
        className='btn white mx-auto md:mx-0 md:ml-auto'
        disabled={isSubmitting}>
        submit
      </button>
    </form>
  )
}

export default ContactUsForm
