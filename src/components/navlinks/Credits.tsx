import LinkButton from '../LinkButton'

const Credits = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-xl pb-4'>PHOTO CREDITS</h1>
      <div>
        <p className='ml-5 font-semibold'>
          Photographer: Adesuwa Oworo
        </p>

        <div className="mt-4">
            <LinkButton href='https://www.bellanaija.com/2020/10/adesuwa-eworo-wazobia-call-to-unity/'>
              Click to View Original Images
            </LinkButton>
          </div>
      </div>
    </div>
  )
}

export default Credits