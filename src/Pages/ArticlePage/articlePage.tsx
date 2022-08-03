import React, {FC, useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useAppSelector} from "../../strore/redux";
import "./articlePage.module.scss"
import PageBody from "./Body/pageBody";
import Header from "../../layout/Header/header";
import styles from "./articlePage.module.scss"



const ArticlePage: FC = () => {
    const { id } = useParams()
    const { SiPackages, isLoading, error } = useAppSelector(state => state.PacksReducer)
    const Package=SiPackages[parseInt(id!, 10)]

    return (
        <>
            <Header>
                {isLoading && <div> Loading </div>}
                {error && <div> {error} </div>}
                {SiPackages.length !== 0 &&
                    <>
                        <img src={Package.img_src} className={styles.topImage} alt={"#"}/>
                        <h1>{ Package.title }</h1>
                    </>
                }
            </Header>

            {isLoading && <div> Loading </div>}
            {error && <div> {error} </div>}
            {SiPackages.length !== 0 &&
                <PageBody Package={SiPackages[parseInt(id!, 10)]}/>
            }
        </>
    );
};

export default ArticlePage;