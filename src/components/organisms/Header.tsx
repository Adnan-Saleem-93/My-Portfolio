'use client'

import SectionHeader from '../atoms/Section-Header'
import {ILinkItem} from '@/utils/interfaces'

type Props = {
  pageHeaderText: string
  pageHeaderClasses?: string
}

const links: ILinkItem[] = [
  {name: 'Home', href: '/'},
  {name: 'About', href: '/about'},
  {name: 'Experience', href: '/experience'},
  {name: 'Projects', href: '/projects'},
  {name: 'Skills', href: '/skills'},
  {name: 'Contact', href: '/contact'}
]

const Header = ({pageHeaderText, pageHeaderClasses = ''}: Props) => {
  // const [socialIcons, setSocialIcons] = useState([
  //   {
  //     id: 'linkedin',
  //     url: 'https://www.linkedin.com/in/adnan-saleem-199151181',
  //     fgColor: 'gray',
  //     isHovered: false,
  //     hoverColor: '#0077b5'
  //   },
  //   {
  //     id: 'github',
  //     url: 'https://github.com/Adnan-Saleem-93',
  //     fgColor: 'gray',
  //     isHovered: false,
  //     hoverColor: '#fff'
  //   },
  //   {
  //     id: 'facebook',
  //     url: 'https://www.facebook.com/profile.php?id=100082987400951',
  //     fgColor: 'gray',
  //     isHovered: false,
  //     hoverColor: '#316FF6'
  //   }
  // ])
  // const setHoverState = ({id, isHovered}: {id: string; isHovered: boolean}) => {
  //   const newIcons = [...socialIcons]
  //   const matchedIconIndex = newIcons.findIndex((x) => x.id === id)
  //   if (matchedIconIndex > -1) {
  //     newIcons[matchedIconIndex].isHovered = isHovered
  //   }
  //   setSocialIcons(newIcons)
  // }
  return (
    <header className="w-full flex justify-between md:justify-around items-center absolute top-0 p-5">
      <div className="flex justify-center items-center pb-2">
        {links.map((link: ILinkItem, index: number) => {
          return (
            <a href={link.href} key={index}>
              <button type="button" className="link--button">
                {link.name}
              </button>
            </a>
          )
        })}
      </div>
      <SectionHeader text={pageHeaderText} classes={pageHeaderClasses} />
    </header>
  )
}

export default Header
