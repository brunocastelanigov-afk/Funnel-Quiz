import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Quiz.module.scss';
import useImagePreload from '../hooks/useImagePreload';
import { FadeUp } from '../components/FadeUp';

const Quiz = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Preload next page images
  const imagesToPreload = useMemo(() => [
    '/img/women-18-34.webp', '/img/women-35-49.webp', '/img/women-50-64.webp', '/img/women-65-plus.webp',
    '/img/men-18-34.webp', '/img/men-35-49.webp', '/img/men-50-64.webp', '/img/men-65-plus.webp'
  ], []);
  useImagePreload(imagesToPreload);

  const handleGenderSelection = (gender) => {
    console.log('[QUIZ] Gênero selecionado:', gender);
    if (gender === 'male') {
      navigate('/age-selection-men');
    } else {
      navigate('/age-selection-women');
    }
  };

  return (

    <div className={styles.container}>
      <div className={styles.content}>
        <FadeUp delay={0.04}>
          <h1 className={styles.title}>
            {t('quiz.initial.headline_part1')} {t('quiz.initial.headline_part2')}
          </h1>
        </FadeUp>
        <FadeUp delay={0.12}>
          <p className={styles.subtitle}>{t('quiz.initial.subtitle')}</p>
        </FadeUp>
        <div className={styles.options}>
          <FadeUp delay={0.2}>
            <button
              className={styles.option}
              onClick={() => handleGenderSelection('male')}
            >
              <span className={styles.emoji}>👨</span>
              <span className={styles.text}>{t('quiz.initial.gender_male')}</span>
            </button>
          </FadeUp>
          <FadeUp delay={0.28}>
            <button
              className={styles.option}
              onClick={() => handleGenderSelection('female')}
            >
              <span className={styles.emoji}>👩</span>
              <span className={styles.text}>{t('quiz.initial.gender_female')}</span>
            </button>
          </FadeUp>
        </div>
      </div>
    </div>

  );
};

export default Quiz;
