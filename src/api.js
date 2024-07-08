import axios from "axios";
const url = "http://localhost:4200/products";
export async function getData() {
  return await axios.get(url);
}
export async function deleteData(id) {
  return await axios.delete(`${url}/${id}`);
}
export async function postData(data) {
  return await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function putData(id, data) {
  return await axios.put(url + "/" + id, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// // const url = "http://localhost:4200/products";

// // export async function getData() {
// //   return await fetch(url)
// //     .then((response) => response.json())
// //     .catch((error) => console.error("Error:", error));
// // }

// // export async function deleteData(id) {
// //   return await fetch(`${url}/${id}`, {
// //     method: "DELETE",
// //   })
// //     .then((response) => response.json())
// //     .catch((error) => console.error("Error:", error));
// // }

// // export async function postData(data) {
// //   return await fetch(url, {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify(data),
// //   })
// //     .then((response) => response.json())
// //     .catch((error) => console.error("Error:", error));
// // }

// // export async function putData(id, data) {
// //   return await fetch(`${url}/${id}`, {
// //     method: "PUT",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify(data),
// //   })
// //     .then((response) => response.json())
// //     .catch((error) => console.error("Error:", error));
// // }
// const url = "http://localhost:4200/products";

// export async function getData() {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const responseData = await response.json();
//     if (!responseData || !responseData.data) {
//       throw new Error("No data returned from API");
//     }
//     return responseData.data;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// export async function deleteData(id) {
//   try {
//     const response = await fetch(`${url}/${id}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const responseData = await response.json();
//     if (!responseData || !responseData.data) {
//       throw new Error("No data returned from API");
//     }
//     return responseData.data;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// export async function postData(data) {
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const responseData = await response.json();
//     if (!responseData || !responseData.data) {
//       throw new Error("No data returned from API");
//     }
//     return responseData.data;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// export async function putData(id, data) {
//   try {
//     const response = await fetch(`${url}/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const responseData = await response.json();
//     if (!responseData || !responseData.data) {
//       throw new Error("No data returned from API");
//     }
//     return responseData.data;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
