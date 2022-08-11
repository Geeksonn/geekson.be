import css from '../styles/SkillBadge.module.css';

const SkillBadge = ({ skill }) => {
    return (
        <div className={css.badge}>{skill}</div>
    );
}

export default SkillBadge;