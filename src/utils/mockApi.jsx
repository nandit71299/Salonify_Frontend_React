// utils/mockApi.js
export function mockApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
      }); // Simulate successful API response
    }, 2000); // 2-second delay
  });
}
