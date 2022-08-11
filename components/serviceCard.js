import css from '../styles/ServiceCard.module.css';

const ServiceCard = ({ icon, title, description, border }) => {
    const cardClass = border ? css.card : css.noBorderCard;

    return (
        <div className={cardClass}>
            {icon && <div>{icon}</div>}
            <h4 className={css.title}>{title}</h4>
            <p className={css.description}>{description}</p>
        </div>
    );
}

export default ServiceCard;