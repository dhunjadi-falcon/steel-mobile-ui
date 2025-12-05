import HomeScreen from "@/app/(protected)";
import { render } from "@testing-library/react-native";

describe("<HomeScreen />", () => {
  test("Text renders correctly on HomeScreen", () => {
    const { getByText } = render(<HomeScreen />);

    getByText("Home");
  });
});
