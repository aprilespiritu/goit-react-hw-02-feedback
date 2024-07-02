import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
    return (
        <div className={css.divSection}>
            <section>
                <h2 className={css.sectionTitle}>{title}</h2>
                {children}
            </section>
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};