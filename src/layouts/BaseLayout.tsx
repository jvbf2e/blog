/*
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-12 16:36:14
 * @LastEditTime: 2021-10-15 14:31:35
 * @FilePath: \Developmente:\Joints\Project\blog\src\layouts\BaseLayout.tsx
 */
import type { UmiComponentProps, ObjType } from '@/common/type'
import type { Path } from 'path-to-regexp'

import { pathToRegexp } from 'path-to-regexp'

import PrimaryLayout from './PrimaryLayout'
import PublicLayout from './PublicLayout'

const LAYOUT_MAP: ObjType = {
  public: PublicLayout,
  primary: PrimaryLayout
}

const layouts = [
  {
    name: 'primary',
    include: [/.*/],
    exclude: [/home[/]?$/]
  }
]

type LayoutConfig = {
  name: string
  include: RegExp[] | undefined
  exclude: RegExp[] | undefined
}

const queryLayout = (layouts: LayoutConfig[], pathname: string) => {
  let result = 'public'

  const isMatch = (regexp: Path) => {
    return regexp instanceof RegExp ? regexp.test(pathname) : pathMatchRegexp(regexp, pathname)
  }

  const pathMatchRegexp = (regexp: Path, pathname: string) => {
    return pathToRegexp(regexp).exec(pathname)
  }

  const isComprise = (regexps: RegExp[]) => {
    let boole = false
    for (const regexp of regexps) {
      if (isMatch(regexp)) {
        boole = true
        break
      }
    }
    return boole
  }

  for (const item of layouts) {
    let include = false
    let exclude = false
    if (item.include) {
      include = isComprise(item.include)
    }
    if (include && item.exclude) {
      exclude = isComprise(item.exclude)
    }
    if (include && !exclude) {
      result = item.name
    }
  }

  return result
}

interface Props extends UmiComponentProps {}

const BaseLayout = (props: Props) => {
  const { children, location } = props
  const Container = LAYOUT_MAP[queryLayout(layouts, location.pathname)]
  return <Container>{children}</Container>
}

export default BaseLayout
