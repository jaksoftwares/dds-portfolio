// utils/screenshot.ts

export interface ScreenshotResult {
  success: boolean;
  imageUrl?: string;
  error?: string;
}

const projectImageMap: Record<string, string> = {
  autostore: "/autostore.png",
  bagcom: "/bagcom.png",
  carrostore: "/carrostore.png",
  compdock: "/compdock.png",
  comphive: "/comphive.png",
  connectmtaani: "/connectmtaani.png",
  consultancy: "/consultancy.png",
  dit: "/dit.png",
  dovepeakdigital: "/dovepeakdigital.png",
  "email-hub": "/email-hub.png",
  helpicent: "/helpicent.png",
  highrise: "/highrise.png",
  hopekenya: "/hopekenya.png",
  hospital: "/hospital.png",
  "invoice-generator": "/invoice-generator.png",
  invoicepro: "/invoicepro.png",
  jasiri: "/jasiri.png",
  jcrm: "/jcrm.png",
  jkuatfindmyid: "/jkuatfindmyid.png",
  jkuatsocialrobotics: "/jkuatsocialrobotics.png",
  kellianautogarage: "/kellianautogarage.png",
  kidsbeyondlimit: "/kidsbeyondlimit.png",
  lapicure: "/lapicure.png",
  livingspot: "/livingspot.png",
  "payment-gateway": "/payment-gateway.png",
  portfolio: "/portfolio.png",
  smarttrafficai: "/smarttrafficai.png",
  studyroom: "/studyroom.png",
  tripatiteinteriors: "/tripatiteinteriors.png",
  "tyna-marketing": "/tyna-marketing.png",
  university: "/university.png",
  watercent: "/watercent.png",
};

export const captureScreenshot = async (url: string): Promise<ScreenshotResult> => {
  try {
    const domain = new URL(url).hostname.split(".")[0].toLowerCase();

    const imagePath = projectImageMap[domain];

    if (imagePath) {
      return {
        success: true,
        imageUrl: imagePath,
      };
    } else {
      return {
        success: true,
        imageUrl: `/placeholder.png`, // Ensure you have a fallback placeholder image in /public
      };
    }
  } catch (error) {
    console.error("Screenshot capture failed:", error);
    return {
      success: false,
      error: "Invalid URL or local image not found",
      imageUrl: `/error-placeholder.png`, // Optional: add a red error image to /public
    };
  }
};
