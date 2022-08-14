import React from 'react';
import { Section, Content, Container, Title, Input } from './styles';

const AdminProduct = ({ add, url, onChange }) => {
  return (
    <Section>
      <Content>
        <Container>
          <center>
            <Title>상품의 URL을 적으세요</Title>
            <div>
              같이 분석하고 싶은 상품을 등록하세요. 상품 등록은 5분 정도의
              시간이 걸릴 수 있습니다..
            </div>
            <Input>
              <input name='url' value={url} onChange={onChange} />
              <button onClick={add}>upload</button>
            </Input>
          </center>
        </Container>
      </Content>
    </Section>
  );
};

export default AdminProduct;
