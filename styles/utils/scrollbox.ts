// 가로 스크롤
import { css } from "@emotion/react";

export function scrollBox() {
  return css`
    white-space: nowrap;
    overflow-x: auto;
    // 스크롤바 숨김
    &::-webkit-scrollbar {
      display: none;
    }
  `;
}
