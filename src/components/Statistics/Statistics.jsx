import PropTypes from 'prop-types';
import React from 'react';
import { CountStatisticWrapper, StatisticEl, StatisticList } from './Statistics.styled';
export const Statistics = ({good, bad, neutral, total, positivePercentage}) =>{
  return (
    <div>
      <StatisticList>
        <StatisticEl>Good: {good}</StatisticEl>
        <StatisticEl>Neutral: {neutral}</StatisticEl>
        <StatisticEl>Bad: {bad}</StatisticEl>
      </StatisticList>
      <CountStatisticWrapper>
        <p>Total: {total()}</p>
        <p>Positive feedback: {positivePercentage()}</p>
      </CountStatisticWrapper>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
