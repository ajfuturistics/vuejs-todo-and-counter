import { mount } from "@vue/test-utils";
import CounterComponent from "@/components/Counter.vue";
import { describe, expect, it } from "vitest";

describe("Counter.vue", () => {
  it("renders the Hello world heading", () => {
    const wrapper = mount(CounterComponent);

    expect(wrapper.text()).toContain("Hello World");
  });

  it("renders the component with count equal to 0", () => {
    const wrapper = mount(CounterComponent);

    // Assert that the component contains the initial text
    expect(wrapper.text()).toContain("Counter is zero");
  });

  it("increments the count when the increment button is clicked", async () => {
    const wrapper = mount(CounterComponent);

    // Click the increment button
    await wrapper.find("button#increment").trigger("click");

    // Assert that the count has increased
    expect(wrapper.text()).toContain("Counter: 1");
  });

  it("decrements the count when the decrement button is clicked", async () => {
    const wrapper = mount(CounterComponent);

    // Click the increment button twice
    await wrapper.find("button#increment").trigger("click");
    await wrapper.find("button#increment").trigger("click");

    // Click the decrement button
    await wrapper.find("button#decrement").trigger("click");

    // Assert that the count has decreased
    expect(wrapper.text()).toContain("Counter: 1");
  });

  it("resets the count when the reset button is clicked", async () => {
    const wrapper = mount(CounterComponent);

    // Click the increment button
    await wrapper.find("button#increment").trigger("click");

    // Click the reset button
    await wrapper.find("button#reset").trigger("click");

    // Assert that the count is back to 0
    expect(wrapper.text()).toContain("Counter is zero");
  });
});
