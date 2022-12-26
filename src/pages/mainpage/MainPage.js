import React from 'react';
import styles from './MainPage.module.scss';
import PlansList from "../../components/plansList/PlansList";
import AddPlan from "../../components/addPlan/AddPlan";

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <PlansList />
            <AddPlan />
        </div>
    );
}

export default MainPage;