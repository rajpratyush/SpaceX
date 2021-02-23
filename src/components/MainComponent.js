import React, {useState,useEffect} from 'react'

import Api from './ApiCalls';
import CardDisplay from './CardDisplay';

import LoadingSpinner from './LoadingSpinner';
import Checkboxes from './Checkboxes';
import History from './History'


const styles = {
    container : {
        height : '90vh',
    },
    dataview : {
        height : '80vh',
        display : 'flex',
        flexWrap : 'wrap',
        padding : '10px',
        margin : '15px',
        justifyContent : 'center',
        alignContent : 'space-between',
        alignItems : 'center'
    },
}

function DataView({missions}){
    return (
        <div style={styles.dataview}>
           {
                !missions.length ? <p>No Data</p> : missions.map( e => <CardDisplay key={e.flight_number} data={e}/>)
            }
        </div>
    )
}

const MainComponent = () => {
    const params = new URLSearchParams(window.location.search);
    const ly = params.get("launch_year");
    const ld = params.get("landing_success");
    const lc = params.get("launching_success");

    const [launchyear, setLaunchyear] = useState(ly?ly:"");
    const [launching , setLaunching] = useState(lc==="true"?true:false);
    const [landing , setLanding] = useState(ld==="true"?true:false);
    const [isLoading, setIsLoading] = useState(false);
    const [missions, setMissions] = useState([]);

    useEffect(()=>{
        submitChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const changeLaunchyear = (e)=>{
        setLaunchyear(e.target.value);
    }
    const changeLaunching = (e)=>{
        setLaunching(e.target.checked);
    }
    const changeLanding = (e)=>{
        setLanding(e.target.checked);
    }
    const submitChange = async()=>{
        // e.preventDefault();
        console.log(launching,landing,launchyear);
        setIsLoading(true);
        History.push('/?launch_year='+launchyear+"&landing_success="+landing+"&launching_success="+launching);
        const data = await Api({launchyear,landing,launching});
        setMissions(data);
        setIsLoading(false);
    }

    const some = {
        launchyear,
        landing,
        launching,
        changeLaunchyear,
        changeLaunching,
        changeLanding,
        submitChange
    }

    return (
        <div style = {styles.container}>
            <Checkboxes data={some}/>
            {
                isLoading ? <LoadingSpinner /> : <DataView missions={missions}/>
            }
        </div>
    );
}

export default MainComponent