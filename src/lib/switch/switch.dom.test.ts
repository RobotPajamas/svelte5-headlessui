import { render, screen } from "@testing-library/svelte";
import { type SvelteComponent } from "svelte";
import Switch from "./switch.svelte";

describe("Safe guards", () => {
  it("should be possible to render a Switch without crashing", () => {
    render(Switch, { checked: false, onChange: console.log });
  });
});

function sveltify(input: string): Promise<typeof SvelteComponent> {
  throw new Error("Function not implemented.");
}

function sveltify2(input: TemplateStringsArray): Promise<typeof SvelteComponent> {
  throw new Error("Function not implemented.");
}

describe("Rendering", () => {
  it("should be possible to render an (on) Switch using a render prop (snippet)", async () => {
    let component = await sveltify(`
    <h1>A test</h1>
    <h2>Another test</h2>
    `);

    let component2 = await sveltify2`<h1>A test</h1>`
    render(component);
    render(component2);
    screen.debug();
  });
});
