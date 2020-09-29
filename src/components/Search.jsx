/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';

import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { search, searchValue, isHome, isSearch } = props;
  const hasSearch = Object.keys(search).length > 0;

  const handleInput = (event) => {
    props.searchVideo(event.target.value);
  };

  const inputStyle = classNames('input', {
    isHome,
  });

  const searchStyle = classNames('categories', {
    isSearch,
  });

  return (
    <>
      <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy? </h2>
        <input
          type="text"
          name="search"
          className={inputStyle}
          placeholder="Buscar..."
          onChange={handleInput}
        />
      </section>
      {hasSearch ? (
        <Categories title="Resultados de búsqueda" className={searchStyle}>
          <Carousel>
            {search.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      ) : null}

      {searchValue && !hasSearch ? (
        <div className="main mb-5">
          <p>
            No se han encontrado resultados para tu búsqueda ({`${searchValue}`}
            ).
          </p>
        </div>
      ) : undefined}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log('searchValue: ', state.searchValue);
  return {
    search: state.search,
    searchValue: state.searchValue,
  };
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
