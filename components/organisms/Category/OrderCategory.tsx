import React, { useState, useCallback } from "react";
import { Row } from "../../atoms";
import { OrderContainer, OrderButton } from "./style";
import Link from "next/link";

interface OrderCategoryProps {
  items: string[];
}

export const OrderCategory: React.FC<OrderCategoryProps> = ({ items }) => {
  const [foucsOrderId, setFocusOrderId] = useState(0);
  const changeFocus = useCallback((id: number) => {
    setFocusOrderId(id);
  }, []);

  return (
    <>
      <OrderContainer>
        <Row justifyContent={"center"} height={"40px"} padding={"4px"}>
          {items.map((item, index) => (
            <React.Fragment key={`order-item-${index}`}>
              <Link href="/social">
                <a>
                  <OrderButton
                    className={foucsOrderId === index ? "on" : ""}
                    onClick={() => changeFocus(index)}
                  >
                    {item}
                  </OrderButton>
                </a>
              </Link>
            </React.Fragment>
          ))}
        </Row>
      </OrderContainer>
    </>
  );
};
