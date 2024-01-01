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
      className='flex w-full flex-col gap-6 lg:w-[380px]'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='relative'>
        <input
          {...register('name', { required: "Can't be empty" })}
          type='text'
          placeholder='Name'
          className='block h-12 w-full border-b-[1px] border-white bg-transparent px-4 font-medium text-white outline-none placeholder:capitalize placeholder:text-white placeholder:opacity-50 hover:border-b-[3px]'
        />
        {errors.name && (
          <div className='absolute right-0 top-4 flex items-center gap-2 text-xs italic text-white'>
            <span>{errors.name.message as string}</span>{' '}
            <img src={errorIcon} alt='error icon' className='h-5 w-5' />
          </div>
        )}
      </div>
      <div className='relative'>
        <input
          {...register('email', { required: "Can't be empty" })}
          type='text'
          placeholder='Email address'
          className='block h-12 w-full border-b-[1px] border-white bg-transparent px-4 font-medium text-white outline-none placeholder:capitalize placeholder:text-white placeholder:opacity-50 hover:border-b-[3px]'
        />
        {errors.email && (
          <div className='absolute right-0 top-4 flex items-center gap-2 text-xs italic text-white'>
            <span>{errors.email.message as string}</span>{' '}
            <img src={errorIcon} alt='error icon' className='h-5 w-5' />
          </div>
        )}
      </div>
      <div className='relative'>
        <input
          {...register('phone', { required: "Can't be empty" })}
          type='text'
          placeholder='Phone'
          className='block h-12 w-full border-b-[1px] border-white bg-transparent px-4 font-medium text-white outline-none placeholder:capitalize placeholder:text-white placeholder:opacity-50 hover:border-b-[3px]'
        />
        {errors.phone && (
          <div className='absolute right-0 top-4 flex items-center gap-2 text-xs italic text-white'>
            <span>{errors.phone.message as string}</span>{' '}
            <img src={errorIcon} alt='error icon' className='h-5 w-5' />
          </div>
        )}
      </div>
      <div className='relative max-md:mb-10'>
        <textarea
          {...register('message', { required: "Can't be empty" })}
          placeholder='Your message'
          className='block h-24 w-full resize-none border-b-[1px] border-white bg-transparent px-4 font-medium text-white outline-none placeholder:capitalize placeholder:text-white placeholder:opacity-50 hover:border-b-[3px]'
          rows={6}
        />
        {errors.message && (
          <div className='absolute right-0 top-1 flex items-center gap-2 text-xs italic text-white'>
            <span>{errors.message.message as string}</span>{' '}
            <img src={errorIcon} alt='error icon' className='h-5 w-5' />
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
