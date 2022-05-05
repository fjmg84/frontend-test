import { login, logout } from "../redux/actions/auth";

describe("resolve login and logout actions", () => {
  test("return object type {type: 'login/login', payload: {usernamme: 'foo', avatar: 'ok'}}", () => {
    expect(login("fjmg84")).toEqual({
      type: "login/login",
      payload: { username: "fjmg84", avatar: "ok" },
    });
  });

  test("return object type {}", () => {
    expect(logout()).toEqual({
      type: "logout",
      payload: { username: "", avatar: "" },
    });
  });
});
