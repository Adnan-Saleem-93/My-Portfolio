import Image from 'next/image'
import profilePic from '/public/images/my-pic-2.jpg'

const HeroAvatar = () => {
  return (
    <div className="flex">
      <div className="relative flex justify-center items-center">
        <div className="absolute rounded-full border border-[#bbb5a6] lg:w-64 lg:h-64 w-40 h-40 md:w-52 md:h-52 animate-pulse" />
        <Image
          src={profilePic}
          alt="profile-avatar"
          className="rounded-full object-cover lg:w-56 lg:h-56 md:w-44 md:h-44 w-32 h-32"
          width={150}
          height={150}
        />
      </div>
    </div>
  )
}

export default HeroAvatar
