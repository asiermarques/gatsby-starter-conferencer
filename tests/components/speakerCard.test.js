import React from "react"
import renderer from "react-test-renderer"

import SpeakerCard from "../../src/components/speakerCard"
import SpeakerFixture from "../fixtures/Speaker"

describe("SpeakerCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SpeakerCard speaker={SpeakerFixture}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})