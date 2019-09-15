import React from "react"
import renderer from "react-test-renderer"

import Organizers from "../../src/components/organizers"
import OrganizersConfigFixture from "../__fixtures/OrganizersConfig"

describe("SpeakerCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Organizers items={OrganizersConfigFixture}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})