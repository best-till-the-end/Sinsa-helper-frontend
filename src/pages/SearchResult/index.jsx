import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  handleDislikeWishItem,
  handleLikeWishItem,
  getSearchResult,
} from '../../redux';
import SearchResult from '../../components/searchResult';

const SearchResultPage = ({
  searchResult,
  like,
  handleDislikeWishItem,
  handleLikeWishItem,
  getSearchResult,
}) => {
  const { main, sub, delivery, size, quality } = useParams();
  const headers = {
    Authorization: localStorage.getItem('token'),
  };
  useEffect(() => {
    getSearchResult(
      {
        mainCategory: main,
        subCategory: sub,
        deliveryPreference: delivery,
        sizePreference: size,
        qualityPreference: quality,
      },
      headers
    );
  }, [getSearchResult]);

  const ClickLikeButton = (item_id) => {
    handleDislikeWishItem(
      {
        mainCategory: main,
        subCategory: sub,
        deliveryPreference: delivery,
        sizePreference: size,
        qualityPreference: quality,
      },
      item_id,
      headers
    );
  };
  const ClickUnLikeButton = (item_id) => {
    console.log(item_id, headers);
    handleLikeWishItem(
      {
        mainCategory: main,
        subCategory: sub,
        deliveryPreference: delivery,
        sizePreference: size,
        qualityPreference: quality,
      },
      item_id,
      headers
    );
  };

  return (
    <SearchResult
      searchResult={searchResult}
      like={like}
      ClickLikeButton={ClickLikeButton}
      ClickUnLikeButton={ClickUnLikeButton}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.category.status.searchResult,
    loading: state.category.status.loading,
    like: state.category.status.like,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDislikeWishItem: (body, item_id, headers) => {
      return dispatch(handleDislikeWishItem(body, item_id, headers));
    },
    getSearchResult: (body, headers) => {
      return dispatch(getSearchResult(body, headers));
    },
    handleLikeWishItem: (body, item_id, headers) => {
      return dispatch(handleLikeWishItem(body, item_id, headers));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);
