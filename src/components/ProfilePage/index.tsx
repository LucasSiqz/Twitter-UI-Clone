import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}
        <h1>Lucas Siqueira</h1>
        <h2>@lucassiqz</h2>

        <p>
          Front-end developer at{' '}
          <a href="http://www.goledger.com.br/">GoLedger</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Brasília, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 14 de julho de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>93</strong>
          </span>
          <span>
            <strong>453 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
