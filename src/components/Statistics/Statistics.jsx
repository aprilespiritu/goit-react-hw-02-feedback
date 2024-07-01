import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { RiEmotionHappyFill } from "react-icons/ri";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { FaSadTear } from "react-icons/fa";

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <div className={css.divStatistics}>
            <p className={css.labelStat}>
                <RiEmotionHappyFill className={css.icon} /> Good:
                <span className={css.value}> {good} </span>
            </p>
            <p className={css.labelStat}>
                <MdOutlineSentimentNeutral className={css.icon} /> Neutral:
                <span className={css.value}> {neutral} </span>
            </p>
            <p className={css.labelStat}>
                <FaSadTear className={css.icon} /> Bad:
                <span className={css.value}> {bad} </span>
            </p>
            <p className={css.labelStat}>
                Total:
                <span className={css.value}> {total} </span>
            </p>
            <p className={css.labelStat}>
                Positive Feedback:
                <span className={css.valuePercentage}> {positivePercentage} </span>
            </p>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};