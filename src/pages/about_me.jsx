// LIBRARY //
import React, { useContext } from 'react';
// import styled from 'styled-components';
// STYLE //
import '../App.css';
// CONTEXT //
import { StyleContext } from '../contexts/style.context';
import { ThemeContext } from '../contexts/theme.context';
// PAGE //
// COMPONENT //
import GlassmorphismComponent from '../components/glassmorphism/glassmorphism-component';
// OTHER //

export default function AboutMe() {
  const { PageContainer, isLoad } = useContext(StyleContext);
  const { theme } = useContext(ThemeContext);

  return (isLoad &&
    <PageContainer id='about_me' className={"animate__animated animate__backIn"}>
      <GlassmorphismComponent>
        <h2 style={{ color: theme.text, marginBottom: 10 }}>À propos de moi</h2>
        <section>
          <p style={{ color: theme.text }}>
            Après un cursus initial en biologie guidé par un besoin continu d'apprentissage et de recherche, je me suis réorienté vers le developpement web et mobile, un métier d'avenir et ayant pour caractéristique un apprentissage continu tout au long de sa carrière ce qui correspond à mes besoins.
          </p>
          <br />
          <p style={{ color: theme.text }}>
            C'est donc ainsi que j'ai commencé en Mars 2021 la formation
            <a target="_blank" rel="noreferrer" className='formation' href="https://simplon.co/formation/foundation/24">Apple Foundation Program</a>
            de 4 semaines au sein de
            <a target="_blank" rel="noreferrer" className='redirectLink' href="https://simplon.co/">Simplon</a>
            ayant pour but d'initier ses apprenants au codage et à la création d'un prototype d'appplication au cours de celle-ci.
          </p>
          <br />
          <p style={{ color: theme.text }}> J'ai ensuite poursuivi avec une autre formation de
            <a target="_blank" rel="noreferrer" className='formation' href="https://www.konexio.eu/competences-code.html">Développeur Web et Mobile Fullstack</a>
            entre Mai 2021 et Octobre 2021  au sein de
            <a target="_blank" rel="noreferrer" className='redirectLink' href="https://www.konexio.eu/index.html">Konexio</a>,
            celle-ci ayant pour but de professionnaliser ses apprenants à travers une formations complète et très intense à laquelle j'ai enchainé avec un stage de 6 mois au sein de
            <a target="_blank" rel="noreferrer" className='redirectLink' href="https://www.orchestra.eu/">Orchestra</a>.
          </p>
          <br />
          <p style={{ color: theme.text }}>
            Afin de me perfectionner et d'approfondir mes connaissances sur la création d'application mobile, j'ai suivi la formation
            <a target="_blank" rel="noreferrer" className='formation' href="https://www.gpi2d.greta.fr/fichesformation/developpeur-dapplications-mobiles/">Développeur d’applications mobiles</a>
            du
            <a target="_blank" rel="noreferrer" className='redirectLink' href="https://www.greta-iledefrance.fr/">Greta</a> d'Octobre 2022 à Décembre 2022.
          </p>
          <br />
          <p style={{ color: theme.text }}>
            Plus personellement, j'ai un intérêt prononcé pour les projets liés au secteur du jeu (web ou mobile), de l'apprentissage, de la santé physique (Sport, remise en forme, conseils/motivations) ainsi que les scienses.
          </p>
        </section>
      </GlassmorphismComponent>
    </PageContainer>
  )
}