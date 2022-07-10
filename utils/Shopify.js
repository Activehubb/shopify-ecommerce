import Client from "shopify-buy/index.umd";

let client = Client.buildClient({
  domain: "saboor100.myshopify.com",
  storefrontAccessToken: "33d682fea98b68edeb389fbf0c3deead",
});

export default client;
