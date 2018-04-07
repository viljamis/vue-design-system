import { createLocalVue, mount } from "@vue/test-utils"
import ExampleComponent from "@/ExampleComponent"
import statusLabels from "docs/utils/statusLabels"

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.mixin(statusLabels)

const MockComponent = {
  name: "example",
  status: "prototype",
  template: "<div id='example-container'><label class='status original'>undefined</label></div>",
}

const wrapper = mount(ExampleComponent, {
  attachToDocument: true,
  localVue,
})

describe("statusLabels.js", () => {
  it("should render status labels", () => {
    expect(wrapper.contains("label")).toBe(true)
  })

  it("should remove existing labels", () => {
    const wrapper2 = mount(MockComponent, {
      attachToDocument: true,
      localVue,
    })
    // Wait that statusLabels is finished
    setTimeout(() => {
      const child = wrapper2.find(".original")
      expect(child.exists()).toBe(false)
    }, 0)
  })
})