import css from '../styles/Skills.module.css';
import SkillBadge from './skillBadge';

const Skills = () => {
    const firstRowSkills = ['HTML 5 & CSS', 'JavaScript', 'React', 'NodeJS', 'Angular'];
    const secondRowSkills = ['MongoDB', 'PostgreSQL', 'Kubernetes', 'Docker', 'AWS'];

    return (
        <div className={css.wrapper}>
            <div className={css.firstRow}>
                {firstRowSkills.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                ))}
            </div>
            <div className={css.secondRow}>
                {secondRowSkills.map((skill, index) => (
                    <SkillBadge key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
