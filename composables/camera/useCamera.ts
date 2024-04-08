import { ref } from "vue";

export const useCamera = () => {
  const video = ref<HTMLVideoElement | null>(null);
  const canvas = ref<HTMLCanvasElement | null>(null);
  const draw = ref<CanvasRenderingContext2D | null>(null);
  const img = ref<string>("");

  const mediaSource = ref<MediaDeviceInfo[]>([]);

  const errorHandler = (error: any) => {
    console.error(error);
  };

  const drawCanvas = (): void => {
    if (!video.value || !canvas.value || !draw.value) return;

    draw.value.drawImage(
      video.value,
      0,
      0,
      canvas.value.width,
      canvas.value.height,
    );

    // Draw camera guides
    drawVisualGuides(draw.value);

    /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) */
    requestAnimationFrame(drawCanvas);
  };

  const drawVisualGuides = (draw: CanvasRenderingContext2D): void => {
    if (!canvas.value) return;

    draw.beginPath();
    draw.rect(
      50,
      20,
      canvas.value.width - 50 * 2,
      canvas.value.height - 20 * 2,
    );
    draw.strokeStyle = "green";
    draw.lineWidth = 5;
    draw.stroke();
  };

  const getMediaDevices = async (): Promise<void> => {
    await navigator.mediaDevices.enumerateDevices().then((devices) => {
      devices.forEach((device) => {
        if (device.kind === "videoinput") {
          mediaSource.value.push(device);
        }
      });
    });
  };

  const setVideoMedia = async (): Promise<void> => {
    await navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          deviceId: mediaSource.value[0].deviceId,
          // Setting is done through .env file
          // For development & testing, use "user" (front camera)
          // For production, use "environment" (rear camera)
          facingMode: { exact: "user" },
          // Minimum requirement: 720p
          // Ideal requirement: 1080p
          // Maximum requirement: 4k
          width: { min: 1280, max: 3840, ideal: 1920 },
          height: { min: 720, max: 2160, ideal: 1080 },
          frameRate: { min: 15, max: 60, ideal: 30 },
        },
      })
      .then((stream) => {
        if (!video.value) return;

        video.value.srcObject = stream;
        video.value.play();

        /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) */
        requestAnimationFrame(drawCanvas);
      })
      .catch(errorHandler);
  };

  const takePhoto = (): void => {
    if (!video.value || !canvas.value || !draw.value) return;

    canvas.value.toBlob((blob) => {
      if (!blob) {
        console.error("Error creating blob");
        return;
      }

      const url = URL.createObjectURL(blob);
      img.value = url;
    }, "image/png");
  };

  const deleteImg = (): void => {
    img.value = "";
  };

  const download = computed(() => {
    if (!canvas.value) {
      return {
        href: "",
        fileName: "",
      };
    }

    const dataUrl = canvas.value.toDataURL("image/png");
    return {
      href: dataUrl,
      fileName: "personal.png",
    };
  });

  const openCamera = () => {
    if (!navigator.mediaDevices) {
      console.log(
        "Media Capture and Stream API is not supported on this browser",
      );
      return;
    }

    if (!canvas.value) return;

    canvas.value.width = (
      document.getElementById("canvasEl") as HTMLDivElement
    ).offsetWidth;
    canvas.value.height = (
      document.getElementById("canvasEl") as HTMLDivElement
    ).offsetHeight;

    // Create drawing context on the canvas
    draw.value = canvas.value.getContext("2d");

    // Set-up video input
    getMediaDevices().then(setVideoMedia).catch(errorHandler);
  };

  return {
    canvas,
    video,
    img,
    deleteImg,
    takePhoto,
    download,
    openCamera,
  };
};
