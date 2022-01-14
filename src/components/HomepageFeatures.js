import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '仇老师与姜同学的日常',
    to: '/love/intro',
    Svg: require('../../static/img/042-in-love.svg').default,
    description: (
      <>
        记录仇老师与小姜同学的日常生活
      </>
    ),
  },
  {
    title: '工作相关文档',
    to: '/work/intro',
    Svg: require('../../static/img/044-worker.svg').default,
    description: (
      <>
        幼师与QA的相关工作文档整理
      </>
    ),
  },
  {
    title: '普通文档',
    to: '/docs/intro',
    Svg: require('../../static/img/018-drawing.svg').default,
    description: (
      <>
        就是一个普普通通的文档啦，不知道要整理什么
      </>
    ),
  },
];

function Feature({Svg, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
        <a href={to}></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
