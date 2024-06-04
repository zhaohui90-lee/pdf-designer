import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

// define the template
interface Template {
  id: number
  name: string
}

// define the templateStore
interface templateStore {
  templates: Ref<Template[]>
  addTemplate: (templateName: string, templateId: number) => void
  removeTemplate: (templateId: number) => void
}

export const useTemplateStore = defineStore('templateStore', (): templateStore => {
  const templates: Ref<Template[]> = ref([])

  function addTemplate(templateName: string, templateId: number) {
    templates.value.push({
      id: templateId,
      name: templateName
    })
  }

  function removeTemplate(templateId: number) {
    templates.value = templates.value.filter((template) => template.id != templateId)
  }
  return {
    templates,
    addTemplate,
    removeTemplate
  }
})
