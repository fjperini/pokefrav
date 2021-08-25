import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../../state/globalState";
import { useTranslation } from "react-i18next";
import { pad } from "../../utils";
import { getPoke } from "./services";
import "./styles.css";

function Lang() {
  const { i18n } = useTranslation("common");
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("es")}>es</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
    </div>
  );
}

const Detail = (props) => {
  const { t } = useTranslation("common");

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const setFromPage = useGlobalState((state) => state.setFromPage);

  useEffect(() => {
    setFromPage(2);
  });

  useEffect(() => {
    setLoading(true);
    getPoke(props.match.params.pokemonId)
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch(() => {});
    setLoading(false);
  }, [props.match.params.pokemonId]);

  const { id, base_experience, abilities, name, types, weight, height } =
    pokemon;

  return (
    <>
      {!loading ? (
        <main>
          <section className="cards">
            <div className="card-detail">
              <img
                src={
                  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
                  pad(id, 3) +
                  ".png"
                }
                alt="imagen card"
                className="card-header pokemon"
              />

              <div className="card-body">
                <Lang />
                <h1 className="card-body-title">{name}</h1>
                <h4>{t("web.Abilities")}</h4>
                <p className="card-body-abilities">
                  {abilities &&
                    abilities
                      .map((ability) => {
                        return t(
                          "ability." +
                            ability.ability.url
                              .slice(0, -1)
                              .substring(
                                ability.ability.url.slice(0, -1).indexOf("/") +
                                  1
                              )
                              .replace("/pokeapi.co/api/v2/ability/", "")
                        );
                      })
                      .join(" - ")}
                </p>
                <h4>{t("web.Types")}</h4>{" "}
                <p className="card-body-abilities">
                  {types &&
                    types
                      .map((type) => {
                        return t(
                          "type." +
                            type.type.url
                              .slice(0, -1)
                              .substring(
                                type.type.url.slice(0, -1).indexOf("/") + 1
                              )
                              .replace("/pokeapi.co/api/v2/type/", "")
                        );
                      })
                      .join(", ")}
                </p>
              </div>
              <div className="card-footer">
                <div className="card-footer-social">
                  <h3>{base_experience}</h3>
                  <p>{t("web.BaseXP")}</p>
                </div>
                <div className="card-footer-social">
                  <h3>{Math.round(height) / 10} mts</h3>
                  <p>{t("web.Height")}</p>
                </div>
                <div className="card-footer-social">
                  <h3>{Math.round(weight) / 10} Kg</h3>
                  <p>{t("web.Weight")}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        ""
      )}
    </>
  );
};

export default Detail;
