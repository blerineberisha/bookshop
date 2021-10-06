import { mount } from "@cypress/react";
import React from "react";
import AllBooks from "./AllBooks";
import Navigation from "./Navigation";

beforeEach(() => {
  mount(
      <AllBooks />
  );
});

it("woohoo", () => {
  cy.get();
});
