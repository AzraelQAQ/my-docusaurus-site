import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '仇老师与姜同学的日常',
    href: '/love/intro',
    Svg: require('../../static/img/042-in-love.svg').default,
    description: (
      <>
        记录白羊与金牛的相爱相杀
      </>
    ),
  },
  {
    title: '工作与学习',
    href: '/work/intro',
    Svg: require('../../static/img/044-worker.svg').default,
    description: (
      <>
        记录了幼师与测试工程师相关工作与学习的文档整理
      </>
    ),
  },
  {
    title: '奇奇怪怪',
    href: '/docs/intro',
    Svg: require('../../static/img/018-drawing.svg').default,
    description: (
      <>
        就是一个普普通通的文档啦，不知道要整理什么
      </>
    ),
  },
];

function Feature({Svg, title, description, href}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={href}>
        <Svg className={styles.featureSvg} alt={title} />
        </a>
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
