import { expect, describe, it } from "@jest/globals";
import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VisitorPage from "../components/VisitorPage/VisitorPage";

configure({ adapter: new Adapter() });

describe("VisitorPage Component", () => {
  const componentWrapper = shallow(<VisitorPage openModal={() => {}} />);
  it("should have a container with 'content' class", () => {
    expect(componentWrapper.hasClass(".content")).toEqual(true);
  });
});
