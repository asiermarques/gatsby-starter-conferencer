import React from "react"
import renderer from "react-test-renderer"
import {PureAgenda as Agenda} from "../../src/components/agenda"
import AgendaConfigFixture from "../__fixtures/AgendaConfig"
import SpeakerFixture from "../__fixtures/Speaker"

describe("Sponsors", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Agenda agenda={AgendaConfigFixture} speakers={[SpeakerFixture]}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})