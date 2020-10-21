import { h } from 'preact'

const Icon = (props) => {
  const sizeClassName = props.size === 'xl' ? 'font-xl' : null
  const className = `icon ${props.icon} ${sizeClassName}`
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