import Vuetify from 'vuetify'

import App from "@/App.vue";

import { mount, createLocalVue } from "@vue/test-utils";




describe("App.vue", () => {
  let vuetify;
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue()
    vuetify = new Vuetify()
    localVue.use(vuetify)

    wrapper = mount(App, {
      localVue
    })
  })

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should render a vue instance', () => {
    expect(mount(App).isVueInstance()).toBe(true);
  })
  it('should have footer'), () => {
      expect(wrapper.contains("footer")).toBe(true);
  }
});
