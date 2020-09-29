import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';

//import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initalState';

const Home = ({ myList, trends, originals }) => {
  //const initialState = useInitialState(API);

  return (
    <>
      <Header />
      <Search isHome />

      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <CarouselItem key={item.id} {...item} isList={true} />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} isList={false} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} isList={false} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Home);
