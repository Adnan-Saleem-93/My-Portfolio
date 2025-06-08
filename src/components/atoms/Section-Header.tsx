type Props = { text: string; classes?: string }

export default function SectionHeader({ text, classes = '' }: Props) {
  return (
    <h3
      className={`md:text-3xl text-2xl lowercase tracking-[4px] py-4 text-white font-semibold ${classes}`}
    >
      {'<'}
      {text}
      {' />'}
    </h3>
  )
}
