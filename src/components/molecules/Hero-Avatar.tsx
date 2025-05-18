import Image from 'next/image'
import profilePic from '/public/images/my-pic-2.jpg'

const HeroAvatar = () => {
  return (
    <div className="flex">
      <div className="relative flex justify-center items-center">
        <div className="absolute rounded-full border border-[#898781] sm:w-24 sm:h-24 w-20 h-20 animate-pulse" />
        <Image
          src={profilePic}
          alt="profile-avatar"
          className="rounded-full object-cover sm:w-20 sm:h-20 w-16 h-16 max-w-none max-h-none"
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}

export default HeroAvatar
