import React from "react";
import { shallow } from "enzyme";

import Error from "./Error";
import PageNotFound from "../../../assets/PageNotFound.png";

describe("<Logo />", () => {
  it("renders an image", () => {
    const logo = shallow(<Error />);

    expect(logo.find("img").prop("src")).toEqual(PageNotFound);
  });
});
