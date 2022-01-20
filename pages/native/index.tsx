import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/organisms/Layout/Layout";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

const story: string[] =
  `속초 국립산악박물관에서 백두대간 기획전시회를 열었다. ‘백두대간’이라 하면 종주 산행을 떠올리지만, 이번 전시회는 대간을 있게 한 역사적인 뿌리와 근간을 심도 깊게 파헤치고 있다. 백두대간의 근원인 <산경표山經表>를 기반으로, 일제강점기 이후의 ‘태백산맥 체계’와 ‘백두대간 개념’이 서로 다르다는 것을 밝히고 있다. 특히 <산경표>가 단순히 산의 족보를 넘어서 구체적인 위치 정보를 담고 있는 조선판 지리정보시스템GIS이라는 점을 새롭게 알리고 있다. 또한 지난 30년간 이룩해 온 백두대간 관련 단체들의 업적을 정리하고 앞으로 30년 백두대간의 미래적 가치를 가늠한다는 점에서도 중요한 의미를 가진다. 이번 전시는 국립산악박물관 수장고에 있던 조선시대 지리서 <산경표>에서 비롯되었다. 조선 영조 때 실학자인 여암 신경준(1712~1781)이 편찬한 것으로 알려진 <산경표>는 조선판 GIS라는 평가를 받는다. 지역의 진산을 중심으로 1,600여 자연 지명과 300여 고을을 8개 방위와 1리 단위의 거리로 표시해 18세기 조선의 인문·지리 정보를 집대성한 지리서다. 전국적인 산줄기 체계 위치 정보를 족보 형식으로 나타낸 <산경표>와 같은 지리서는 우리나라에만 있는 고유의 것이라 특별하고 소중한 유산이다. 국립산악박물관은 2021년 초 백두대간을 주제로 강연 프로그램을 기획하던 중 수장고에 있던 <산경표>가 국내에 알려지지 않은 희귀본임을 발견하게 되었다. 전문가의 고증과 국역 해제를 통해 19세기 초기에 필사된 희귀본으로 그 가치를 인정받음으로써 한국 고문서 데이터베이스인 한국고전적종합목록에 18번째 판본으로 등재했다. 이어 조선광문회 인쇄본 <산경표> 2종도 등재했다. 조선시대 18세기 말 무렵에 완성된 백두대간 개념은 산과 강, 우리 국토를 가장 독창적으로 표현한 우리 민족 고유의 전통 지리인식 체계이다. 일제강점기의 시작과 더불어 잊혀졌던 백두대간 체계는 1990년 무렵부터 되살아났으며, 이번 전시 기간 중 ‘백두대간 부활사’라는 테마로 소개되고 있다. 이번 기획전시는 <산경표> 발굴의 대미를 장식한다는 의미뿐 아니라 산악박물관의 정체성과 전문성을 극대화하기 위해 나갈 방향을 제시해 준다는 의미도 크다. 박물관에서는 소장 유물의 가치를 발견하기 위한 연구와 더불어 이를 더 적극적으로 국민들에게 공개하기 위한 방식을 고민하고 있다. 전시는 1부와 2부로 주제에 따라 공간이 나뉘어 있다. 1부의 주제는 ‘백두대간과 산경표’이다.  <산경표>를 비롯해 <택리지> 같은 지리서와 조선시대 지도, 그리고 백두대간의 과거와 현재를 살펴볼 수 있도록 구성했다. 전시장 초입에는 기획 의도와 함께 조선 전도인 <청구여도첩靑邱輿圖帖>을 배치해 관람객들이 포토존으로 활용할 수 있도록 구성했다. 특히 <청구여도첩>은 원본을 확대 복사해 백두대간 산줄기가 잘 보이도록 디지털 작업을 했다. 옆 공간으로 한 걸음 이동하면 이번 기획전의 주인공인 박물관 소장 <산경표> 필사본 1종과 조선광문회 인쇄본 2종을 볼 수 있다. <산경표>는 현재 국립중앙도서관, 국립중앙박물관, 규장각, 장서각, 미국 하버드 옌칭도서관, 일본동양문고 등 국내외 기관에서 필사본 17종을 소장하고 있다. 국립산악박물관이 발굴한 <산경표>는 이 필사본 17종에 이어서 18번째 판본으로 등록되었다. 백두대간과 주요 명산이 그려진 <청구여도첩>, <팔도명산지도> 등에서는 한자 지명에서 자신의 고향이나 현 주소지에 해당하는 고을을 찾고자 집중하는 관람객들의 모습을 볼 수 있다. ‘백두대간 부활사’라는 코너에서는 잊혀진 이름이었던 백두대간이 발견되고 세상으로 다시 나온 과정을 알 수 있게 구성했다. 1988년 한국대학산악연맹 소속 대학산악부원들이 1980년에 인쇄본 <산경표> 발견자 고故 이우형 선생과 협력해 최초로 백두대간 종주를 한 사실을 담았다. 산림청의 백두대간 관련 정책과 법령 등이 제정되는 과정, 백두대간 관련 연구 보고서와 단행본 발간 등의 역사를 연표로 정리했다. 최근 한국등산·트레킹지원센터의 영상 공모전으로 만들어진 청소년 백두대간 생태탐방 영상도 상영하고 있다.`.split(
    " "
  );
