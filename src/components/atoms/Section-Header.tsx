type Props = { text: string; classes?: string }

export default function SectionHeader({ text, classes = '' }: Props) {
  return (
    <h3 className={`text-2xl lowercase tracking-[12px] text-white ${classes}`}>
      $:/{text}
    </h3>
  )
}
