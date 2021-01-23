export const stopSpinner = (isLoading) => {
  return {
    type: "SET_SPINNER_STOP",
    payload: isLoading,
  };
};
