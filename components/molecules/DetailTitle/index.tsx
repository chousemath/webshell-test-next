import { TitleBox, UploadButton } from "./style";
import { IDetailTitleProps } from "../../../interfaces/IElements";

export const DetailTitle = ({
  testId,
  children,
  isBold,
  count,
  uploadBtn,
  _onClick,
}: IDetailTitleProps) => {
  const styles = { isBold, uploadBtn };
  return (
    <TitleBox data-testid={testId} {...styles}>
      <span>
        {children} {count && count}
      </span>
      {uploadBtn && (
        <UploadButton
          data-testid={`${testId}-uploadbutton`}
          onClick={_onClick}>+ 사진 올리기</UploadButton>
      )}
    </TitleBox>
  );
};

DetailTitle.defaultProps = {
  testId: 'test-molecule-detailtitle',
};