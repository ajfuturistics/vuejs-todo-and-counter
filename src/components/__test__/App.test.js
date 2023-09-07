import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import { createTestingPinia } from "@pinia/testing";

import App from "@/App.vue";

// Import the component you want to stub
// import Navbar from "@/components/Navbar.vue";

// Create a router instance
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      component: App,
    },
  ],
});

describe("App.vue Test", () => {
  it("renders the page", () => {
    // Create a Pinia store
    const pinia = createTestingPinia({
      createSpy: true,
    });

    // render the component with Pinia
    const wrapper = mount(App, {
      global: {
        plugins: [
          pinia.plugin,
          router,
          // Add any other plugins or configurations as needed
        ],
      },
    });

    // check that navbar component is rendered
    expect(wrapper.getComponent({ name: "Navbar" }).exists()).toBeTruthy();
  });
});
