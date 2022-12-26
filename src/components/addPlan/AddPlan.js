import React, {useState} from 'react';
import styles from './AddPlan.module.scss';
import {useDispatch} from "react-redux";
import {addPlan} from "../../redux/slices/plansSlice";
import nextId from "react-id-generator";

const AddPlan = () => {
    const [planValue, setPlanValue] = useState('');
    const dispatch = useDispatch();

    const createNewPlan = () => {
        const newId = nextId();
        const newPlan = {
            id: newId,
            plan: {
                title: planValue,
            }
        }
        planValue !== '' && dispatch(addPlan(newPlan));
    }

    return (
        <div className={styles.wrapper}>
            <h1>addplan</h1>
            <input type={"text"} value={planValue} onChange={(e) => setPlanValue(e.target.value)} />
            <button onClick={createNewPlan}>
                Add plan
            </button>
        </div>
    );
}

export default AddPlan;