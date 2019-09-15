import React from "react"
import renderer from "react-test-renderer"
import {PureLocationMap as LocationMap} from "../../src/components/locationMap"
import LocationConfigFixture from "../__fixtures/LocationConfig"

describe("LocationMap", () => {
  it("renders correctly", () => {
    const data = {
        site: {
          siteMetadata: {
            "location": LocationConfigFixture
          },
        },
      }
    const tree = renderer.create(<LocationMap data={data}/>).toJSON()
    expect(tree).toMatchSnapshot()
  });
})