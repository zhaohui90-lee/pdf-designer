import { createApp, h, type VNode } from 'vue'
import ElementPlus from 'element-plus'

interface Binding {
  arg: string
  modifiers: object
  value: any
  oldValue: any
}

export const vDrag = {
  beforeMount(el: any, binding: Binding, vnode: VNode) {
    el.addEventListener('mousedown', function (event: MouseEvent) {
      const icon = el.querySelector('i')
      if (!icon) return

      const cursorIcon = icon.cloneNode(true)

      const moveCursorIcon = (e: MouseEvent) => {
        cursorIcon.style.left = `${e.pageX}px`
        cursorIcon.style.top = `${e.pageY}px`
      }

      const mouseMoveHandler = (e: MouseEvent) => {
        cursorIcon.style.position = 'absolute'
        cursorIcon.style.pointerEvents = 'none'
        cursorIcon.style.zIndex = '1000'
        document.body.appendChild(cursorIcon)
        moveCursorIcon(e)
      }

      const mouseUpHandler = (e: MouseEvent) => {
        if (document.body.contains(cursorIcon)) {
          document.body.removeChild(cursorIcon)
        }

        document.removeEventListener('mousemove', mouseMoveHandler)
        document.removeEventListener('mouseup', mouseUpHandler)

        const dropZone = document.querySelector('.editor-view .canvas-view')!
        const rect = dropZone.getBoundingClientRect()!

        if (
          e.clientX > rect.left &&
          e.clientX < rect.right &&
          e.clientY > rect.top &&
          e.clientY < rect.bottom
        ) {
          // 这里渲染虚拟节点

          const container = document.createElement('div')
          const component = h(binding.value)

          createApp({
            render: () => component
          })
            .use(ElementPlus)
            .mount(container)

          dropZone.appendChild(container)
        }
      }

      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', mouseUpHandler)
    })
  }
}
