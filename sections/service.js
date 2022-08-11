import ServiceCard from '../components/serviceCard';

import ServiceDescription from '../components/serviceDescription';

import css from '../styles/Service.module.css';
import { sectionTitle } from '../styles/common.module.css';

const Service = () => {
    const { website, webapp, mobapp, hosting, consulting } = ServiceDescription;
    return (
        <section id='Services' className={css.section}>
            <div className={css.wrapper}>
                <div className={sectionTitle}>Services</div>
                <div className={css.cardWrapper}>
                    <ServiceCard /*icon='icon'*/ title={website.title} description={website.desc} border />
                    <ServiceCard /*icon='icon'*/ title={webapp.title} description={webapp.desc} border />
                    <ServiceCard /*icon='icon'*/ title={mobapp.title} description={mobapp.desc} />
                </div>
                {/*
            <div className={css.wrapper}>
                <ServiceCard title={hosting.title} description={hosting.desc} border />
                <ServiceCard title={consulting.title} description={consulting.desc} />
            </div>
            */}
            </div>
        </section>
    );
};

export default Service;
