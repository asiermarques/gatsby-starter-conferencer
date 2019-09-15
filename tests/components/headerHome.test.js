import React from "react"
import renderer from "react-test-renderer"
import Header from "../../src/components/headerHome"
import HeaderConfigFixture from "../__fixtures/HeaderConfig"

describe("HeaderHome", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header  data={HeaderConfigFixture}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})