import { useContext } from 'react';
import { WindowPropsContext } from '../../lib/contexts';
import Header from "../../components/v2/Header";
import PresentationCard from '../../components/v2/PresentationCard';
import Objectives from '../../components/v2/Objectives/Objectives';
import GetAdvisory from '../../components/v2/GetAdvisory';
import WorkingWays from '../../components/v2/WorkingWays';
import AvailableServices from '../../components/v2/AvailableServices';

export default function AsesoriasPersonalizadas() {

    const windowProps = useContext(WindowPropsContext);

    return (
        <>
            <Header />
            <PresentationCard />
            <Objectives />
            <GetAdvisory />
            <WorkingWays />
            <AvailableServices />
        </>
    );
}