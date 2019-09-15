import React from "react"
import renderer from "react-test-renderer"
import Sponsors from "../../src/components/sponsors"
import {WITH_BLOCK_TITLES as SponsorsConfigFixture, WITHOUT_BLOCK_TITLES as SponsorsWOTitleConfigFixture} from "../__fixtures/SponsorsConfig"

describe("Sponsors", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Sponsors sponsorBlocks={SponsorsConfigFixture}/>).toJSON()
    expect(tree).toMatchSnapshot()
  });
  it("renders correctly without any sponsor", () => {
    const tree = renderer.create(<Sponsors sponsorBlocks={[]}/>).toJSON()
    expect(tree).toMatchSnapshot()
  });
  it("renders correctly without sponsor block titles", () => {
    const tree = renderer.create(<Sponsors sponsorBlocks={SponsorsWOTitleConfigFixture}/>).toJSON()
    expect(tree).toMatchSnapshot()
  });
})