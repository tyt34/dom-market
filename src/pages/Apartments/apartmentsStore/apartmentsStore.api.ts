const API = {
  GET_DATA: "/url",
  GET_DATA_B: () => {
    "/url";
  },
};

export const getName = async (params: any) => {
  try {
    const response = await makeApiRequest<any, any, any>({
      method: "get",
      url: API.GET_DATA,
      params: params as any,
    });
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
