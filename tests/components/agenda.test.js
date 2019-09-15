import React from "react"
import renderer from "react-test-renderer"
import {PureAgenda as Agenda} from "../../src/components/agenda"
import AgendaConfigFixture from "../__fixtures/AgendaConfig"
import SpeakerFixture from "../__fixtures/Speaker"

describe("Sponsors", () => {
  it("renders correctly", () => {
    const data = {
        site: {
          siteMetadata: {
            "agenda": AgendaConfigFixture,
            "speakers": [SpeakerFixture]
          },
        },
      }
    const tree = renderer.create(<Agenda data={data}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})