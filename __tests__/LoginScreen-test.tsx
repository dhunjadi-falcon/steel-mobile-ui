import LoginScreen from "@/app/login";
import { render } from "@testing-library/react-native";

describe("<LoginScreen />", () => {
  test("TexsInputs render", () => {
    const { getAllByRole, getByRole } = render(<LoginScreen />);

    const textInputs = getAllByRole("text");
    const button = getByRole("button");

    expect(textInputs).toHaveLength(2);
    expect(button).not.toBeUndefined();
  });
});
