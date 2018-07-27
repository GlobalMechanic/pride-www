import { EditableItem, DropHandlers } from '../item-base'

/******************************************************************************/
// DropZone
/******************************************************************************/

class MediaDropHandlers extends DropHandlers {

  files (record) {

    const { item } = this
    const { showcase } = this.item

    item.setProp([ 'file', 'id' ], record.id)

    showcase.push()
  }

}

/******************************************************************************/
// Main
/******************************************************************************/

class Media extends EditableItem {

  static DropHandlers = MediaDropHandlers

  get defaultProps () {
    return {

      size: {
        width: 8,
        height: 8
      },

      file: {
        id: null
      },

      player: {
        modal: false,
        autoplay: false,
        loop: false,
        controls: true,
        muted: false,
        info: false
      },

      preview: {
        size: 'contain',
        type: 'auto'
      },

      navigation: {
        link: {
          type: 'none',
          url: null,
          showcase: null
        }
      },

      margin: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
    }
  }

  sanitizeProps (input) {
    const sanitized = super.sanitizeProps(input)
    const { size } = sanitized

    for (const key in size)
      if (size[key] === 'fit')
        size[key] = 'fill'

    return sanitized
  }

  canHaveChild () {
    return false
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Media
