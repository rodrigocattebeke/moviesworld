"use client";
import { Filter } from "@/components/filters/Filter/Filter";
import { useContext, useEffect, useState } from "react";
import videocam from "@/assets/icons/videocam.svg";
import { LoginContext } from "@/contexts/LoginContext";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader/Loader";
import { ContentList } from "@/components/content/ContentList/ContentList";

const filters = ["peliculas", "series"];

const favTypes = {
  peliculas: "moviesId",
  series: "seriesId",
};

const contTypes = {
  peliculas: "pelicula",
  series: "serie",
};

export const FavoritesPage = () => {
  const navigate = useRouter();
  const { user } = useContext(LoginContext);
  const [contentList, setContentList] = useState([]);
  const [favoriteType, setFavoriteType] = useState(favTypes[0]);
  const [typeSelected, setTypeSelected] = useState(filters[0]);
  const [contentType, setContentType] = useState(contTypes[0]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!user.isLogged) return navigate.push("/iniciar-sesion");

  useEffect(() => {
    setFavoriteType(favTypes[typeSelected]);
    setContentType(contTypes[typeSelected]);
  }, [typeSelected]);

  useEffect(() => {
    if (!user.isLogged) return;
    setContentList([]);
    setIsLoading(true);
    setIsSuccess(false);
    const contentIdArray = user.loggedUserData.favorites[favoriteType];
    if (!contentIdArray || contentIdArray.length == 0) {
      setIsLoading(false);
      setIsSuccess(true);
      return;
    }

    const getContent = async () => {
      try {
        const responses = await Promise.all(contentIdArray.map((id) => fetch(`/api/${contentType}?id_${contentType}=${id}`)));

        const data = await Promise.all(responses.map((res) => res.json()));
        setContentList(data);
        setIsLoading(false);
        setIsSuccess(true);

        console.log(data);
      } catch (error) {
        console.error(error);
        setIsSuccess(false);
        setIsLoading(false);
        return;
      }
    };
    getContent();
  }, [favoriteType]);

  const onFilterChange = (filter) => {
    setIsLoading(true);
    setTypeSelected(filter);
  };

  return (
    <>
      <div className="container-xxl px-4 py-2">
        <h2>Favoritos</h2>
        <Filter title="Mostrar" availableFilters={filters} onFilterChange={onFilterChange} icon={videocam} />
        {isLoading ? (
          <Loader />
        ) : !isSuccess ? (
          <h3 className="mx-3 my-4">Hubo un error al cargar los datos, intente de nuevo.</h3>
        ) : contentList.length == 0 ? (
          <h3 className="mx-3 my-4">No hay contenido añadido a favoritos.</h3>
        ) : (
          <>
            <ContentList contentList={contentList} type={typeSelected} />
          </>
        )}
      </div>
    </>
  );
};
