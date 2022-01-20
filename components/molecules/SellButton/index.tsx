import Image from "next/image";
import { ISellButtonProps } from "../../../interfaces/IElements";
import { ButtonBox, LeftImageBox, RightImageBox } from "./style";
import { SellInner } from "../../molecules";
import { useState } from "react";
import { useRouter } from "next/router";
import { getCurrentHref } from "../../../utils/sell";
import Link from "next/link";

export const SellButton: React.FC<ISellButtonProps> = ({
  type,
  children = "Womenswear",
  isRightBtn = false,
  isLeftBtn = false,
  innerDatas,
  _onClick,
}) => {
  const [onStatus, setOnStatus] = useState(false);
  const router = useRouter();
  const toggleStatus = () => {
    onStatus ? setOnStatus(false) : setOnStatus(true);
  };
  const currentHref = getCurrentHref();

  return (
    <>
      <ButtonBox onClick={_onClick ? _onClick : toggleStatus}>
        {isLeftBtn && (
          <LeftImageBox onClick={() => router.back()}>
            <Image
              src="/images/down-icon.png"
              width="20px"
              height="20px"
              objectFit="cover"
              alt="left-icon"
              priority
            />
          </LeftImageBox>
        )}
        <span>{children}</span>
        {isRightBtn && (
          <RightImageBox>
            <Image
              src={onStatus ? "/images/down-icon.png" : "/images/next-icon.png"}
              width="20px"
              height="20px"
              objectFit="cover"
              alt="right-icon"
              priority
            />
          </RightImageBox>
        )}
      </ButtonBox>
      {isRightBtn &&
        onStatus &&
        innerDatas &&
        innerDatas.map((value, index) => {
          return (
            <Link
              href={`${currentHref}/${value.children}/models`}
              key={`${value.children}-${index}-${value.id}`}
            >
              <a>
                <SellInner>{value.children}</SellInner>
              </a>
            </Link>
          );
        })}
    </>
  );
};
