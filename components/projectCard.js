import css from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
    const { title, desc, image } = project;
    return (
        <div className={css.box}>
            <div className={css.image}>&nbsp;</div>
            <p className={css.title}>{title}</p>
            <p className={css.description}>{desc}</p>
        </div>
    );
}

export default ProjectCard;