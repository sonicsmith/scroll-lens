const url = import.meta.env.VITE_SCROLLSCAN_ENDPOINT;
const apiKey = import.meta.env.VITE_SCROLLSCAN_API_KEY;

export const getBlockData = async () => {
  const timestamp = Math.floor(Date.now() / 1000);
  return fetch(
    `${url}?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=${apiKey}`
  ).then((res) => res.json());
};
