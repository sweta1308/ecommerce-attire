import { authReducer } from "./authReducer";

describe("address testing", () => {
  test("should set loading", () => {
    const initialState = { isAuthLoading: false };

    const action = {
      type: "set_loading",
      payload: true,
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual({ isAuthLoading: true });
  });

  test("should get user", () => {
    const initialState = { isAuthLoading: false, user: {} };

    const action = {
      type: "set_user",
      payload: {
        _id: "2a1a993a-de39-4b4a-a2cb-6b874b16a0c1",
        firstName: "Adarsh",
        lastName: "Balika",
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
        createdAt: "1997-07-16T19:20:30.45+01:00",
        updatedAt: "1997-07-16T19:20:30.45+01:00",
      },
    };

    const state = authReducer(initialState, action);

    const expectedState = {
      isAuthLoading: false,
      user: {
        _id: "2a1a993a-de39-4b4a-a2cb-6b874b16a0c1",
        firstName: "Adarsh",
        lastName: "Balika",
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
        createdAt: "1997-07-16T19:20:30.45+01:00",
        updatedAt: "1997-07-16T19:20:30.45+01:00",
      },
    };

    expect(state).toEqual(expectedState);
  });
});
