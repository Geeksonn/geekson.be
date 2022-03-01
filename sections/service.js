import css from '../styles/Service.module.css';
import ServiceDescription from '../components/serviceDescription';
import { sectionTitle } from '../styles/common.module.css';
import { useEffect, useState } from 'react';

const Service = () => {
    const [selectedService, setSelectedService] = useState(ServiceDescription.website);

    useEffect(() => {
        const tabItems = document.getElementById('tab-wrapper').children;
        for (let i = 0; i < tabItems.length; i++) {
            tabItems[i].classList.remove(css.tabActive);
        }
        document.getElementById(selectedService.id).classList.add(css.tabActive);
    });

    return (
        <section id='Services' className={css.section}>
            <div className={css.wrapper}>
                <div className={sectionTitle}>Services</div>
                <div className={css.twoColumn}>
                    <div className={css.subTitle}>Here are some services I propose.</div>
                    <div className={css.description}>
                        <p>
                            Of course, you can always contact me if you have special requests around IT &amp; web.
                            We'll find a way to collaborate.
                        </p>
                    </div>
                </div>
                <div className={css.tabs}>
                    <div id='tab-wrapper' className={css.tabNav}>
                        <div
                            id='svc-website'
                            className={css.tabItem}
                            onClick={() => setSelectedService(ServiceDescription.website)}>
                            <p>Websites</p>
                        </div>
                        <div
                            id='svc-webapp'
                            className={css.tabItem}
                            onClick={() => setSelectedService(ServiceDescription.webapp)}>
                            <p>Web Applications</p>
                        </div>
                        <div
                            id='svc-mobapp'
                            className={css.tabItem}
                            onClick={() => setSelectedService(ServiceDescription.mobapp)}>
                            <p>Mobile Applications</p>
                        </div>
                        <div
                            id='svc-hosting'
                            className={css.tabItem}
                            onClick={() => setSelectedService(ServiceDescription.hosting)}>
                            <p>Hosting</p>
                        </div>
                        <div
                            id='svc-consulting'
                            className={css.tabItem}
                            onClick={() => setSelectedService(ServiceDescription.consulting)}>
                            <p>Consulting</p>
                        </div>
                    </div>
                    <div className={css.content}>
                        <p className={css.contentTitle}>{selectedService.title}</p>
                        {selectedService.desc}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
