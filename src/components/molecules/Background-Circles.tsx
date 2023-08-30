'use client'
import {motion} from 'framer-motion'

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: [0.1, 0.3, 0.5, 0.7, 0.9, 1],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{duration: 2.5}}
      className="relative flex justify-center items-center"
    >
      <div className="absolute rounded-full border border-[#4545459f] w-[200px] h-[200px] mt-52" />
      <div className="absolute rounded-full border border-[#4545459f] w-[300px] h-[300px] mt-52" />
      <div className="absolute rounded-full border border-[#4545459f] w-[500px] h-[500px] mt-52" />
      <div className="absolute rounded-full border border-[#bbb5a6] w-[650px] h-[650px] mt-52 animate-pulse" />
      <div className="absolute rounded-full border border-[#4545459f] w-[800px] h-[800px] mt-52" />
    </motion.div>
  )
}

export default BackgroundCircles
