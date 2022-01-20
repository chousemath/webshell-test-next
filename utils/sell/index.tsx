import { useRouter } from "next/router";

/* Sell 페이지 내에서 현재 Url 가져오는 Function */
export const getCurrentHref = (): string => {
  const router = useRouter();

  const { brand, wear, category } = router.query;
  if (brand && brand === "brand") {
    return `/sell/brand`;
  }
  if (brand && wear === "wear") {
    return `/sell/${brand}`;
  }
  if (brand && wear && category === "category") {
    return `/sell/${brand}/${wear}`;
  }
  return `/sell/${brand}/${wear}/${category}`;
};
