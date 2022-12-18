export default () => {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true
  } catch (error) {
    return false;
  }
}
