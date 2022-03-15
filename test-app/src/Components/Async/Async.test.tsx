import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Async from "./Async";
import * as data from './Async';

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json([{ id: "p0101", title: "Awesome title" }]));
  })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("Async Component", () => {

    test("renders postswhith jest mocking",async () => {
        const mock = jest.spyOn(data, "fetchPost").mockResolvedValue([{id: "p001", title : "Awesome Course"}])
        render(<Async />)
        const listItems = await waitFor(() => screen.findAllByRole("listitem"))
        expect(listItems).not.toHaveLength(0)
        mock.mockRestore();
    })

    test("renders posts when api success", async () => {
        render(<Async />)
        const listElements = await screen.findAllByRole("listitem");
        expect(listElements).toHaveLength(1);
    })

  test("renders post data after fetching the API", async () => {
    render(<Async />);
    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).not.toHaveLength(0);
  });
});
