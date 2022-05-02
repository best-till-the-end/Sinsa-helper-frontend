// import React from 'react';
// import styled from 'styled-components';
// import { connect } from 'react-redux';
// import { handleDislikeWishItem, handlelikeWishItem } from '../../redux';

// const Product = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
// const ProductDetail = styled.div`
//   flex: 2;
//   display: flex;
// `;
// const OtherImage = styled.img`
//   width: 200px;
//   height: 20vh;
//   object-fit: cover;
// `;
// const Details = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;
// const ProductName = styled.span``;
// const ProductScore = styled.span``;
// const PriceDetail = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;

//   div {
//     display: flex;
//     justify-content: flex-end;
//   }
//   img {
//     width: 30px;
//     cursor: pointer;
//   }
//   a {
//     border: 2px solid teal;
//     background-color: white;
//     cursor: pointer;
//     font-weight: 500;
//     padding: 5px 5px;
//     margin-top: 10px;
//     margin-right: 10px;
//     &:hover {
//       background-color: #f8f4f4;
//     }
//   }
// `;
// const ProductPrice = styled.div`
//   font-size: 30px;
//   font-weight: 200;
//   margin-top: 20px;
// `;

// function OtherProducts({
//   index,
//   photo,
//   title,
//   deliveryScore,
//   sizeScore,
//   qualityScore,
//   priceToday,
//   like,
//   itemId,
//   itemUrl,
//   ClickLikeButton,
//   ClickUnLikeButton,
// }) {
//   return (
//     <Product key={index}>
//       <ProductDetail>
//         <OtherImage src={photo}></OtherImage>
//         <Details>
//           <ProductName>
//             <b>Product:</b> {title}
//           </ProductName>
//           <ProductScore>
//             <b>배송:</b> {deliveryScore}
//           </ProductScore>
//           <ProductScore>
//             <b>사이즈:</b> {sizeScore}
//           </ProductScore>
//           <ProductScore>
//             <b>품질:</b> {qualityScore}
//           </ProductScore>
//         </Details>
//       </ProductDetail>
//       <PriceDetail>
//         <ProductPrice> {priceToday}</ProductPrice>
//         {like ? (
//           <img
//             src={like.likeSrc}
//             onClick={() => ClickLikeButton(itemId)}
//             alt="like"
//           ></img>
//         ) : (
//           <div>
//             <img
//               src={like.NonLikeSrc}
//               onClick={() => ClickUnLikeButton(itemId)}
//               alt="unlike"
//             ></img>
//             <a href={itemUrl}>상품 보러가기</a>
//           </div>
//         )}
//       </PriceDetail>
//     </Product>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     like: state.category.status.like,
//     searchResult: state.category.status.searchResult,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleDislikeWishItem: (item_id, headers) => {
//       return dispatch(handleDislikeWishItem(item_id, headers));
//     },
//     handlelikeWishItem: (item_id, headers) => {
//       return dispatch(handlelikeWishItem(item_id, headers));
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(OtherProducts);
