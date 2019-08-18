import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
import {
  SubtitleContainer,
  TitleContainer,
  ContentContainer,
  Image,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <Image imageUrl={imageUrl} />
    <ContentContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <SubtitleContainer>SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </div>
);

export default withRouter(MenuItem);
