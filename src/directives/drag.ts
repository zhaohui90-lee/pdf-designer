import { h, render, type VNode, type DirectiveBinding } from 'vue'

export const vDrag = {
  beforeMount(el: any, binding: DirectiveBinding, vnode: VNode) {
    el.addEventListener('mousedown', function (event: MouseEvent) {
      const icon = el.querySelector('i')
      if (!icon) return

      const cursorIcon = icon.cloneNode(true) as HTMLElement
      cursorIcon.style.position = 'absolute'
      cursorIcon.style.pointerEvents = 'none'
      cursorIcon.style.zIndex = '1000'

      const moveCursorIcon = (e: MouseEvent) => {
        cursorIcon.style.left = `${e.pageX}px`
        cursorIcon.style.top = `${e.pageY}px`
      }

      const mouseMoveHandler = (e: MouseEvent) => {
        if (!document.body.contains(cursorIcon)) {
          document.body.appendChild(cursorIcon)
        }
        moveCursorIcon(e)
      }

      const mouseUpHandler = (e: MouseEvent) => {
        if (document.body.contains(cursorIcon)) {
          document.body.removeChild(cursorIcon)
        }

        document.removeEventListener('mousemove', mouseMoveHandler)
        document.removeEventListener('mouseup', mouseUpHandler)

        const dropZone = document.querySelector('.editor-view .canvas-view .canvas-edit-area')!
        const rect = dropZone.getBoundingClientRect()

        if (
          e.clientX > rect.left &&
          e.clientX < rect.right &&
          e.clientY > rect.top &&
          e.clientY < rect.bottom
        ) {
          // Render the virtual node
          const container = document.createElement('div')
          dropZone.appendChild(container)

          try {
            const component = h(binding.value)
            console.log(component)

            render(component, container)
          } catch (error) {
            console.error('Error rendering component:', error)
          }
        }
      }

      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', mouseUpHandler)
    })
  }
}
