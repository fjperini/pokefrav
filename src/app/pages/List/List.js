import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../../state/globalState";
import { pad, toFirstCharUpperCase } from "../../utils";
import { getPokes } from "./services";
import "./styles.css";

const List = (props) => {
  const { history } = props;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(5);
  //const [count, setCount] = useState(5);
  //const [hasMore, setHasMore] = useState(true);

  const setFromPage = useGlobalState((state) => state.setFromPage);
  const setLoadingFooter = useGlobalState((state) => state.setLoadingFooter);

  useEffect(() => {
    setFromPage(1);
  });

  const fetchImages = () => {
    setLoadingFooter(true);
    getPokes(page)
      .then(({ data }) => {
        setData(data.results);
        //setCount(data.count);
      })
      .catch(() => {});
    setPage(page + 5);
    setTimeout(() => {
      setLoadingFooter(false);
    }, 2000);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchImages}
      hasMore={true}
      loader={<div className=""></div>}
      endMessage={<div></div>}
    >
      <main>
        <section className="cards">
          {data.map((pokemon, index) => (
            <>
              <div
                className="card"
                onClick={() => history.push(`/pokemon/${index + 1}`)}
              >
                <div className="card__image-container">
                  <div className="img">
                    <img
                      src={
                        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
                        pad(index + 1, 3) +
                        ".png"
                      }
                      alt="imagen card"
                    />
                  </div>
                </div>
                <div className="card__content">
                  <p className="card__title text--medium"></p>
                  <div className="card__info">
                    <h3 className="text--medium">
                      {toFirstCharUpperCase(pokemon.name)}
                    </h3>
                    <p className="card__id text--medium"># {index + 1}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </section>
      </main>
    </InfiniteScroll>
  );
};

export default List;
