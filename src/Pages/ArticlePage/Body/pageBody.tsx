import React, {FC} from 'react';
import {SiPackage} from "../../../models/PackageModel";
import styles from "../articlePage.module.scss"

interface IPageBody {
    Package:SiPackage
}

const PageBody:FC<IPageBody> = ({Package}) => {
    return (
        <div className={styles.articlePageBody}>
            <p>
                {Package.text}
            </p>
        </div>
    );
};

export default PageBody;