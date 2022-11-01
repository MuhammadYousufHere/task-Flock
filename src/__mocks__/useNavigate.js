// const mockedNavigation = jest.fn();

// export default {
//   get: jest.mock("@react-navigation/native", () => {
//     return {
//       useNavigation: () => ({
//         navigate: mockedNavigation,
//       }),
//     };
//   }),
// };

// beforeEach(() => {
//   mockedNavigation.mockClear();
// });
import * as router from "react-router-dom";

const navigate = jest.fn();
export default {
  get: beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  }),
};
