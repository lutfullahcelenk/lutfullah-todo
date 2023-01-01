/* eslint-disable no-undef */
import { Provider } from "react-redux";
import { store } from "../../src/app/store";
import TodoItem from "../../src/components/TodoItem";
import "../../src/components/TodoItem/style.css";

describe("Todo Item testing", () => {
	beforeEach(() => {
		cy.mount(
			<Provider store={store}>
				<TodoItem todo={{ title: "Test Lutfullah", completed: true }} />
			</Provider>
		);
	});

	it("Todo title test", () => {
		cy.get(".todo-text")
			.should("be.visible")
			.contains("Lutfullah")
			.should("have.css", "color", "rgb(250, 250, 250)")
			.should("have.css", "border-radius", "0px");
	});

	it("Trash button test", () => {
		cy.get(".delete").should("be.visible").should("have.css", "cursor", "pointer");
	});

	it("Check box test", () => {
		cy.get(".check-box")
			.should("be.visible")
			.should("have.css", "background-color", "rgba(0, 0, 0, 0)")
			.should("have.css", "border", "1px solid rgb(128, 128, 128)");
	});

	it("Check box svg test", () => {
		cy.get(".check-box > svg").should("be.visible").should("have.css", "background-color", "rgba(0, 0, 0, 0)");
	});
});
