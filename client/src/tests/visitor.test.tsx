import { expect, describe, it } from "@jest/globals";
import React from "react";
import { configure, shallow } from "enzyme";
import { spy } from "sinon";
import Adapter from "enzyme-adapter-react-16";
import VisitorPage from "../components/VisitorPage/VisitorPage";

configure({ adapter: new Adapter() });

describe("VisitorPage Component", () => {
  const openModal = spy();
  const componentWrapper = shallow(
    <VisitorPage openModal={openModal} setSuspendedAccountModalStatus={openModal} />
  );
  it("should have a container with 'content' class", () => {
    expect(componentWrapper.find(".content")).toHaveLength(1);
  });

  it("should handle click event on button click", () => {
    [0, 1].forEach((button) =>
      componentWrapper.find("button").at(button).simulate("click")
    );
    expect(openModal).toHaveProperty("callCount", 2);
  });
});
