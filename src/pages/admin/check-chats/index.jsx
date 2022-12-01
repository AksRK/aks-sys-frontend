import styles from './index.module.scss'
import {useEffect} from "react";
import axios from "axios";
import {Api} from "../../../core/Api";

const CheckChats = () => {

    async function loadChats () {
        await axios.get(Api+'/tst', )
            .then(function (response) {
                console.log(response);
            })
    }

    useEffect(() => {
        loadChats()
    }, [])


    return (
        <div>

        </div>
    );
};

export default CheckChats;