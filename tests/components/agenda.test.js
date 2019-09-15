import React from "react"
import renderer from "react-test-renderer"
import Agenda from "../../src/components/agenda"
import AgendaConfigFixture from "../__fixtures/AgendaConfig"
import SpeakerFixture from "../__fixtures/Speaker"

describe("Agenda", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Agenda agenda={AgendaConfigFixture} speakers={[SpeakerFixture]}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})