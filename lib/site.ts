export const PANITIA_FORM_URL = "https://forms.gle/Nt1ehuB7dHEGAkGM9";

export const WHATSAPP_AYU = "+6285956682525";
export const WHATSAPP_DIKI = "+6287700571658";

export function whatsappLink(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const GRAND_FINAL_TARGET = new Date(
  "2027-01-17T00:00:00+08:00"
).getTime();
