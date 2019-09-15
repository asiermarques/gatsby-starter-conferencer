import React from "react"
import renderer from "react-test-renderer"
import {PureSponsors as Sponsors} from "../../src/components/sponsors"
import SponsorsConfigFixture from "../__fixtures/SponsorsConfig"

describe("Sponsors", () => {
  it("renders correctly", () => {
    const data = {
        site: {
          siteMetadata: SponsorsConfigFixture,
        },
      }
    const tree = renderer.create(<Sponsors data={data}/>).toJSON()
    expect(tree).toMatchSnapshot()
  });
  it("renders correctly without any sponsor", () => {
    const data = {
        site: {
          siteMetadata: {"sponsor_blocks": []},
        },
      }
    const tree = renderer.create(<Sponsors data={data}/>).toJSON()
    expect(tree).toMatchSnapshot()
  });
})