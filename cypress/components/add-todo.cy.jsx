/* eslint-disable no-undef */
import { Provider } from "react-redux";
import { store } from "../../src/app/store";
import AddTodo from "../../src/components/AddTodo";
import "../../src/components/AddTodo/style.css";

describe("Add Todo testing", () => {
	beforeEach(() => {
		cy.mount(
			<Provider store={store}>
				<AddTodo />
			</Provider>
		);
	});

	it("Component test", () => {
		cy.get(".add-todo").should("be.visible");
	});

	it("Input test", () => {
		cy.get(".add-todo-input")
			.should("be.visible")
			.type("Lutfullah")
			.should("have.css", "font-size", "20px")
			.should("have.css", "color", "rgb(0, 0, 0)")
			.should("have.css", "background-color", "rgba(0, 0, 0, 0)");
	});

	it("Button test", () => {
		cy.get(".add-button")
			.should("be.visible")
			.contains("Add")
			.should("have.css", "font-size", "16px")
			.should("have.css", "color", "rgb(255, 255, 255)")
			.should("have.css", "padding", "4px 16px");
	});

	it("Adding Todo test", () => {
		cy.get(".add-todo-input")
			.should("be.visible")
			.type("Lutfullah is making some tests")
			.should("have.css", "font-size", "20px");
		cy.get(".add-button")
			.should("be.visible")
			.contains("Add")
			.should("have.css", "font-size", "16px")
			.should("have.css", "color", "rgb(255, 255, 255)")
			.should("have.css", "padding", "4px 16px")
			.click();
	});
});
