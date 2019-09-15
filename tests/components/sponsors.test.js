import React from "react"
import renderer from "react-test-renderer"
import {PureSponsors as Sponsors} from "../../src/components/sponsors"
import {WITH_BLOCK_TITLES as SponsorsConfigFixture, WITHOUT_BLOCK_TITLES as SponsorsWOTitleConfigFixture} from "../__fixtures/SponsorsConfig"

describe("Sponsors", () => {
  it("renders correctly", () => {
    const data = {
        site: {
          siteMetadata: {"sponsor_blocks": SponsorsConfigFixture},
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
  it("renders correctly without sponsor block titles", () => {
    const data = {
        site: {
          siteMetadata: {"sponsor_blocks": SponsorsWOTitleConfigFixture},
        },
      }
    const tree = renderer.create(<Sponsors data={data}/>).toJSON()
    expect(tree).toMatchSnapshot()
  });
})