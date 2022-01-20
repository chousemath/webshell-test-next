import { Ul, Li, A } from "./style";
import Link from "next/link";

export const UserSearchBtns = () => {
  return (
    <Ul>
      <Li>
        <Link href="/join" passHref>
          <A>이메일 가입</A>
        </Link>
      </Li>
      <Li>
        <Link href="/find_email" passHref>
          <A>이메일 찾기</A>
        </Link>
      </Li>
      <Li>
        <Link href="find_password" passHref>
          <A>비밀번호 찾기</A>
        </Link>
      </Li>
    </Ul>
  );
};
