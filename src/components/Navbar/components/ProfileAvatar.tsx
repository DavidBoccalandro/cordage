import styled from 'styled-components';

interface ProfileImage {
  src: string;
  alt: string;
}

const ProfileAvatarContainer = styled.div<{ src: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ src }) => src ? 'transparent' : '#F87171'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #ffffff;
`;

const ProfileImage = styled.img<ProfileImage>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfileAvatar = ({ src, alt }: ProfileImage) => {
  return (
    <ProfileAvatarContainer src={src}>
      {src ? <ProfileImage src={src} alt={alt} /> : 'D'}
    </ProfileAvatarContainer>
  );
};
