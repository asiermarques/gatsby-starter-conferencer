import React from "react"
import renderer from "react-test-renderer"
import {PureHeader as Header} from "../../src/components/headerInner"
import HeaderConfigFixture from "../__fixtures/HeaderConfig"

describe("HeaderInner", () => {
  it("renders correctly", () => {
    const data = {
        site: {
          siteMetadata: HeaderConfigFixture,
        },
      }
    const tree = renderer.create(<Header  data={data}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})