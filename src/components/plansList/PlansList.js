import React, {useEffect} from 'react';
import styles from './PlansList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {deletePlan, plansSelector} from "../../redux/slices/plansSlice";

const PlansList = () => {
    const plansList = useSelector(plansSelector.selectAll);
    const dispatch = useDispatch();

    const removePlan = (id) => {
        dispatch(deletePlan(id))
    }

    return (
        <div className={styles.wrapper}>
            <h1>planlist</h1>
            {
                plansList && plansList.map(plan => <div key={plan.id} className={styles.plan}>
                    <div>{plan.plan.title}</div>
                    <button onClick={() => removePlan(plan.id)}>delete</button>
                </div>)
            }

        </div>
    );
}

export default PlansList;