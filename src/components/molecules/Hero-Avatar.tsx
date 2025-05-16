import Image from 'next/image'
import profilePic from '/public/images/my-pic-2.jpg'

const HeroAvatar = () => {
  return (
    <div className="flex">
      <div className="relative flex justify-center items-center">
        <div className="absolute rounded-full border border-[#898781] w-24 h-24 animate-pulse" />
        <Image
          src={profilePic}
          alt="profile-avatar"
          className="rounded-full object-cover w-20 h-20"
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}

export default HeroAvatar
