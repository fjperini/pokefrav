import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";
import logoHeader from "../../../../assets/pokefrav.png";

describe("<Logo />", () => {
  it("renders an image", () => {
    const logo = shallow(<Header />);

    expect(logo.find("img").prop("src")).toEqual(logoHeader);
  });
});
