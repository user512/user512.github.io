import { h } from 'preact'

const Icon = (props) => {
  const className = `icon ${props.icon}`
  const link = props.link

  return(
    <span>
      { link ?
        <a href={ link } target="_blank" class={ className }></a> :
        <span class={ className }></span>
      }
    </span>
  )
}

export default Icon