const getRandomWords = (n: number) => {
  const words: string[] = [];
  for (let i = 0; i < n; i++) {
    words.push(story[Math.floor(Math.random() * story.length)]);
  }
  return words.join(" ");
};

interface ContainerProps {
  bg?: string;
}
const TestLink = styled.a`
  margin: 8px 0;
  font-size: 16px;
`;
const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  padding-bottom: 32px;
`;
const Container = styled.section`
  width: 100%;
  padding: 16px;
  background-color: ${(p: ContainerProps) => p.bg ?? "#e0f4ff"};
`;
const TestInp = styled.input`
  width: 100%;
  margin: 4px 0;
  font-size: 24px;
  background-color: white;
  color: black;
  border-radius: 4px;
`;
const TestBtn = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 8px 16px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
`;

interface NativeAlert {
  title?: string;
  body?: string;
}
const Native: NextPage = () => {
  const [nativeAlert, setNativeAlert] = useState<NativeAlert>({
    title: getRandomWords(5),
    body: getRandomWords(20),
  });
  const [clipboardContent, setClipboardContent] = useState(getRandomWords(10));
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "nativeAlertTitle":
        setNativeAlert({ ...nativeAlert, title: e.target.value });
        break;
      case "nativeAlertBody":
        setNativeAlert({ ...nativeAlert, body: e.target.value });
        break;
      case "clipboardContent":
        setClipboardContent(e.target.value ?? "");
        break;
    }
  };
  return (
    <Layout>
      <Head>
        <title>Chic Experimental Native Page</title>
        <meta name="description" content="Chic Experimental Native Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Container bg="#86ff5d">
          <h1>Native Alert Test</h1>
          <TestInp
            id="trigger-native-alert-title"
            onChange={onChange}
            name="nativeAlertTitle"
            value={nativeAlert.title}
          />
          <TestInp
            id="trigger-native-alert-body"
            onChange={onChange}
            name="nativeAlertBody"
            value={nativeAlert.body}
          />
          <TestBtn id="trigger-native-alert">Trigger Native Alert</TestBtn>
        </Container>
        <Container bg="#45bcee">
          <h1>Native Clipboard Test</h1>
          <TestInp
            id="send-to-clipboard-input"
            onChange={onChange}
            name="clipboardContent"
            value={clipboardContent}
          />
          <TestBtn id="send-to-clipboard">Send To Native Clipboard</TestBtn>
        </Container>
        <Container bg="#ef9007">
          <h1>Native Geolocation Test</h1>
          <p id="geolocation-from-native"></p>
          <TestBtn id="geolocation-from-native">
            Request Geolocation Data
          </TestBtn>
        </Container>

        <Container bg="#ffbee6">
          <h1>Native Camera Test</h1>
          <img
            style={{
              marginTop: "16px",
              marginBottom: "16px",
              display: "none",
              width: "100%",
              height: "auto",
            }}
            id="photo-url"
            src=""
            alt="test image for camera module"
          />
          <TestBtn id="show-camera-modal">Show Camera Modal</TestBtn>
        </Container>
        <Container>
          <h1>Native Image Picker Test</h1>
          <img
            style={{
              marginTop: "16px",
              marginBottom: "16px",
              display: "none",
              width: "100%",
              height: "auto",
            }}
            id="gallery-url"
            src=""
            alt="test image for image picker module"
          />
          <TestBtn id="open-image-picker">Show Image Picker</TestBtn>
        </Container>
        <Container bg="#fbb488">
          <TestLink href="https://kream.co.kr/">Link to Kream</TestLink>
          <br />
          <br />
          <TestLink href="https://us.vestiairecollective.com/">
            Link to Vestiaire Collective
          </TestLink>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default Native;
