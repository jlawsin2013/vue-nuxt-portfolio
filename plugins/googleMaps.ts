import { Loader } from "@googlemaps/js-api-loader";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  return {
    provide: {
      loader: new Loader({
        apiKey: config.app.googleMapKey,
        version: "weekly",
      }),
    },
  };
});
