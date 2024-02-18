type Props = {Icon: any; label: string}

export default function AnimatedIconWithLabel({Icon, label}: Props) {
  return (
    <div className={`flex items-center mb-4 gap-4`}>
      <span className="animate-bounce text-amber-500">{Icon}</span>
      <p className={`text-gray-300 tracking-wider ml-3`}>{label}</p>
    </div>
  )
}
