export { state };
const getData = async function () {
  try {
    const raw = await fetch(
      "https://api.jsonbin.io/v3/b/67dc19a88960c979a57548f7",
      {
        method: "GET",
        headers: {
          "X-Master-Key":
            "$2a$10$RTq7evlgiX6ucfpdUv8r8.V2zkSNMxwOgxW//s0u7pHvdnWKBDo9i",
        },
      }
    );
    if (raw.status !== 200) throw new Error(raw.status);
    const data = await raw.json();
    return data.record;
  } catch (error) {
    console.error(error);
  }
};

const state = await getData();
