type Props = {text: string; classes?: string}

export default function SectionHeader({text, classes = ''}: Props) {
  return (
    <h3 className={`text-2xl uppercase tracking-[12px] text-gray-400/80 ${classes}`}>{text}</h3>
  )
}
