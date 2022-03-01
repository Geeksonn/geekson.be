import ProjectCard from '../components/projectCard';
import ProjectDescription from '../components/projectDescription';

import { sectionTitle } from '../styles/common.module.css';
import css from '../styles/Project.module.css';

const Project = () => {
    return (
        <section id='Projects' className={css.projectSection}>
            <div className={css.wrapper}>
                <div className={css.column}>
                    <p className={sectionTitle}>Projects</p>
                    <p className={css.sectionDescription + ' ' + css.short}>
                        Take a look at my personal projects.
                    </p>
                    <p className={css.short + ' ' + css.spaceAfter}>
                        These are some projects that I have worked on and that I use in my day-to-day life.
                    </p>
                    <ProjectCard project={ProjectDescription.easyStock} />
                </div>
                <div className={css.column}>
                    <ProjectCard project={ProjectDescription.easyOrder} />
                    <div className={css.spaceAfter}></div>
                    <ProjectCard project={ProjectDescription.easyBet} />
                </div>
            </div>
        </section>
    );
};

export default Project;
