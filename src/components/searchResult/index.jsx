import React from 'react';
import {
  Section,
  Header,
  ResultContainer,
  VerticleLine,
  FirstProduct,
  ImageContainer,
  Image,
  InfoContainter,
  Title,
  Desc,
  Price,
  ButtonContainer,
  LikeButton,
  ProductButton,
  OtherContainer,
  Info,
  Summary,
  Hr,
  Product,
  ProductDetail,
  ImageBox,
  OtherImage,
  Details,
  ProductName,
  ProductScore,
  PriceDetail,
  ProductPrice,
} from './styles';
const SearchResult = ({
  searchResult,
  like,
  ClickLikeButton,
  ClickUnLikeButton,
}) => {
  return (
    <Section>
      {searchResult && searchResult.length > 0 ? (
        <ResultContainer>
          <Header>검색결과</Header>
          <FirstProduct>
            <ImageContainer>
              <Image src={searchResult[0].photo}></Image>
            </ImageContainer>
            <VerticleLine />
            <InfoContainter>
              <Title>{searchResult[0].itemName}</Title>
              <Desc>
                <b>배송:</b> {searchResult[0].deliveryScore}
              </Desc>
              <Desc>
                <b>사이즈:</b> {searchResult[0].sizeScore}
              </Desc>
              <Desc>
                <b>품질:</b> {searchResult[0].qualityScore}
              </Desc>
              <Price>{searchResult[0].priceToday}</Price>
              <ButtonContainer>
                <ProductButton href={searchResult[0].itemUrl}>
                  상품 보러가기
                </ProductButton>
                {searchResult[0].like ? (
                  <LikeButton
                    src={like.likeSrc}
                    onClick={() => ClickLikeButton(searchResult[0].itemId)}
                  ></LikeButton>
                ) : (
                  <LikeButton
                    src={like.NonLikeSrc}
                    onClick={() => ClickUnLikeButton(searchResult[0].itemId)}
                  ></LikeButton>
                )}
              </ButtonContainer>
            </InfoContainter>
          </FirstProduct>
          <Hr />
          <OtherContainer>
            <Info>
              {searchResult
                .slice(1, searchResult.length)
                .map((product, index) => (
                  <>
                    <Product key={index}>
                      <ProductDetail>
                        <ImageBox>
                          <OtherImage src={product.photo}></OtherImage>
                        </ImageBox>
                        <Details>
                          <ProductName>
                            <b>Product:</b> {product.itemName}
                          </ProductName>
                          <ProductScore>
                            <b>배송:</b> {product.deliveryScore}
                          </ProductScore>
                          <ProductScore>
                            <b>사이즈:</b> {product.sizeScore}
                          </ProductScore>
                          <ProductScore>
                            <b>품질:</b> {product.qualityScore}
                          </ProductScore>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductPrice> {product.priceToday}</ProductPrice>
                        {product.like ? (
                          <img
                            src={like.likeSrc}
                            onClick={() => ClickLikeButton(product.itemId)}
                            alt='like'
                          ></img>
                        ) : (
                          <div>
                            <img
                              src={like.NonLikeSrc}
                              onClick={() => ClickUnLikeButton(product.itemId)}
                              alt='unlike'
                            ></img>
                          </div>
                        )}
                        <a href={product.itemUrl}>상품 보러가기</a>
                      </PriceDetail>
                    </Product>
                    <Hr />
                  </>
                ))}
            </Info>
            <Summary>Summary</Summary>
          </OtherContainer>
        </ResultContainer>
      ) : (
        <div></div>
      )}
    </Section>
  );
};

export default SearchResult;
