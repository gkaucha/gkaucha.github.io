import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/free-regular-svg-icons'; // Import the FontAwesomeIcon component.
import styles from './styles.module.css';



function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.card, 'card')}>
        <div className="card__image text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="card__body text--center">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}



const FeatureList = [
  {
    title: 'Programming',
    Svg: require('@site/static/img/programming.svg').default,
    description: (
      <>
        A program is a series of instructions written in a specific language like C, C++, Python, Go, Rust etc.
        Programming is a very natural and intuitive concept.
      </>
    ),
  },
  {
    title: 'Cybersecurity',
    Svg: require('@site/static/img/cybersecurity.svg').default,
    description: (
      <>
        The practice of protecting computer systems, networks, and data from digital threats, 
       to ensure confidentiality, integrity, and availability.
        Learn on domains like networking, countermeasures, cryptology, shellchode etc.
      </>
    ),
  },
  {
    title: 'DevOps',
    Svg: require('@site/static/img/devops.svg').default,
    description: (
      <>
        Practices that combines software development (Dev) and IT operations (Ops) 
        to streamline and automate the end-to-end software delivery pipeline for faster and more reliable releases.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
