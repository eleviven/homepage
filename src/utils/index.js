export const renderComponent = (component) => {
  switch (typeof component) {
    case "function":
      return component();
    default:
      return component;
  }
};
