import React from "react"
import {
  storyBuilder,
  KnobsInterface,
  Stories,
} from "../../../../utils/story-builder"
import mockCart from "../../../../__mocks__/api/cart.json"
import mockError from "../../../../__mocks__/api/cart-error.json"
import Layout, { Props } from "./Layout"

const children: string = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dictum augue. Etiam egestas et metus sed blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris interdum tincidunt lacus et eleifend. Fusce convallis magna sit amet elit finibus pharetra. Vivamus dapibus sit amet nulla ut eleifend. Integer elementum, quam a convallis malesuada, ante eros maximus sapien, ac fringilla massa sapien non risus. Nunc eget vestibulum nunc. Phasellus mattis, erat a mattis ultrices, nulla erat laoreet quam, non eleifend dui diam quis elit. Donec sagittis vestibulum turpis sit amet scelerisque. Curabitur cursus et nisl eget mollis. Pellentesque tincidunt pretium felis non tempor. Ut tempus porttitor augue id elementum. Vestibulum finibus tempus neque, vel sagittis metus pellentesque sit amet. Curabitur ut sapien at ante maximus sollicitudin. Suspendisse potenti.
Pellentesque facilisis pharetra lorem nec tincidunt. Nunc et sagittis mi, eget volutpat nisi. Sed et nisi vitae augue hendrerit faucibus sit amet vel est. Integer accumsan mi bibendum finibus feugiat. Aenean ac interdum ipsum. Maecenas vitae tempor odio, ut euismod neque. Mauris ullamcorper suscipit magna a fringilla. Nulla et neque tincidunt, efficitur neque et, suscipit ligula. Aliquam non lorem a libero euismod suscipit. Ut faucibus suscipit dignissim. Suspendisse tincidunt facilisis commodo. Nunc nulla nunc, ornare id nulla in, condimentum auctor neque.
Vivamus at diam euismod, aliquet augue in, ornare diam. Phasellus posuere justo eu purus scelerisque eleifend. Proin eu ipsum volutpat, porta sapien quis, lobortis orci. Sed aliquam in velit at bibendum. In scelerisque, urna eget sollicitudin mollis, eros quam tristique mauris, nec ultricies libero orci vitae diam. Duis dictum pretium massa vel tincidunt. Quisque id semper sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce purus enim, hendrerit eget ullamcorper nec, condimentum quis libero. In porta sodales orci, et vestibulum est congue quis. Vestibulum quis ipsum sapien.
Curabitur nec tincidunt tortor. Nunc quis ante efficitur, laoreet lectus ut, faucibus libero. Sed commodo magna non molestie semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent venenatis dignissim libero vitae placerat. Curabitur mollis nibh id odio fringilla suscipit. Etiam aliquam nibh nibh, eget venenatis dolor laoreet id. Quisque erat dolor, malesuada a justo et, tempor vestibulum enim. Phasellus id nisl vitae metus condimentum sagittis. Integer semper interdum mattis. Sed vulputate leo sit amet arcu dignissim tempor non interdum massa. Curabitur vitae aliquet tortor, et sagittis mauris. Integer pharetra erat nec ex bibendum luctus. Suspendisse nulla dui, venenatis eu massa id, porta suscipit tellus. Pellentesque quis enim vehicula, eleifend lacus a, bibendum justo. Phasellus tristique metus eu lorem luctus, ac sollicitudin ante accumsan.
Suspendisse malesuada ornare dui in varius. Sed vel ullamcorper nunc, at porttitor eros. Nam et nisi vitae dolor luctus placerat non in arcu. Ut finibus condimentum turpis, nec consequat lacus tempus id. Sed vitae justo non nulla aliquam eleifend. In ut efficitur diam. Nam pulvinar mauris ullamcorper pulvinar porttitor. Vestibulum consectetur porttitor aliquet. Vestibulum tellus ante, maximus at orci nec, blandit fringilla elit.
`

const htmlChildren: React.ReactNode = (
  <div>
    <h1>HTML Children</h1>
    <p>{children}</p>
  </div>
)

const sampleProps: Props = {
  title: "Sample Site Title",
  cart: mockCart,
  children,
}
const story = (knobProps: Props) => (
  knobs: KnobsInterface,
  props: Props = knobProps
) => (
  <Layout
    title={knobs.text("title", props.title || "")}
    cart={knobs.object("cart", props.cart)}
  >
    {["string", "undefined"].includes(typeof props.children)
      ? knobs.text("children", props.children as string)
      : knobs.object("children", props.children)}
  </Layout>
)

export const stories: Stories = {
  sample: story({
    ...sampleProps,
  }),
  "no title": story({
    ...sampleProps,
    title: undefined,
  }),
  "no children": story({
    ...sampleProps,
    children: undefined,
  }),
  "html children": story({
    ...sampleProps,
    children: htmlChildren,
  }),
  "empty cart": story({
    ...sampleProps,
    cart: { items: [], total: "$0.00", total_numeric: 0 },
  }),
  fetching: story({
    ...sampleProps,
    fetching: true,
  }),
  error: story({
    ...sampleProps,
    error: mockError,
  }),
}

storyBuilder(stories, "layouts/default/layout")
