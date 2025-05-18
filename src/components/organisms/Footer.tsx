const Footer = () => {
  const currentYear = new Date().getFullYear()
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Karachi',
  })
  return (
    <div className="flex w-full justify-between items-center text-slate-200 py-8">
      <div className="flex items-center gap-x-2">
        <p>©</p>
        <p>Adnan Saleem - Full Stack Web Developer {currentYear}</p>
      </div>

      <p>{currentTime}</p>
    </div>
  )
}

export default Footer
